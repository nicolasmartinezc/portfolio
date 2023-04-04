import { useState } from 'react'
import lenguajes from '../json/lenguajes.json'
import '../styles/Projects.css'

const Len = ({ id }) => {
  return(
    lenguajes.map(lenguaje => {
      if (lenguaje.id == id) {
        return <span key={lenguaje.id} className={lenguaje.class}>{lenguaje.name}</span>
      }
    })
  )
}

export function Projects({ title, repository, page, description, lenguaje}) {
    const [githubImage, setGithubImage] = useState("githubProject")
    const [linkImage, setLinkImage] = useState("link")

    const githubHover = () => setGithubImage(`githubHover`)
    const githubOut = () => setGithubImage(`githubProject`)
    const linkHover = () => setLinkImage(`linkHover`)
    const linkOut = () => setLinkImage(`link`)
    
    return (
        <section className='project-card'>
          <div className='header-section'>
            <span className='project-title'>{title}</span>
            <div className='links'>
              <a href={repository} target="_blank" onMouseEnter={githubHover} onMouseLeave={githubOut}>
                <img src={`/svg/${githubImage}.svg`} alt="" />
              </a>
              <a href={page} target="_blank" onMouseEnter={linkHover} onMouseLeave={linkOut}>
                <img src={`/svg/${linkImage}.svg`} alt="" />
              </a>
            </div>
          </div>
          <article className='description'>{description}</article>
          <article className='lenguajes'>
            {
              lenguaje.map(id => {
                return(
                  <Len key={id} id={id}></Len>
                )
              })
            } 
          </article>
        </section>
    )
}


