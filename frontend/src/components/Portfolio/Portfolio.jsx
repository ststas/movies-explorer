import { PORTFOLIO } from "../../utils/constants"

function Portfolio () {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Portfolio</h4>
      <ul className="portfolio__projects">
        {PORTFOLIO.map((element, index) => (
          <li className="portfolio__project" key={index}>
            <a href={element.link} className="portfolio__link" target="_blank" rel="noreferrer noopener">
              <p className="portfolio__paragraph">{element.name}</p>
              <p className="portfolio__paragraph">↗</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Portfolio;