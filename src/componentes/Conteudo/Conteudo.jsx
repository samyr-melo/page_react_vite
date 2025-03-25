import Imagem2 from './assets/Rectangle7.png'
import Imagem1 from './assets/Rectangle6.png'
import Imagem3 from './assets/Rectangle8.png'
import './style.css'


const Conteudo = () => {
  return (
    <div className="conteudo__site">
      <div className='conteudo__texto'>
        <h1 className='titulo__site'>Welcome to my site</h1>
        <p className='sobre-mim__texto'>Hi, I’m Sachina, a UI UX <span className='span'>Designer.</span> </p>
        <p className='sobre-mim__texto__experiencia'>I am a focused and talented B.Sc.CSIT student currently pursuing my bachelor degree from Asian School of Management and Technology. <a href='#'> See More..</a></p>
        <div className='estilo__botoes'>
          <a href='#' className='botao-hire__me'>Hire me!</a>
          <a href='#'  className='botao-my__project'>See My Project</a>
        </div>
      </div>
      <div className='image-container'>
        <img src={Imagem1} alt="" className='underlay-image'/>
        <img src={Imagem2} alt="" className='base-image'/>
        <img src={Imagem3} alt="" className='underlay-image'/>
      </div>
    </div>
  )
}

export default Conteudo

