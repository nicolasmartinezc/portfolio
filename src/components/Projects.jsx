import '../styles/Projects.css'
import project from '../json/projects.json'
import { useState } from 'react'
import { arrow_left, arrow_right, github, link } from '../assets/svg'

export function Projects() {
  const [index, setIndex] = useState(0)
  let length = project.length
  // let seconds = 0

  const sub = () => index === 0 ? setIndex(length - 1) : setIndex(index - 1)
  const sum = () => index === length - 1 ? setIndex(0) : setIndex(index + 1)

  // let interval = setInterval(() => {
  //   seconds++
  //   if (seconds === 10) {
  //     seconds = 0
  //     sum()
  //   }
  // }, 1000)

  const changeProject = (e, func) => {
    if (e.target.tagName === 'svg' || e.target.tagName ===  'path') {
      // seconds = 0
      func()
    }
  }

  const changeProjectAutomatic = (i) => {
    // seconds = 0
    setIndex(i)
  }

  return (
    <article className='projects-container'>
      <button className='carrousel-projects' onClick={(e) => changeProject(e, sub)}> { arrow_left } </button>
        <article className='project-info'>
          <header className='project-header'>
            <h2 className='project-title'>{project[index].title}</h2>
            <span className='projects-links' >
              <a  href={project[index].repository} target='_blank'>{ github } Repositorio</a>
            </span>
            <span className='projects-links'>
              <a  href={project[index].url} target='_blank'>{ link } Pagina Web</a>
            </span>
          </header>
          <p className='project-description'>{project[index].description}</p>
          {
            project[index].languages.map(({id, lang}) => <span className='used-language' key={id}>{lang}</span>)
          }
        </article>
        <picture className='project-image'>
          <img src={project[index].image} alt={project[index].alt} />
        </picture>
      <button className='carrousel-projects' onClick={(e) => changeProject(e, sum)}> { arrow_right } </button>
      <span className='carrousel-index'>
        {
          project.map(({id}) => <button className={index + 1 === id ? 'button-carrousel start' : 'button-carrousel'} key={id} onClick={() => changeProjectAutomatic(id - 1)}></button>)
        }
      </span>
    </article>
  )
}
