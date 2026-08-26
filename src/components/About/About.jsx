import authorPhoto from '../../images/IvanCvnts.jpg';

function About() {
  return (
    <section className="app__section">
      <div className="about">
        <div
          className="about__avatar"
          style={{ backgroundImage: `url(${authorPhoto})` }}
        ></div>

        <div className="about__info">
          <h2 className="about__title">Acerca del autor</h2>
          <p className="about__description">
            Hola! Mi nombre es Ivan Cervantes, soy un desarrollador fullstack
            con experiencia en otras industrias como lo son turismo y finanzas,
            he decidido perseguir una carrera como desarrollador tanto por la
            pasión que descubri al programar, crear, automatizar y solucionar
            problemas, como otra manera de explotar los conocimientos que he
            adquirido a lo largo de una carrera multidisciplinaria.
          </p>

          <p className="about__description">
            Como desarrollador y usuario de diferentes herramientas que he usado
            a lo largo de mi carrera y formación profesional, pongo especial
            atención a los detalles no solamente en el codigo, si no tambien en
            la experiencia del usuario, la fluidez y la facilidad para adaptarse
            a las necesidades de los usuarios.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
