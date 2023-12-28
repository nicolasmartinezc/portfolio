import { Presentation } from './components/Presentation';
import { Navigator } from './components/Navigator';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills'
import { Talk } from './components/Talk';
import './styles/App.css'

function App() {
  return (
    <main>

      <Navigator />

      <section className='about container' id='about'>
        <Presentation />
      </section>

      <section className='skills container' id='skills'>
        <h1 className='title'>Habilidades</h1>
        <Skills />
      </section>

      <section className='projects container' id='projects'>
        <h1 className='title'>Proyectos</h1>
        <Projects />
      </section>

      <section className='talk container' id='talk'>
        <Talk />
      </section>

    </main>
  )
}

export default App
