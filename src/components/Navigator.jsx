import { Link } from 'react-scroll'
import '../styles/Navigator.css'

export function Navigator() {
  return(
    <nav className='navigator'>
      <Link className='navigator-link' to='about' smooth={true} offset={0} duration={500}>
        ¿Quien soy?
      </Link>
      <Link className='navigator-link' to='skills' smooth={true} offset={0} duration={500}>
        Habilidades
      </Link>
      <Link className='navigator-link' to='projects' smooth={true} offset={0} duration={500}>
        Proyectos
      </Link>
      <Link className='navigator-link' to='talk' smooth={true} offset={0} duration={500}>
        Hablemos
      </Link>
    </nav>
  )
}