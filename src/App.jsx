import { useState, useEffect } from 'react'
import './App.css'
import BettingAnalyzer from './components/BettingAnalyzer'

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
      </nav>

      <main className="app-main">
        {activeTab === 'analyzer' && <BettingAnalyzer />}
      </main>

      <footer className="app-footer">
        <p>© 2025 Analisador de Apostas Esportivas | Dados reais do mercado de apostas</p>
      </footer>
    </div>
  )
}

export default App

