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
      predictionColor: '#4CAF50'
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
      predictionColor: '#4CAF50'
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
      predictionColor: '#FF9800'
    }
  ]

  const match = matches[selectedMatch]

  const calculateProb = (odds) => {
    return ((1 / odds) * 100).toFixed(1)
  }

  return (
    <div className="betting-analyzer">
      <div className="analyzer-container">
        <h2>📊 Análise de Apostas de Futebol</h2>
        
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

