import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Plane, Database, Server, RefreshCw, AlertCircle } from 'lucide-react';
import FlipCard from './components/FlipCard';
import Simulator from './components/Simulator';
import Variables from './components/Variables';
import './styles/theme.css';

const SERVER_URL = 'https://bigdataairstatus.onrender.com';

export default function App() {
  const [activeTab, setActiveTab] = useState('variables');
  const [filterCategory, setFilterCategory] = useState('all');
  const [serverStatus, setServerStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Dados do backend
  const [charts, setCharts] = useState({});
  const [codes, setCodes] = useState({});
  const [variables, setVariables] = useState([]);

  const fetchBackendData = () => {
    setLoading(true);
    setError(null);

    // 1. Verifica o status do servidor
    fetch(`${SERVER_URL}/api/status`)
      .then(res => {
        if (!res.ok) throw new Error("Servidor respondeu com código de erro.");
        return res.json();
      })
      .then(status => {
        setServerStatus(status);
        
        // 2. Busca variáveis
        return fetch(`${SERVER_URL}/api/variables`);
      })
      .then(res => res.json())
      .then(vars => {
        setVariables(vars);

        // 3. Busca gráficos e códigos
        return fetch(`${SERVER_URL}/api/dashboard`);
      })
      .then(res => res.json())
      .then(dashData => {
        setCharts(dashData.charts);
        setCodes(dashData.codes);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao conectar com o backend Flask:", err);
        setError("Não foi possível conectar ao backend Python (Flask) com Spark. Certifique-se de que o servidor Flask está rodando na porta 5000.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBackendData();
  }, []);

  return (
    <div className="app-container">
      {/* BARRA DE NAVEGAÇÃO */}
      <nav className="navbar">
        <div className="nav-brand">
          <Plane size={24} style={{ color: 'var(--color-terracotta)' }} />
          <span>AirStatus <span>BigData</span></span>
        </div>
        <div className="nav-links">
          <button 
            className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard size={18} /> Dashboard
          </button>
          <button 
            className={`nav-btn ${activeTab === 'simulator' ? 'active' : ''}`}
            onClick={() => setActiveTab('simulator')}
          >
            <Plane size={18} /> Simulador
          </button>
          <button 
            className={`nav-btn ${activeTab === 'variables' ? 'active' : ''}`}
            onClick={() => setActiveTab('variables')}
          >
            <Database size={18} /> Variáveis
          </button>
        </div>
      </nav>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="main-content">
        


        {/* LOADING SCREEN */}
        {loading && (
          <div className="loading-screen">
            <div className="spinner"></div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Carregando dados estatísticos...</h3>
            <p style={{ color: 'var(--text-muted)' }}>Inicializando a Spark Session local e compilando as análises descritivas do notebook.</p>
          </div>
        )}

        {/* ERROR SCREEN */}
        {error && (
          <div className="error-screen">
            <AlertCircle size={48} style={{ color: 'red', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Servidor Backend Indisponível</h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '2rem' }}>
              {error}
            </p>
            <div style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-sand-dark)', textAlign: 'left', maxWidth: '600px', width: '100%', marginBottom: '2rem' }}>
              <p style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Como resolver:</p>
              <ol style={{ paddingLeft: '1.25rem', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Abra uma janela de terminal na pasta do projeto.</li>
                <li>Navegue até a pasta do backend: <code>cd backend</code></li>
                <li>Execute o script de inicialização: <code>run_backend.bat</code> (ou <code>python app.py</code>)</li>
                <li>Aguarde a Spark Session carregar as análises e atualize esta página.</li>
              </ol>
            </div>
            <button className="sim-btn" onClick={fetchBackendData} style={{ maxWidth: '200px' }}>
              <RefreshCw size={18} /> Tentar Novamente
            </button>
          </div>
        )}

        {/* PÁGINAS / ABAS */}
        {!loading && !error && (
          <>
            {/* ABA 1: DASHBOARD */}
            {activeTab === 'dashboard' && (
              <div>
                <div className="dashboard-header">
                  <h1 className="dashboard-title">Painel de Análises de Performance</h1>
                </div>

                {/* FILTRO DE CATEGORIAS */}
                <div className="filter-bar">
                  {[
                    { id: 'all', label: 'Todos os Gráficos' },
                    { id: 'sazonalidade', label: '📅 Sazonalidade' },
                    { id: 'companhias', label: '✈️ Companhias Aéreas' },
                    { id: 'aeroportos', label: '📍 Aeroportos & Solo' },
                    { id: 'interrupcoes', label: '🛑 Cancelamentos & Desvios' }
                  ].map(cat => (
                    <button
                      key={cat.id}
                      className={`filter-btn ${filterCategory === cat.id ? 'active' : ''}`}
                      onClick={() => setFilterCategory(cat.id)}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div className="grid-dashboard">
                  {(filterCategory === 'all' || filterCategory === 'sazonalidade') && (
                    <FlipCard 
                      title="Gráfico de linhas da taxa de atraso por mês"
                      chartData={charts.analise1_mensal}
                      codeSnippet={codes.analise1_mensal}
                    />
                  )}
                  {(filterCategory === 'all' || filterCategory === 'sazonalidade') && (
                    <FlipCard 
                      title="Gráfico de barras da taxa de atraso por dia da semana"
                      chartData={charts.analise1_semanal}
                      codeSnippet={codes.analise1_semanal}
                    />
                  )}
                  {(filterCategory === 'all' || filterCategory === 'companhias') && (
                    <FlipCard 
                      title="Gráfico de barras do ranking de taxa de atraso por companhia aérea"
                      chartData={charts.analise2}
                      codeSnippet={codes.analise2}
                    />
                  )}
                  {(filterCategory === 'all' || filterCategory === 'aeroportos') && (
                    <FlipCard 
                      title="Gráfico de barras da taxa de atraso dos quinze aeroportos mais críticos"
                      chartData={charts.analise3}
                      codeSnippet={codes.analise3}
                    />
                  )}
                  {(filterCategory === 'all' || filterCategory === 'interrupcoes') && (
                    <FlipCard 
                      title="Gráfico de linhas da quantidade absoluta de voos cancelados por ano"
                      chartData={charts.analise4_cancelados}
                      codeSnippet={codes.analise4_cancelados}
                    />
                  )}
                  {(filterCategory === 'all' || filterCategory === 'interrupcoes') && (
                    <FlipCard 
                      title="Gráfico de linhas da quantidade absoluta de voos desviados por ano"
                      chartData={charts.analise4_desviados}
                      codeSnippet={codes.analise4_desviados}
                    />
                  )}
                  {(filterCategory === 'all' || filterCategory === 'companhias') && (
                    <FlipCard 
                      title="Gráfico de barras da resiliência média em minutos recuperados por companhia aérea"
                      chartData={charts.analise5}
                      codeSnippet={codes.analise5}
                    />
                  )}
                  {(filterCategory === 'all' || filterCategory === 'companhias') && (
                    <FlipCard 
                      title="Gráfico de barras comparativo do atraso médio de decolagem e pouso por companhia aérea"
                      chartData={charts.analise6}
                      codeSnippet={codes.analise6}
                    />
                  )}
                  {(filterCategory === 'all' || filterCategory === 'sazonalidade') && (
                    <FlipCard 
                      title="Gráfico de linhas da taxa de atraso na partida por faixa horária"
                      chartData={charts.analise7}
                      codeSnippet={codes.analise7}
                    />
                  )}
 
                  {(filterCategory === 'all' || filterCategory === 'aeroportos') && (
                    <FlipCard 
                      title="Gráfico de barras do tempo médio de táxi de saída dos dez aeroportos com maior atraso"
                      chartData={charts.analise8_out}
                      codeSnippet={codes.analise8_out}
                    />
                  )}
                  {(filterCategory === 'all' || filterCategory === 'aeroportos') && (
                    <FlipCard 
                      title="Gráfico de barras do tempo médio de táxi de entrada dos dez aeroportos com maior atraso"
                      chartData={charts.analise8_in}
                      codeSnippet={codes.analise8_in}
                    />
                  )}
                  {(filterCategory === 'all' || filterCategory === 'aeroportos') && (
                    <FlipCard 
                      title="Gráfico de dispersão dos aeroportos geradores e receptores de atrasos"
                      chartData={charts.analise10}
                      codeSnippet={codes.analise10}
                    />
                  )}
                </div>
              </div>
            )}

            {/* ABA 2: SIMULADOR */}
            {activeTab === 'simulator' && (
              <Simulator serverUrl={SERVER_URL} />
            )}

            {/* ABA 3: DICIONÁRIO */}
            {activeTab === 'variables' && (
              <Variables variables={variables} />
            )}
          </>
        )}

      </main>
    </div>
  );
}
