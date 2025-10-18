import { useState, useEffect } from 'react'
import './App.css'
import BettingAnalyzer from './components/BettingAnalyzer'
import JotaBetAnalyzerLogo from './assets/jota_bet_analyzer_logo.png'

function App() {
  const [activeTab, setActiveTab] = useState('analyzer')

  // Forçar a aba 'analyzer' a ser a única ativa, já que as outras foram removidas
  useEffect(() => {
    setActiveTab('analyzer');
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div class="header-logo-container">
            <img src={JotaBetAnalyzerLogo} alt="Jota Bet Analyzer Logo" class="app-logo" />
            <h1>Jota Bet Analyzer</h1>
          </div>
          <p>Sua plataforma inteligente para análises de futebol e apostas esportivas</p>
        </div>
      </header>

      <nav className="app-nav">
        <button 
          className={`nav-btn ${activeTab === 'analyzer' ? 'active' : ''}`}
          onClick={() => setActiveTab('analyzer')}
        >
          📊 Analisador de Apostas
        </button>
      </nav>

      <main className="app-main">
        {activeTab === 'analyzer' && <BettingAnalyzer />}
      </main>

      <footer className="app-footer">
        <p>© 2025 Jota Bet Analyzer | Análises inteligentes para suas apostas</p>
      </footer>
    </div>
  )
}

export default App

