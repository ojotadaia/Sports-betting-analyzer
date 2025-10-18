import { useState } from 'react'
import './BettingAnalyzer.css'

const BettingAnalyzer = () => {
  const [selectedMatch, setSelectedMatch] = useState(0)

  // Dados simulados de partidas com odds reais do mercado
  const matches = [
    {
      id: 1,
      home: 'Flamengo',
      away: 'Palmeiras',
      league: 'Campeonato Brasileiro',
      date: '2025-10-20',
      odds: {
        casa1: 2.45,
        empate: 3.20,
        casa2: 2.80
      },
      homeStats: {
        wins: 18,
        draws: 5,
        losses: 2,
        goalsFor: 52,
        goalsAgainst: 18,
        avgGoals: 2.6
      },
      awayStats: {
        wins: 17,
        draws: 4,
        losses: 4,
        goalsFor: 48,
        goalsAgainst: 22,
        avgGoals: 2.4
      },
        prediction: 'Vitória do Flamengo (65%)',
        predictionColor: '#4CAF50',
        detailedBets: [
          { type: 'Total de Gols (Mais de 2.5)', odds: 1.85, probability: '54%', recommendation: 'Alta' },
          { type: 'Total de Gols (Menos de 2.5)', odds: 1.95, probability: '51%', recommendation: 'Média' },
          { type: 'Ambos Marcam', odds: 1.70, probability: '59%', recommendation: 'Média' },
          { type: 'Empate Anula Aposta (Flamengo)', odds: 1.60, probability: '62%', recommendation: 'Alta' },
          { type: 'Handicap Asiático (-1.5 Flamengo)', odds: 2.50, probability: '40%', recommendation: 'Baixa' },
          { type: 'Escanteios (Mais de 9.5)', odds: 1.90, probability: '53%', recommendation: 'Média' },
          { type: 'Escanteios (Menos de 9.5)', odds: 1.80, probability: '56%', recommendation: 'Média' },
          { type: 'Cartões Amarelos (Mais de 4.5)', odds: 2.10, probability: '48%', recommendation: 'Baixa' },
          { type: 'Cartões Amarelos (Menos de 4.5)', odds: 1.75, probability: '57%', recommendation: 'Média' },
          { type: 'Primeiro Gol (Flamengo)', odds: 1.95, probability: '51%', recommendation: 'Média' },
          { type: 'Resultado Exato (2-1 Flamengo)', odds: 8.00, probability: '12%', recommendation: 'Arriscada' },
          { type: 'Marcador a Qualquer Momento (Gabigol)', odds: 2.20, probability: '45%', recommendation: 'Média' }
        ]
    },
    {
      id: 2,
      home: 'Real Madrid',
      away: 'Barcelona',
      league: 'La Liga',
      date: '2025-10-21',
      odds: {
        casa1: 2.10,
        empate: 3.50,
        casa2: 3.20
      },
      homeStats: {
        wins: 22,
        draws: 3,
        losses: 1,
        goalsFor: 68,
        goalsAgainst: 15,
        avgGoals: 2.9
      },
      awayStats: {
        wins: 19,
        draws: 5,
        losses: 2,
        goalsFor: 61,
        goalsAgainst: 18,
        avgGoals: 2.6
      },
        prediction: 'Vitória do Real Madrid (62%)',
        predictionColor: '#4CAF50',
        detailedBets: [
          { type: 'Total de Gols (Mais de 3.5)', odds: 2.10, probability: '48%', recommendation: 'Média' },
          { type: 'Total de Gols (Menos de 3.5)', odds: 1.70, probability: '59%', recommendation: 'Média' },
          { type: 'Ambos Marcam', odds: 1.60, probability: '62%', recommendation: 'Alta' },
          { type: 'Empate Anula Aposta (Real Madrid)', odds: 1.40, probability: '71%', recommendation: 'Alta' },
          { type: 'Handicap Asiático (-1.0 Real Madrid)', odds: 2.00, probability: '50%', recommendation: 'Média' },
          { type: 'Escanteios (Mais de 10.5)', odds: 2.00, probability: '50%', recommendation: 'Média' },
          { type: 'Escanteios (Menos de 10.5)', odds: 1.90, probability: '53%', recommendation: 'Média' },
          { type: 'Cartões Amarelos (Mais de 5.5)', odds: 2.20, probability: '45%', recommendation: 'Baixa' },
          { type: 'Cartões Amarelos (Menos de 5.5)', odds: 1.85, probability: '54%', recommendation: 'Média' },
          { type: 'Primeiro Gol (Real Madrid)', odds: 1.75, probability: '57%', recommendation: 'Alta' },
          { type: 'Resultado Exato (3-1 Real Madrid)', odds: 9.00, probability: '11%', recommendation: 'Arriscada' },
          { type: 'Marcador a Qualquer Momento (Vinicius Jr.)', odds: 1.90, probability: '53%', recommendation: 'Média' }
        ]
    },
    {
      id: 3,
      home: 'Liverpool',
      away: 'Manchester City',
      league: 'Premier League',
      date: '2025-10-22',
      odds: {
        casa1: 2.75,
        empate: 3.10,
        casa2: 2.45
      },
      homeStats: {
        wins: 16,
        draws: 4,
        losses: 6,
        goalsFor: 54,
        goalsAgainst: 28,
        avgGoals: 2.3
      },
      awayStats: {
        wins: 18,
        draws: 3,
        losses: 5,
        goalsFor: 59,
        goalsAgainst: 25,
        avgGoals: 2.5
      },
        prediction: 'Empate (52%)',
        predictionColor: '#FF9800',
        detailedBets: [
          { type: 'Total de Gols (Menos de 2.5)', odds: 2.05, probability: '49%', recommendation: 'Média' },
          { type: 'Total de Gols (Mais de 2.5)', odds: 1.75, probability: '57%', recommendation: 'Média' },
          { type: 'Ambos Marcam', odds: 1.80, probability: '55%', recommendation: 'Média' },
          { type: 'Empate Anula Aposta (Manchester City)', odds: 1.50, probability: '67%', recommendation: 'Alta' },
          { type: 'Handicap Asiático (+0.5 Liverpool)', odds: 1.80, probability: '56%', recommendation: 'Média' },
          { type: 'Escanteios (Mais de 8.5)', odds: 1.75, probability: '57%', recommendation: 'Alta' },
          { type: 'Escanteios (Menos de 8.5)', odds: 2.00, probability: '50%', recommendation: 'Média' },
          { type: 'Cartões Amarelos (Mais de 3.5)', odds: 1.90, probability: '53%', recommendation: 'Média' },
          { type: 'Cartões Amarelos (Menos de 3.5)', odds: 2.00, probability: '50%', recommendation: 'Média' },
          { type: 'Primeiro Gol (Liverpool)', odds: 2.10, probability: '48%', recommendation: 'Baixa' },
          { type: 'Resultado Exato (1-1 Empate)', odds: 6.50, probability: '15%', recommendation: 'Arriscada' },
          { type: 'Marcador a Qualquer Momento (Haaland)', odds: 1.80, probability: '56%', recommendation: 'Alta' }
        ]
    }
  ]

  const match = matches[selectedMatch]

  const calculateProb = (odds) => {
    return ((1 / odds) * 100).toFixed(1)
  }

  return (
    <div className="betting-analyzer">
      <div className="analyzer-container">
        <h2>⚽ Jota Sports Analyzer - Análise de Futebol</h2>
        
        <div className="match-selector">
          <label>Selecione uma partida:</label>
          <select 
            value={selectedMatch} 
            onChange={(e) => setSelectedMatch(parseInt(e.target.value))}
            className="match-select"
          >
            {matches.map((m, idx) => (
              <option key={m.id} value={idx}>
                {m.home} vs {m.away} - {m.league}
              </option>
            ))}
          </select>
        </div>

        <div className="match-header">
          <div className="match-info">
            <h3>{match.home} <span className="vs">vs</span> {match.away}</h3>
            <p className="league">{match.league}</p>
            <p className="date">📅 {new Date(match.date).toLocaleDateString('pt-BR')}</p>
          </div>
        </div>

        <div className="analysis-grid">
          <div className="odds-section">
            <h4>Odds do Mercado</h4>
            <div className="odds-cards">
              <div className="odds-card">
                <div className="odds-team">{match.home}</div>
                <div className="odds-value">{match.odds.casa1}</div>
                <div className="odds-prob">{calculateProb(match.odds.casa1)}% de probabilidade</div>
              </div>
              <div className="odds-card">
                <div className="odds-team">Empate</div>
                <div className="odds-value">{match.odds.empate}</div>
                <div className="odds-prob">{calculateProb(match.odds.empate)}% de probabilidade</div>
              </div>
              <div className="odds-card">
                <div className="odds-team">{match.away}</div>
                <div className="odds-value">{match.odds.casa2}</div>
                <div className="odds-prob">{calculateProb(match.odds.casa2)}% de probabilidade</div>
              </div>
            </div>
          </div>

          <div className="prediction-section">
            <h4>Previsão do Sistema</h4>
            <div className="prediction-box" style={{ borderColor: match.predictionColor }}>
              <div className="prediction-text" style={{ color: match.predictionColor }}>
                {match.prediction}
              </div>
              <p className="prediction-note">Baseado em análise estatística e histórico de desempenho</p>
            </div>
          </div>

          <div className="detailed-bets-section">
            <h4>Opções de Apostas Detalhadas</h4>
            <div className="detailed-bets-grid">
              {match.detailedBets.map((bet, index) => (
                <div key={index} className="detailed-bet-card">
                  <div className="bet-type">{bet.type}</div>
                  <div className="bet-odds">Odds: {bet.odds}</div>
                  <div className="bet-prob">Probabilidade: {bet.probability}</div>
                  <div className="bet-recommendation" style={{ color: bet.recommendation === 'Alta' ? '#4CAF50' : bet.recommendation === 'Média' ? '#FF9800' : '#F44336' }}>
                    Recomendação: {bet.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="stats-section">
            <h4>Estatísticas - {match.home}</h4>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">Vitórias</span>
                <span className="stat-value">{match.homeStats.wins}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Empates</span>
                <span className="stat-value">{match.homeStats.draws}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Derrotas</span>
                <span className="stat-value">{match.homeStats.losses}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Gols Pró</span>
                <span className="stat-value">{match.homeStats.goalsFor}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Gols Contra</span>
                <span className="stat-value">{match.homeStats.goalsAgainst}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Média de Gols</span>
                <span className="stat-value">{match.homeStats.avgGoals}</span>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <h4>Estatísticas - {match.away}</h4>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">Vitórias</span>
                <span className="stat-value">{match.awayStats.wins}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Empates</span>
                <span className="stat-value">{match.awayStats.draws}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Derrotas</span>
                <span className="stat-value">{match.awayStats.losses}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Gols Pró</span>
                <span className="stat-value">{match.awayStats.goalsFor}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Gols Contra</span>
                <span className="stat-value">{match.awayStats.goalsAgainst}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Média de Gols</span>
                <span className="stat-value">{match.awayStats.avgGoals}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="insights-section">
          <h4>💡 Insights de Análise</h4>
          <ul className="insights-list">
            <li>Flamengo tem melhor desempenho em casa com taxa de vitória de 78%</li>
            <li>Palmeiras é mais consistente fora de casa, com 63% de aproveitamento</li>
            <li>Últimos 5 confrontos: 2 vitórias do Flamengo, 2 empates, 1 vitória do Palmeiras</li>
            <li>Média de gols esperada: 2.5 gols por partida (Over 2.5 com 58% de probabilidade)</li>
            <li>Ambos os times vêm em boa forma, com 4 vitórias nos últimos 5 jogos</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BettingAnalyzer

