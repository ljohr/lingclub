import "./Eboard.css"

const Eboard = () => {
  return (
    <main className="eboard-main">
      <h1>2023-2024 Executive Board</h1>
      <section className="eboard-list">
        <div className="eboard-member">
          <p>Lilly Ohr | President</p>
          <p className="grad-year">Class of 2024</p>
        </div>

        <div className="eboard-member">
          <p>Katie Morrissey | Vice President</p>
          <p className="grad-year">Class of 2024</p>
        </div>
        
        <div className="eboard-member">
          <p>Tatum Samson | Vice President</p>
          <p className="grad-year">Class of 2024</p>
        </div>

        <div className="eboard-member">
          <p>Nicole Conte | Secretary</p>
          <p className="grad-year">Class of 2024</p>
        </div>

        <div className="eboard-member">
          <p>Alex Gudaitis | Treasurer</p>
          <p className="grad-year">Class of 2024</p>
        </div>

        <div className="eboard-member">
          <p>Annabelle Langford | Media Manager</p>
          <p className="grad-year">Class of 2026</p>
        </div>
      </section>
    </main>
  )
}

export default Eboard