import './MarketData.css'

const MarketData = () => {
  const marketData = {
    brazil: {
      monthlyVolume: 'R$ 20 bilhões',
      monthlyUsers: '24 milhões',
      totalUsers: '22 milhões',
      marketSize: 'R$ 120 bilhões/ano',
      footballPercentage: '85%',
      illegalMarket: 'R$ 40 bilhões/ano'
    },
    trends: [
      {
        title: 'Crescimento do Mercado',
        value: '+30%',
        description: 'Aumento previsto para o próximo ano',
        color: '#4CAF50'
      },
      {
        title: 'Número de Bets',
        value: '+153%',
        description: 'Crescimento desde 2022 (840 para 2.100+)',
        color: '#FF9800'
      },
      {
        title: 'Preferência por Futebol',
        value: '85%',
        description: 'Dos brasileiros preferem apostar em futebol',
        color: '#2196F3'
      },
      {
        title: 'Gasto Médio',
        value: 'até R$ 500',
        description: 'Valor mensal gasto por 3% dos apostadores',
        color: '#9C27B0'
      }
    ],
    casinos: [
      {
        name: 'Casino di Campione',
        location: 'Itália',
        area: '179.832 m²',
        founded: '1917',
        tables: '56',
        slots: '500+',
        description: 'Maior cassino do mundo, às margens do Lago Lugano'
      },
      {
        name: 'The Venetian Macau',
        location: 'Macau, China',
        area: '166.420 m²',
        founded: '2007',
        tables: '800',
        slots: '3.400',
        description: 'Maior cassino da Ásia com 3 mil quartos e restaurantes Michelin'
      },
      {
        name: 'Winstar World Casino',
        location: 'Oklahoma, EUA',
        area: '158.191 m²',
        founded: 'N/A',
        tables: '100+',
        slots: '8.600',
        description: 'Maior cassino dos EUA com 9 praças temáticas'
      }
    ]
  }

  return (
    <div className="market-data">
      <div className="market-container">
        <h2>📈 Dados Reais do Mercado de Apostas</h2>

        <section className="market-overview">
          <h3>Mercado Brasileiro de Apostas</h3>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="overview-label">Volume Mensal</div>
              <div className="overview-value">{marketData.brazil.monthlyVolume}</div>
            </div>
            <div className="overview-card">
              <div className="overview-label">Usuários Mensais</div>
              <div className="overview-value">{marketData.brazil.monthlyUsers}</div>
            </div>
            <div className="overview-card">
              <div className="overview-label">Tamanho do Mercado</div>
              <div className="overview-value">{marketData.brazil.marketSize}</div>
            </div>
            <div className="overview-card">
              <div className="overview-label">Mercado Ilegal</div>
              <div className="overview-value">{marketData.brazil.illegalMarket}</div>
            </div>
            <div className="overview-card">
              <div className="overview-label">Preferência Futebol</div>
              <div className="overview-value">{marketData.brazil.footballPercentage}</div>
            </div>
            <div className="overview-card">
              <div className="overview-label">Usuários Totais</div>
              <div className="overview-value">{marketData.brazil.totalUsers}</div>
            </div>
          </div>
        </section>

        <section className="trends-section">
          <h3>Tendências do Mercado</h3>
          <div className="trends-grid">
            {marketData.trends.map((trend, idx) => (
              <div key={idx} className="trend-card">
                <div className="trend-icon" style={{ backgroundColor: trend.color }}>
                  📊
                </div>
                <div className="trend-content">
                  <h4>{trend.title}</h4>
                  <div className="trend-value" style={{ color: trend.color }}>
                    {trend.value}
                  </div>
                  <p>{trend.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="insights-section">
          <h3>📌 Principais Insights</h3>
          <div className="insights-cards">
            <div className="insight-card">
              <h4>Crescimento Exponencial</h4>
              <p>O mercado de apostas online no Brasil cresceu 153% desde 2022, com mais de 2.100 casas de apostas operando no país. O volume mensal movimenta aproximadamente R$ 20 bilhões.</p>
            </div>
            <div className="insight-card">
              <h4>Futebol Domina</h4>
              <p>Mais de 85% dos brasileiros preferem apostar em futebol, consolidando o Brasil como um dos maiores mercados de apostas esportivas do mundo. O futebol é claramente o esporte preferido para apostas.</p>
            </div>
            <div className="insight-card">
              <h4>Mercado Ilegal Significativo</h4>
              <p>Estudos indicam que o mercado ilegal de apostas pode movimentar até R$ 40 bilhões por ano, potencialmente maior que o mercado regulamentado. Isso estimula preocupações com manipulação de resultados.</p>
            </div>
            <div className="insight-card">
              <h4>Impacto nos Clubes</h4>
              <p>O avanço das empresas de apostas ilegais pode impactar significativamente os patrocínios aos clubes de futebol a partir de 2026. Regulação é essencial para proteger a integridade do esporte.</p>
            </div>
          </div>
        </section>

        <section className="casinos-section">
          <h3>🎰 Maiores Cassinos do Mundo</h3>
          <div className="casinos-grid">
            {marketData.casinos.map((casino, idx) => (
              <div key={idx} className="casino-card">
                <div className="casino-header">
                  <h4>{casino.name}</h4>
                  <p className="casino-location">📍 {casino.location}</p>
                </div>
                <div className="casino-details">
                  <div className="detail-row">
                    <span className="detail-label">Área:</span>
                    <span className="detail-value">{casino.area}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Fundado:</span>
                    <span className="detail-value">{casino.founded}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Mesas de Jogo:</span>
                    <span className="detail-value">{casino.tables}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Caça-níqueis:</span>
                    <span className="detail-value">{casino.slots}</span>
                  </div>
                </div>
                <p className="casino-description">{casino.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="digital-casinos">
          <h3>💻 Cassinos Digitais</h3>
          <div className="digital-info">
            <p>Os maiores cassinos digitais do mundo possuem infraestruturas massivas em centros como Gibraltar, Malta, Londres e Caribe. Operadores como Playtech, Microgaming e IGT têm escritórios enormes dedicados ao fornecimento de jogos de cassino online.</p>
            <div className="digital-example">
              <h4>Exemplo: Cassino ao Vivo Playtech (Riga)</h4>
              <p>Ocupa mais de 27 mil m² apenas em um operador, demonstrando a escala dos cassinos digitais modernos.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MarketData

