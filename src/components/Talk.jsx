import '../styles/Talk.css'
import { github, linkedin, mail, curriculum } from '../assets/svg'

export function Talk() {
  return(
    <article className='talk-container'>
      <article className='contact-information' >
        <a href='https://github.com/elnico91' target='_blank'>
          { github }
          <p>Github</p>
        </a>
      </article>
      <article className='contact-information' >
        <a href='https://www.linkedin.com/in/nicolasmartinezcastro/' target='_blank'>
          { linkedin }
          <p>Linkedin</p>
        </a>
      </article>
      <article className='contact-information' >
        <a href='mailto:elnico-2001@hotmail.com' >
          { mail }
          <p>Mail</p>
        </a>
      </article>
      <article className='contact-information' >
        <a href='/assets/CV_Nicolas_Martínez.pdf' target='_blank'>
          { curriculum }
          <p>Curriculum</p>
        </a>
      </article>
    </article>
  )
}