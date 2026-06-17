import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function Variables({ variables }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVars = variables.filter(v =>
    v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="variables-section">
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
          Dicionário de Variáveis
        </h2>
      </div>

      <div className="search-container">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          className="search-input"
          placeholder="Busque por nome da variável, tipo estatístico ou descrição..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="variables-grid">
        {filteredVars.map((v) => (
          <div key={v.name} className="var-card">
            <h3 className="var-name">{v.name}</h3>
            <div className="var-tags">
              <span className="tag tag-stat">{v.stat_type}</span>
            </div>
            <p className="var-desc">{v.desc}</p>
          </div>
        ))}
        {filteredVars.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            Nenhuma variável encontrada correspondente aos termos de busca.
          </div>
        )}
      </div>
    </div>
  );
}
