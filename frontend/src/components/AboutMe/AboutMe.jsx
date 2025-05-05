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
          I am a Frontend Developer with over two years of experience in building web applications that are intuitive, scalable, and user-friendly. My expertise lies in developing UI components, creating interactive data visualizations, and optimizing performance. I enjoy collaborating with designers and product managers, ensuring seamless user experiences. Beyond feature development, I focus on refactoring legacy code, conducting code reviews, and improving team workflows to maintain high-quality standards and efficiency.

          My previous experiences include working in the music industry. I managed and collaborated with an internationally acclaimed band (featured 5 times in TOP100 DJs, multiplatinum producers), negotiated with labels and promoters, and thereby improved my communication, problem-solving, and business abilities. My active involvement in guiding creative direction honed my teamwork and leadership skills. Furthermore, I've contributed to EdTech as a mentor in electronic music schools, where I've had the privilege to educate and inspire over 200 aspiring producers. Outside of work, I’m passionate about cooking, music, and helping homeless pets - hobbies that keep me balanced and inspired.
          </p>
          <a href="https://github.com/ststas" className="about-me__link" target="_blank" rel="noreferrer noopener">Github</a>
        </article>
      </div>
      <Portfolio/>
    </section>
  )
}

export default AboutMe;
