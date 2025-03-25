import Logo from './assets/Logo.jpg'
import Phone from './assets/Phone.svg'
import User from './assets/User.svg'
import Vector from './assets/Vector.svg'
import './style.css'

export default function Header() {
    return (
        <div className='config__geral'>
            <nav className='cabecalho'>
                <div>
                    <img className ='img__logo' src={Logo} alt="" />
                </div>
                <div>
                    <ul className='cabecalho__navbar'>
                        <li>
                            <img src={Vector} alt="" />
                            <a href="#" className="link">Home</a>
                        </li>
                        <li>
                            <img src={User} alt="" />
                            <a href="#" className="">About me</a>
                        </li>
                        <li>
                            <img src={Phone} alt="" />
                            <a href="#" className="">Contact me</a>
                        </li>
                    </ul>
                </div>    
            </nav>
        </div>
    );
}