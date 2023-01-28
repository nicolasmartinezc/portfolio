import { LateralBarContact, LateralBarNavigator } from './components/LateralBar'
import {  MobileNavigator, LinksMobile } from './components/Mobile'
import { Proyects } from './components/Proyects';
import { Skills } from './components/Skills'
import './styles/App.css'

function App() {
  return (
    <main>  

      <MobileNavigator></MobileNavigator>

      <div className='lb-contact'>
        <LateralBarContact link="https://github.com/elnico91" image="github" name="Github" visibility={true} descargar={false}></LateralBarContact>
        <LateralBarContact link="https://www.linkedin.com/in/nicolasmartinezcastro/" image="linkedin" name="Linkedin" visibility={true} descargar={false}></LateralBarContact>
        <LateralBarContact link="mailto:elnico-2001@hotmail.com" image="mail" name="Correo" visibility={true} descargar={false}></LateralBarContact>
        <LateralBarContact link="./assets/nicolas-martinez-cv.pdf" image="download" name="Descargar CV" visibility={true} descargar={true}></LateralBarContact>
      </div>
      <div className='lb-navigator'>
        <LateralBarNavigator link="about" image="arrow-up" visibility={true}></LateralBarNavigator>
        <LateralBarNavigator link="skills" image="circle" visibility={true}></LateralBarNavigator>
        <LateralBarNavigator link="proyects" image="arrow-down" visibility={false}></LateralBarNavigator>
      </div>

      <section className='about' id='about'>
        <div className='presentation'> 
          <h4>Hola, soy</h4>
          <h1>Nicolás Martínez</h1>
          <p>Una persona que le gusta los videojuegos y programar, actualmente no cuento con experencia laboral
            por esta razon sigo estudiando y practicando mi codigo para encontrar mi primer empleo como programador Full-stack.
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

      <section className='proyects' id='proyects'>
        <h1 className='title'>Proyectos</h1>
        <div className='proyects-container'>
          <Proyects title="Ecommerce" repository="https://github.com/elnico91/ecommerce" page="https://elnico91.github.io/ecommerce/"
          description="Un ecommerce que esta diseñado con fines demostrativos en el que se utiliza una API
          para conseguir productos al que posteriormente que seran mostrados, con la posibilidad de añadir 
          al carrito y simular la compra del articulo."
          lenguaje={[1, 2, 3]}
          ></Proyects>
          <Proyects title="Próximamente..." repository="#" page="#" 
          description=""
          lenguaje={[4, 5, 6]}
          ></Proyects>
        </div>
        <div className='end-line final'></div>
      </section>

    </main>
  )
}

export default App
