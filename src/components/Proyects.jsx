import { useState } from 'react'
import lenguajes from '../json/lenguajes.json'
import '../styles/Proyects.css'

const Len = ({ id }) => {
  return(
    lenguajes.map(leng => {
      if (leng.id == id) {
        return <span key={leng.id} className={leng.class}>{leng.name}</span>
      }
    })
  )
}

export function Proyects({ title, repository, page, description, lenguaje}) {
    const [githubImage, setGithubImage] = useState("githubProyect")
    const [linkImage, setLinkImage] = useState("link")

    const githubHover = () => setGithubImage(`githubHover`)
    const githubOut = () => setGithubImage(`githubProyect`)
    const linkHover = () => setLinkImage(`linkHover`)
    const linkOut = () => setLinkImage(`link`)
    return (
        <section className='proyect-card'>
          <div className='header-section'>
            <span className='proyect-title'>{title}</span>
            <div className='links'>
              <a href={repository} target="_blank" onMouseEnter={githubHover} onMouseLeave={githubOut}>
                <img src={`../svg/${githubImage}.svg`} alt="" />
              </a>
              <a href={page} target="_blank" onMouseEnter={linkHover} onMouseLeave={linkOut}>
                <img src={`../svg/${linkImage}.svg`} alt="" />
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


