import '../styles/Presentation.css'
import { github, linkedin, mail, curriculum } from '../assets/svg'

export function Presentation() {
  return(
    <article className='presentation-container'>
      <article>
        <header>
          <h1 className='title'>Hola, soy</h1>
          <h1 className='name'>Nicolás Martínez</h1>
        </header>
        <p className='about'>Desarrollador Full-Stack MERN titulado de la Universidad Técnica Santa Maria.
        Una persona curiosa y apasionada por el conocimiento, que se siente cómodo experimentando
        cosas nuevas y aprendiendo rápidamente. Disfruto de mi tiempo libre jugando videojuegos y viendo series.
        </p>
        <nav className='links'>
          <a className='contact' href='https://github.com/nicolasmartinezc' target='_blank'> { github } <span>Github</span></a>
          <a className='contact' href='https://www.linkedin.com/in/nicolasmartinezc/' target='_blank'> { linkedin } <span>Linkedin</span></a>
          <a className='contact' href='mailto:elnico-2001@hotmail.com'> { mail } <span>Correo</span></a>
          <a className='contact' href='/assets/CV_Nicolas_Martinez.pdf' target='_blank'> { curriculum } <span>Curriculum</span></a>
        </nav>
      </article>
      <picture className='image-container'>
        <img className='image' src="/images/68033271.webp" alt="Imagen de Nicolás Martínez" />
      </picture>
    </article>
  )
}