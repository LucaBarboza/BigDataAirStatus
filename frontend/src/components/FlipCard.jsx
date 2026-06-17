import React, { useState } from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js-dist-min';
import { RotateCw, Code } from 'lucide-react';

const CreatePlot = typeof createPlotlyComponent === 'function' 
  ? createPlotlyComponent 
  : (createPlotlyComponent.default || createPlotlyComponent);

const Plot = CreatePlot(Plotly);

export default function FlipCard({ title, chartData, codeSnippet }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const customizePlotlyLayout = (layout) => {
    if (!layout) return {};
    const titleText = typeof layout.title === 'string' 
      ? layout.title 
      : (layout.title?.text || '');

    // Clone and remove hardcoded sizes exported from python plotly.io.to_json()
    const cleanLayout = { ...layout };
    delete cleanLayout.width;
    delete cleanLayout.height;

    return {
      ...cleanLayout,
      autosize: true,
      paper_bgcolor: 'rgba(0,0,0,0)', 
      plot_bgcolor: 'rgba(0,0,0,0)',
      font: {
        family: "'Plus Jakarta Sans', sans-serif",
        color: '#3C332D'
      },
      margin: { l: 60, r: 20, t: 70, b: 60 },
      xaxis: {
        ...(layout.xaxis || {}),
        showgrid: false,
        zeroline: false,
        linecolor: '#7A6F66',
        tickfont: { size: 10, color: '#7A6F66' },
        title: {
          ...((layout.xaxis && layout.xaxis.title) || {}),
          font: { size: 11, color: '#3C332D', family: "'Plus Jakarta Sans', sans-serif" }
        }
      },
      yaxis: {
        ...(layout.yaxis || {}),
        showgrid: false,
        zeroline: false,
        linecolor: '#7A6F66',
        tickfont: { size: 10, color: '#7A6F66' },
        title: {
          ...((layout.yaxis && layout.yaxis.title) || {}),
          font: { size: 11, color: '#3C332D', family: "'Plus Jakarta Sans', sans-serif" }
        }
      },
      title: {
        text: titleText,
        font: { size: 13, color: '#D96B43', family: "'Plus Jakarta Sans', sans-serif" },
        x: 0.05,
        y: 0.95
      }
    };
  };

  return (
    <div className={`flip-card-container ${isFlipped ? 'flipped' : ''}`}>
      <div className="flip-card-inner">
        
        {/* LADO DA FRENTE (GRÁFICO) */}
        <div className="card-front">
          <div className="card-header">
            <h3 className="card-title">{title}</h3>
            <button className="flip-btn" onClick={toggleFlip}>
              <Code size={16} /> Ver Código
            </button>
          </div>
          <div className="card-body">
            {chartData ? (
              <Plot
                data={chartData.data || []}
                layout={customizePlotlyLayout(chartData.layout)}
                useResizeHandler={true}
                style={{ width: "100%", height: "100%" }}
                config={{ responsive: true, displayModeBar: false }}
              />
            ) : (
              <div style={{ textAlign: 'center', color: '#7A6F66' }}>Carregando gráfico...</div>
            )}
          </div>
        </div>

        {/* LADO DE TRÁS (CÓDIGO PYSPARK) */}
        <div className="card-back">
          <div className="card-header">
            <h3 className="card-title">Código PySpark</h3>
            <button className="flip-btn" onClick={toggleFlip}>
              <RotateCw size={16} /> Ver Gráfico
            </button>
          </div>
          <div className="card-body">
            <pre className="code-block">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
}
