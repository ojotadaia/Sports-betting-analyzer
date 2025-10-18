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
          <h1>⚽ Jota Sport Analyzer</h1>
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
        <p>© 2025 Jota Sport Analyzer | Análises inteligentes para suas apostas</p>
      </footer>
    </div>
  )
}

export default App

