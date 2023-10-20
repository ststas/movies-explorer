import {ICONS} from "../../utils/constants";

function Techs () {
  return (
    <section className="techs">
      <h2 className="techs__title">Techs</h2>
      <article className="techs__article">
        <h3 className="techs__article-title">7 Techs</h3>
        <p className="techs__article-paragraph">During the web development educational course, I have mastered the technologies that were used in my graduation project.</p>
      </article>
      <ul className="techs__icons">
        {ICONS.map((element, index) => (<li className="techs__icon" key={index}>{element}</li>))}
      </ul>
    </section>
  )
}

export default Techs;