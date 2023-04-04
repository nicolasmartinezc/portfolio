import { LateralBarContact, LateralBarNavigator } from './components/LateralBar'
import {  MobileNavigator, LinksMobile } from './components/Mobile'
import { Projects } from './components/Projects';
import { Skills } from './components/Skills'
import './styles/App.css'

function App() {
  return (
    <main>  

      <MobileNavigator></MobileNavigator>

      <div className='lb-contact'>
        <LateralBarContact link="https://github.com/elnico91" image="github" name="Github" visibility={true} download={false}></LateralBarContact>
        <LateralBarContact link="https://www.linkedin.com/in/nicolasmartinezcastro/" image="linkedin" name="Linkedin" visibility={true} download={false}></LateralBarContact>
        <LateralBarContact link="mailto:elnico-2001@hotmail.com" image="mail" name="Correo" visibility={true} download={false}></LateralBarContact>
        <LateralBarContact link="./assets/CV_Nicolas_Martínez.pdf" image="download" name="Descargar CV" visibility={true} download={true}></LateralBarContact>
      </div>
      <div className='lb-navigator'>
        <LateralBarNavigator link="about" image="arrow-up" visibility={true}></LateralBarNavigator>
        <LateralBarNavigator link="skills" image="circle" visibility={true}></LateralBarNavigator>
        <LateralBarNavigator link="projects" image="arrow-down" visibility={false}></LateralBarNavigator>
      </div>

      <section className='about' id='about'>
        <div className='presentation'> 
          <h4>Hola, soy</h4>
          <h1>Nicolás Martínez</h1>
          <p>Soy una persona curiosa el conocimiento, que me gusta ir experimentando cosas nuevas.
            Disfruto de mi tiempo libre jugando videojuegos y viendo series.
          </p>
          <LinksMobile></LinksMobile>
        </div>
        <div className='end-line start'></div>
      </section>

      <section className='skills' id='skills'>
        <h1 className='title'>Skills</h1>
        <Skills></Skills>
        <div className='end-line middle'></div>
      </section>
proyect
      <section className='projects' id='projects'>
        <h1 className='title'>Proyectos</h1>
        <div className='projects-container'>
          <Projects title="Ecommerce" repository="https://github.com/elnico91/ecommerce" page="https://elnico91.github.io/ecommerce/"
          description="Un ecommerce que esta diseñado con fines demostrativos en el que se utiliza una API
          para conseguir productos al que posteriormente que serán mostrados, con la posibilidad de añadir 
          al carrito y simular la compra del articulo."
          lenguaje={[1, 2, 3]}
          ></Projects>
          <Projects title="Tasker MERN" repository="https://github.com/elnico91/tasker-server" page="https://elnico91.github.io/tasker-mern/" 
          description="Un Todo list donde puedes organizar tus tareas para ser mas organizado/a y productivo/a. Puedes
          determinar una fecha donde estarías finalizando la tarea con una descripción de esta. Ayuda a planificar y 
          priorizar las tareas, reducir el estrés y evitar que las tareas se acumulen."
          lenguaje={[4, 5, 6]}
          ></Projects>
        </div>
        <div className='end-line final'></div>
      </section>

    </main>
  )
}

export default App
