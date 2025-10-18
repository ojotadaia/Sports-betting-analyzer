import { useState } from 'react'
import './App.css'
import BettingAnalyzer from './components/BettingAnalyzer'
import CasinoAnalysis from './components/CasinoAnalysis'
import MarketData from './components/MarketData'

function App() {
  const [activeTab, setActiveTab] = useState('analyzer')

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>⚽ Analisador de Apostas Esportivas</h1>
          <p>Análise profissional de apostas de futebol com dados reais do mercado</p>
        </div>
      </header>

      <nav className="app-nav">
        <button 
          className={`nav-btn ${activeTab === 'analyzer' ? 'active' : ''}`}
          onClick={() => setActiveTab('analyzer')}
        >
          📊 Analisador de Apostas
        </button>
        <button 
          className={`nav-btn ${activeTab === 'market' ? 'active' : ''}`}
          onClick={() => setActiveTab('market')}
        >
          📈 Dados do Mercado
        </button>
        <button 
          className={`nav-btn ${activeTab === 'casinos' ? 'active' : ''}`}
          onClick={() => setActiveTab('casinos')}
        >
          🎰 Análise de Cassinos
        </button>
      </nav>

      <main className="app-main">
        {activeTab === 'analyzer' && <BettingAnalyzer />}
        {activeTab === 'market' && <MarketData />}
        {activeTab === 'casinos' && <CasinoAnalysis />}
      </main>

      <footer className="app-footer">
        <p>© 2025 Analisador de Apostas Esportivas | Dados reais do mercado de apostas</p>
      </footer>
    </div>
  )
}

export default App

