
import './hero.scss'
import Logo from '../../assets/image/logo.png'

const Hero = () => {

  return (
    <header className="hero">
      <div className="hero__content">
        <div className="logo">
          <img className='logo__img' src={Logo} alt="Logo" width={600} height={400} />
        </div>
        <h1 className="hero__title">
          — юбилейная выставка современного искусства кафедры дизайна ОГУ, посвящённая её 30-летию.
        </h1>
        <h2 className='hero__desc'>Выпадение из системы</h2>
      </div>
    </header>
  )
}

export default Hero
