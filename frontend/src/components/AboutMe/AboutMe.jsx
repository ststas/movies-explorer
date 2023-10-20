import AvatarImage from "../../images/about_me_avatar.jpg";
import Portfolio from "../Portfolio/Portfolio";


function AboutMe () {
  
  return (
    <section className="about-me">
      <h2 className="about-me__title">Student</h2>
      <div className="about-me__profile">
        <img src={AvatarImage} alt="аватар студента" className="about-me__avatar" />
        <article className="about-me__article">
          <h3 className="about-me__article-title">Stanislav Zaitsev</h3>
          <p className="about-me__article-paragraph">Web Developer</p>
          <p className="about-me__article-paragraph">
            Passionate web developer with over 1 year of hands-on experience. Having graduated from Yandex 
            Practicum IT school, I've sharpened my skills in HTML, CSS, JavaScript, React, and Node.js. 
            During my studies, I've successfully finished several projects that were built on principles 
            of object-oriented programming and responsive design. Additionally, I've developed customized 
            forms with thorough validation, utilized REST APIs for smooth data communication, and 
            initiated a project built around a Node.js server. My proficiency extends to version control 
            using GitHub, project assembly via WebPack/NPM, and adeptness at testing and debugging. 
            Moreover, I have a background in mathematics, which complements my programming skills.
          </p>
          <a href="https://github.com/ststas" className="about-me__link" target="_blank" rel="noreferrer noopener">Github</a>
        </article>
      </div>
      <Portfolio/>
    </section>
  )
}

export default AboutMe;
