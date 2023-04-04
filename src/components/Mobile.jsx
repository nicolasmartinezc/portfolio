import { Link } from 'react-scroll'
import '../styles/MobileNavigator.css';

export function MobileNavigator({ }){
    return(
        <div className='mobile'>
            <Link to="about" smooth={true} offset={0} duration={500}>
               ¿Quien soy?
            </Link>
            <Link to="skills" smooth={true} offset={0} duration={500}>
               Skills
            </Link>
            <Link to="projects" smooth={true} offset={0} duration={500}>
                Proyectos
            </Link>
        </div>
    )
}

export function LinksMobile({ }){
    return(
        <div className='link-mobile'> 
            <a href="https://github.com/elnico91" target="_blank">
                <img src="/svg/github.svg"/>
            </a>
            <a href="https://www.linkedin.com/in/nicolasmartinezcastro/" target="_blank">
                <img src="/svg/linkedin.svg"/>
            </a>
            <a href="mailto:elnico-2001@hotmail.com" target="_blank">
                <img src="/svg/mail.svg"/>
            </a>
            <a href="./assets/CV_Nicolas_Martínez.pdf" target="_blank">
                <img src="/svg/download.svg"/>
                <span>Descargar CV</span>
            </a>
        </div>
    )
}