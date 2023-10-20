import headerImage from "../../images/promo_globe.svg"


function Promo () {
  return (
    <section className="promo">
      <img src={headerImage} alt="глобус" className="promo__image"/>
      <div className="promo__container">
        <h1 className="promo__title">Web Development Faculty Student's Graduation Project.</h1>
        <p className="promo__paragraph">Scroll down to find out more details</p>
        <a href="#about" className="promo__link">Find more</a>
      </div>          
    </section>
  )
}

export default Promo;