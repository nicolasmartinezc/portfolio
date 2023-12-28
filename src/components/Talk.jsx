import '../styles/Talk.css'
import { github, linkedin, mail, curriculum } from '../assets/svg'

export function Talk() {
  return(
    <article className='talk-container'>
      <article className='contact-information' >
        <a href='https://github.com/elnico91' target='_blank'>
          { github }
          <h4>Github</h4>
        </a>
      </article>
      <article className='contact-information' >
        <a href='https://www.linkedin.com/in/nicolasmartinezcastro/' target='_blank'>
          { linkedin }
          <h4>Linkedin</h4>
        </a>
      </article>
      <article className='contact-information' >
        <a href='mailto:elnico-2001@hotmail.com' >
          { mail }
          <h4>Mail</h4>
        </a>
      </article>
      <article className='contact-information' >
        <a href='../../public/CV_Nicolas_Martínez.pdf' target='_blank'>
          { curriculum }
          <h4>Curriculum</h4>
        </a>
      </article>
    </article>
  )
}