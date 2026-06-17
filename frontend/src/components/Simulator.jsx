import React, { useState, useEffect } from 'react';
import { PlaneTakeoff, PlaneLanding, Calendar, AlertTriangle, CheckCircle, Info, RefreshCw, Code, Plane } from 'lucide-react';

export default function Simulator({ serverUrl }) {
  const [airports, setAirports] = useState([]);
  const [loadingAirports, setLoadingAirports] = useState(true);

  // States para o formulário
  const [originInput, setOriginInput] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState(null);
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false);

  const [destInput, setDestInput] = useState('');
  const [selectedDest, setSelectedDest] = useState(null);
  const [showDestSuggestions, setShowDestSuggestions] = useState(false);

  const [date, setDate] = useState('');
  
  // States para resultados
  const [loadingSimulation, setLoadingSimulation] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Busca lista de aeroportos para preencher autocomplete
  useEffect(() => {
    fetch(`${serverUrl}/api/airports`)
      .then(res => res.json())
      .then(data => {
        setAirports(data);
        setLoadingAirports(false);
      })
      .catch(err => {
        console.error("Erro ao carregar lista de aeroportos:", err);
        setLoadingAirports(false);
      });
  }, [serverUrl]);

  // Filtros de autocomplete
  const filteredOrigins = airports.filter(a =>
    a.label.toLowerCase().includes(originInput.toLowerCase())
  ).slice(0, 10);

  const filteredDests = airports.filter(a =>
    a.label.toLowerCase().includes(destInput.toLowerCase())
  ).slice(0, 10);

  // Lógica do Submit
  const handleSimulate = (e) => {
    e.preventDefault();
    if (!selectedOrigin || !selectedDest) return;

    setLoadingSimulation(true);
    setError(null);
    setResult(null);

    const url = `${serverUrl}/api/simulate?origem=${selectedOrigin.value}&destino=${selectedDest.value}&data=${date}`;
    
    // Simulate playing the animation for at least 1.8 seconds to make the UI transition smooth and amazing
    const fetchPromise = fetch(url).then(res => res.json());
    const delayPromise = new Promise(resolve => setTimeout(resolve, 1800));

    Promise.all([fetchPromise, delayPromise])
      .then(([data]) => {
        setResult(data);
        setLoadingSimulation(false);
      })
      .catch(err => {
        console.error("Erro na simulação do Spark:", err);
        setError("Não foi possível conectar ao servidor Spark para simulação.");
        setLoadingSimulation(false);
      });
  };

  // Determina nível de risco e cor do alerta
  const getRiskDetails = (rate) => {
    if (rate >= 25) {
      return {
        label: 'ALTO RISCO DE ATRASO',
        class: 'badge-risk-high',
        icon: <AlertTriangle size={18} />
      };
    } else if (rate >= 15) {
      return {
        label: 'RISCO MODERADO DE ATRASO',
        class: 'badge-risk-medium',
        icon: <Info size={18} />
      };
    } else {
      return {
        label: 'BAIXO RISCO DE ATRASO',
        class: 'badge-risk-low',
        icon: <CheckCircle size={18} />
      };
    }
  };

  const getCityName = (airport) => {
    if (!airport) return '';
    const parts = airport.label.split(' - ');
    return parts.length > 1 ? parts[1].split(',')[0] : '';
  };

  const getSparkCodeSnippet = () => {
    const orig = selectedOrigin ? selectedOrigin.value : 'AEROPORTO_ORIGEM';
    const dest = selectedDest ? selectedDest.value : 'AEROPORTO_DESTINO';
    return `# Query de Simulação Spark em Tempo Real
# df_filtrado: Filtra voos da rota direta Origem ➔ Destino
df_filtrado = base_projeto_final.filter(
    (F.col("Origem") == "${orig}") & 
    (F.col("Destino") == "${dest}")
)

# stats: Agrega métricas estatísticas aplicando transformações
stats = df_filtrado.agg(
    # total: Contagem absoluta de voos históricos na rota
    F.count("*").alias("total"),
    
    # atrasados_partida: Soma condicional de voos com atraso de decolagem >= 15 min (métrica IATA)
    F.sum(
        F.when(F.col("AtrasoPartida") >= 15, 1).otherwise(0)
    ).alias("atrasados_partida"),
    
    # atrasados_chegada: Soma condicional de voos com atraso de pouso >= 15 min
    F.sum(
        F.when(F.col("AtrasoChegada") >= 15, 1).otherwise(0)
    ).alias("atrasados_chegada"),
    
    # media_atraso_partida: Média dos minutos de atraso de partida (apenas voos que sofreram atraso positivo)
    F.mean(
        F.when(F.col("AtrasoPartida") > 0, F.col("AtrasoPartida"))
    ).alias("media_atraso_partida"),
    
    # cancelados: Soma acumulada da flag booleana 'Cancelado' convertida para inteiro (0 ou 1)
    F.sum(
        F.col("Cancelado").cast("integer")
    ).alias("cancelados")
).collect()[0]

# Resultados de saída calculados e convertidos em taxas percentuais:
total_voos = stats["total"]
taxa_atraso_partida = (stats["atrasados_partida"] / total_voos) * 100
taxa_atraso_chegada = (stats["atrasados_chegada"] / total_voos) * 100
media_atraso_minutos = stats["media_atraso_partida"]
taxa_cancelamento = (stats["cancelados"] / total_voos) * 100`;
  };

  return (
    <div className="simulator-layout">
      
      {/* CARD DO SIMULADOR (ESQUERDA) */}
      <div className="simulator-card">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
            Simulador de Atraso de Voo
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Descubra as probabilidades estatísticas e o comportamento de pontualidade para a rota selecionada usando o PySpark.
          </p>
        </div>

        <form onSubmit={handleSimulate}>
          <div className="form-grid">
            
            {/* Campo: Origem */}
            <div className="form-group">
              <label className="form-label">Aeroporto de Origem</label>
              <div className="select-wrapper">
                <PlaneTakeoff className="input-icon" size={18} />
                <input
                  type="text"
                  placeholder={loadingAirports ? "Carregando..." : "Busque por código ou cidade..."}
                  className="autocomplete-input"
                  value={originInput}
                  onChange={(e) => {
                    setOriginInput(e.target.value);
                    setSelectedOrigin(null);
                    setShowOriginSuggestions(true);
                  }}
                  onFocus={() => setShowOriginSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowOriginSuggestions(false), 200)}
                  disabled={loadingAirports}
                  required
                />
                {showOriginSuggestions && originInput && (
                  <ul className="suggestions-list">
                    {filteredOrigins.map((a) => (
                      <li
                        key={a.value}
                        className="suggestion-item"
                        onMouseDown={() => {
                          setSelectedOrigin(a);
                          setOriginInput(a.label);
                          setShowOriginSuggestions(false);
                        }}
                      >
                        {a.label}
                      </li>
                    ))}
                    {filteredOrigins.length === 0 && (
                      <li className="suggestion-item" style={{ color: 'var(--text-muted)', cursor: 'default' }}>
                        Nenhum aeroporto encontrado
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </div>

            {/* Campo: Destino */}
            <div className="form-group">
              <label className="form-label">Aeroporto de Destino</label>
              <div className="select-wrapper">
                <PlaneLanding className="input-icon" size={18} />
                <input
                  type="text"
                  placeholder={loadingAirports ? "Carregando..." : "Busque por código ou cidade..."}
                  className="autocomplete-input"
                  value={destInput}
                  onChange={(e) => {
                    setDestInput(e.target.value);
                    setSelectedDest(null);
                    setShowDestSuggestions(true);
                  }}
                  onFocus={() => setShowDestSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowDestSuggestions(false), 200)}
                  disabled={loadingAirports}
                  required
                />
                {showDestSuggestions && destInput && (
                  <ul className="suggestions-list">
                    {filteredDests.map((a) => (
                      <li
                        key={a.value}
                        className="suggestion-item"
                        onMouseDown={() => {
                          setSelectedDest(a);
                          setDestInput(a.label);
                          setShowDestSuggestions(false);
                        }}
                      >
                        {a.label}
                      </li>
                    ))}
                    {filteredDests.length === 0 && (
                      <li className="suggestion-item" style={{ color: 'var(--text-muted)', cursor: 'default' }}>
                        Nenhum aeroporto encontrado
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </div>

          </div>

          {/* Campo: Data */}
          <div className="form-group" style={{ marginBottom: '2.5rem' }}>
            <label className="form-label">Data de Embarque (Sazonalidade)</label>
            <div className="select-wrapper">
              <Calendar className="input-icon" size={18} />
              <input
                type="date"
                className="date-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="sim-btn"
            disabled={loadingSimulation || !selectedOrigin || !selectedDest}
          >
            {loadingSimulation ? (
              <>
                <RefreshCw size={18} className="spinner" style={{ animation: 'spin 1s linear infinite', margin: 0 }} />
                Consultando Engine Spark...
              </>
            ) : (
              'Simular Probabilidade de Atraso'
            )}
          </button>
        </form>

        {/* MENSAGEM DE ERRO */}
        {error && (
          <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#FDF2F2', border: '1px solid #F8D7DA', borderRadius: '8px', color: '#721C24', textAlign: 'center' }}>
            {error}
          </div>
        )}

        {/* ESTADO ANIMADO DE LOADING */}
        {loadingSimulation && (
          <div className="simulation-loading-panel">
            <div className="flight-animation-container">
              <div className="airport-badge origin-badge">
                <span className="airport-code">{selectedOrigin ? selectedOrigin.value : '???'}</span>
                <span className="airport-city">{getCityName(selectedOrigin)}</span>
              </div>
              
              <div className="flight-path">
                <div className="dotted-line"></div>
                <div className="plane-wrapper">
                  <Plane size={24} className="flying-plane" />
                </div>
              </div>
              
              <div className="airport-badge dest-badge">
                <span className="airport-code">{selectedDest ? selectedDest.value : '???'}</span>
                <span className="airport-city">{getCityName(selectedDest)}</span>
              </div>
            </div>
            <div className="loading-message">
              <RefreshCw size={14} className="spinner" style={{ animation: 'spin 1s linear infinite' }} />
              <span>Executando consulta distribuída no PySpark...</span>
            </div>
          </div>
        )}

        {/* PAINEL DE RESULTADOS */}
        {result && !loadingSimulation && (
          <div className="results-panel">
            {result.sucesso ? (
              <>
                <div className="results-header">
                  <div className={`results-badge ${getRiskDetails(result.taxa_atraso_partida).class}`}>
                    {getRiskDetails(result.taxa_atraso_partida).icon}
                    <span style={{ marginLeft: '0.5rem' }}>{getRiskDetails(result.taxa_atraso_partida).label}</span>
                  </div>
                  <h3 className="results-title" style={{ marginTop: '1.25rem' }}>
                    {result.origem} ➔ {result.destino}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Análise computada sobre a série histórica de {result.total_voos.toLocaleString()} voos diretos realizados nesta rota.
                  </p>
                </div>

                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-val">{result.taxa_atraso_partida}%</div>
                    <div className="stat-label">Atraso na Partida (≥15m)</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-val">{result.media_atraso_partida_minutos}m</div>
                    <div className="stat-label">Atraso Médio Acumulado</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-val">{result.taxa_cancelamento}%</div>
                    <div className="stat-label">Chance de Cancelamento</div>
                  </div>
                </div>

                <div className="spark-badge">
                  <RefreshCw size={12} />
                  <span>Spark Engine Response: {result.tempo_resposta_spark} segundos</span>
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem', color: 'var(--text-muted)' }}>
                <Info size={24} style={{ color: 'var(--color-terracotta)', marginBottom: '0.5rem' }} />
                <p>{result.mensagem}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* CARD DO CÓDIGO PYSPARK (DIREITA) */}
      <div className="simulator-code-card">
        <h3>
          <Code size={20} style={{ color: '#D96B43' }} /> Código PySpark Executado
        </h3>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#1E1A17', padding: '1.25rem', borderRadius: '8px', border: '1px solid #4A3E37', overflow: 'hidden' }}>
          <pre className="code-block" style={{ margin: 0, overflowY: 'auto', fontSize: '0.82rem' }}>
            <code>{getSparkCodeSnippet()}</code>
          </pre>
        </div>
      </div>

    </div>
  );
}
