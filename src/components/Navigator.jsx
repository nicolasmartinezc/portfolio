import { Link } from 'react-scroll'
import '../styles/Navigator.css'

export function Navigator() {
  return(
    <nav className='navigator'>
      <Link href='about' className='navigator-link' to='about' smooth={true} offset={0} duration={500}>
        ¿Quien soy?
      </Link>
      <Link href='skills' className='navigator-link' to='skills' smooth={true} offset={0} duration={500}>
        Habilidades
      </Link>
      <Link href='projects' className='navigator-link' to='projects' smooth={true} offset={0} duration={500}>
        Proyectos
      </Link>
      <Link href='talk' className='navigator-link' to='talk' smooth={true} offset={0} duration={500}>
        Hablemos
      </Link>
    </nav>
  )
}