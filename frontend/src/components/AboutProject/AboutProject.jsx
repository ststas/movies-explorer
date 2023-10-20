function AboutProject () {

  return (
    <section className="about" id="about">
      <h2 className="about__title">About the project</h2>
      <div className="about__description">
        <article className="about__article">
          <h3 className="about__article-title">The diploma project included 5 stages.</h3>
          <p className="about__article-paragraph">Planning, working on the backend part, layout, adding functionality and final improvements.</p>
        </article>
        <article className="about__article">
          <h3 className="about__article-title">5 weeks to complete the diploma.</h3>
          <p className="about__article-paragraph">Each sprint had a soft and hard deadline that needed to be met in order to successfully pass it.</p>
        </article>
      </div>
      <div className="about__weeks-time">
        <p className="about__weeks-container about__weeks-container_background_back about__weeks-container_size_back">1 week</p>
        <p className="about__weeks-container about__weeks-container_background_front about__weeks-container_size_front">4 weeks</p>
      </div>
      <div className="about__weeks-title">
        <p className="about__weeks-container about__weeks-container_size_back about__weeks-container_color_gray">Backend</p>
        <p className="about__weeks-container about__weeks-container_size_front about__weeks-container_color_gray">Frontend</p>
      </div>
    </section>
  )
}

export default AboutProject;