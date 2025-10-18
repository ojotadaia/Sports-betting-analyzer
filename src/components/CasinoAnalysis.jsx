import { useState } from 'react'
import './CasinoAnalysis.css'

const CasinoAnalysis = () => {
  const [selectedCasino, setSelectedCasino] = useState(0)

  const casinos = [
    {
      id: 1,
      name: 'Casino di Campione',
      location: 'Itália',
      country: 'Italia',
      founded: 1917,
      area: 179832,
      tables: 56,
      slots: 500,
      rooms: 0,
      restaurants: 5,
      rating: 4.5,
      type: 'Físico',
      highlights: [
        'Maior cassino do mundo em área',
        'Localizado às margens do Lago Lugano',
        'Um dos cassinos mais antigos da Europa',
        'Distribuído em 9 andares',
        'Ambiente exclusivo e sofisticado'
      ],
      visitorsPerYear: '500.000+',
      currency: 'EUR',
      mainGames: ['Roleta', 'Blackjack', 'Baccarat', 'Poker']
    },
    {
      id: 2,
      name: 'The Venetian Macau',
      location: 'Macau, China',
      country: 'China',
      founded: 2007,
      area: 166420,
      tables: 800,
      slots: 3400,
      rooms: 3000,
      restaurants: 40,
      rating: 4.7,
      type: 'Resort',
      highlights: [
        'Segundo maior cassino do planeta',
        'Maior hotel de estrutura única da Ásia',
        'Possui canal com gôndolas',
        '350 lojas de luxo',
        'Restaurantes com estrelas Michelin'
      ],
      visitorsPerYear: '2.000.000+',
      currency: 'MOP',
      mainGames: ['Baccarat', 'Roleta', 'Blackjack', 'Máquinas Caça-níqueis']
    },
    {
      id: 3,
      name: 'Winstar World Casino',
      location: 'Oklahoma, EUA',
      country: 'EUA',
      founded: 2003,
      area: 158191,
      tables: 100,
      slots: 8600,
      rooms: 500,
      restaurants: 20,
      rating: 4.3,
      type: 'Resort',
      highlights: [
        'Maior cassino dos Estados Unidos',
        '9 praças de jogos com temas globais',
        'Estende-se por mais de 1 quilômetro',
        'Mais de 8.600 máquinas caça-níqueis',
        'Experiência temática imersiva'
      ],
      visitorsPerYear: '1.500.000+',
      currency: 'USD',
      mainGames: ['Caça-níqueis', 'Roleta', 'Blackjack', 'Poker']
    }
  ]

  const casino = casinos[selectedCasino]

  const comparisonData = [
    { metric: 'Área (m²)', values: [179832, 166420, 158191] },
    { metric: 'Mesas de Jogo', values: [56, 800, 100] },
    { metric: 'Caça-níqueis', values: [500, 3400, 8600] },
    { metric: 'Quartos', values: [0, 3000, 500] },
    { metric: 'Restaurantes', values: [5, 40, 20] }
  ]

  const getMaxValue = (values) => Math.max(...values)

  return (
    <div className="casino-analysis">
      <div className="analysis-container">
        <h2>🎰 Análise Comparativa de Cassinos</h2>

        <div className="casino-selector">
          <label>Selecione um cassino:</label>
          <div className="selector-buttons">
            {casinos.map((c, idx) => (
              <button
                key={c.id}
                className={`casino-btn ${selectedCasino === idx ? 'active' : ''}`}
                onClick={() => setSelectedCasino(idx)}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        <div className="casino-detail">
          <div className="casino-header-detail">
            <div className="casino-title-section">
              <h3>{casino.name}</h3>
              <p className="casino-location-detail">📍 {casino.location}</p>
              <div className="casino-rating">
                <span className="stars">{'⭐'.repeat(Math.floor(casino.rating))}</span>
                <span className="rating-value">{casino.rating}/5</span>
              </div>
            </div>
            <div className="casino-badge">
              <span className="type-badge">{casino.type}</span>
              <span className="year-badge">Desde {casino.founded}</span>
            </div>
          </div>

          <div className="casino-stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📏</div>
              <div className="stat-info">
                <div className="stat-label">Área Total</div>
                <div className="stat-value">{casino.area.toLocaleString()} m²</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎰</div>
              <div className="stat-info">
                <div className="stat-label">Caça-níqueis</div>
                <div className="stat-value">{casino.slots.toLocaleString()}</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎲</div>
              <div className="stat-info">
                <div className="stat-label">Mesas de Jogo</div>
                <div className="stat-value">{casino.tables}</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏨</div>
              <div className="stat-info">
                <div className="stat-label">Quartos</div>
                <div className="stat-value">{casino.rooms > 0 ? casino.rooms : 'N/A'}</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🍽️</div>
              <div className="stat-info">
                <div className="stat-label">Restaurantes</div>
                <div className="stat-value">{casino.restaurants}</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-info">
                <div className="stat-label">Visitantes/Ano</div>
                <div className="stat-value">{casino.visitorsPerYear}</div>
              </div>
            </div>
          </div>

          <div className="highlights-section">
            <h4>✨ Destaques</h4>
            <ul className="highlights-list">
              {casino.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="games-section">
            <h4>🎮 Principais Jogos</h4>
            <div className="games-list">
              {casino.mainGames.map((game, idx) => (
                <span key={idx} className="game-tag">{game}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="comparison-section">
          <h3>📊 Comparação entre Cassinos</h3>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Métrica</th>
                  {casinos.map(c => (
                    <th key={c.id}>{c.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx}>
                    <td className="metric-name">{row.metric}</td>
                    {row.values.map((value, vidx) => {
                      const maxVal = getMaxValue(row.values)
                      const percentage = (value / maxVal) * 100
                      return (
                        <td key={vidx} className="metric-value">
                          <div className="bar-container">
                            <div 
                              className="bar-fill" 
                              style={{ width: `${percentage}%` }}
                            ></div>
                            <span className="bar-value">
                              {row.metric.includes('Área') 
                                ? `${value.toLocaleString()}` 
                                : value.toLocaleString()}
                            </span>
                          </div>
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="market-insights">
          <h3>💡 Insights do Mercado de Cassinos</h3>
          <div className="insights-grid">
            <div className="insight-box">
              <h4>Tendência Global</h4>
              <p>Os maiores cassinos do mundo estão concentrados na Ásia (Macau) e América do Norte (EUA), refletindo os maiores mercados de jogos de azar globalmente.</p>
            </div>
            <div className="insight-box">
              <h4>Modelo de Negócio</h4>
              <p>Cassinos modernos funcionam como resorts integrados, combinando hospedagem, restaurantes, entretenimento e jogos para maximizar a permanência e gastos dos clientes.</p>
            </div>
            <div className="insight-box">
              <h4>Infraestrutura Digital</h4>
              <p>Além dos cassinos físicos, operadores como Playtech, Microgaming e IGT mantêm centros digitais massivos (27.000+ m²) para cassinos online em jurisdições como Malta e Gibraltar.</p>
            </div>
            <div className="insight-box">
              <h4>Brasil em Expansão</h4>
              <p>O Brasil prevê a instalação de oito novas unidades do Hard Rock nos próximos anos, sinalizando grande potencial de crescimento no mercado de cassinos físicos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CasinoAnalysis

