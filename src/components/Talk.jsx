import '../styles/Talk.css'
import { github, linkedin, mail, curriculum } from '../assets/svg'

export function Talk() {
  return(
    <article className='talk-container'>
      <article className='contact-information' >
        <a href='https://github.com/nicolasmartinezc' target='_blank'>
          { github }
          <p>Github</p>
        </a>
      </article>
      <article className='contact-information' >
        <a href='https://www.linkedin.com/in/nicolasmartinezc/' target='_blank'>
          { linkedin }
          <p>Linkedin</p>
        </a>
      </article>
      <article className='contact-information' >
        <a href='mailto:nmartinez.castro01@gmail.com' >
          { mail }
          <p>Correo</p>
        </a>
      </article>
      <article className='contact-information' >
        <a href='/assets/CV_Nicolas_Martinez.pdf' target='_blank'>
          { curriculum }
          <p>Curriculum</p>
        </a>
      </article>
    </article>
  )
}