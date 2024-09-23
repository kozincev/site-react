import '../Header/Header.css'
import logo from '../imgs/Logo.png'
import lanarr from '../imgs/lanarr.png'
import arrow from '../imgs/arrow.png'

function Header(){
    return(
        <>
            <header>
                <nav>
                    <div className='logo_div'>
                        <a href=""><img className='logo' src={logo} alt="" /></a>
                    </div>
                    
                    <div className='nav_half'>
                        <ul className='stupid_links'>
                            <a href=""><li>about</li></a>
                            <a href=""><li>our services</li></a>
                            <a href=""><li>job openings</li></a>
                        </ul>

                        <div className='en'>
                            <p>EN</p>
                            <img src={lanarr} alt="" />
                        </div>
                        
                        <div className='button_div'>
                            <button className='nav_button'>
                                <p>CONTACT US</p>
                                <img src={arrow} alt="" />
                            </button>
                        </div>
                    </div>
                </nav>
                <div>
                    <div className='kapec'>
                    <div className='div1'>
                        <p>Developing IT solutions to scale up your business</p>
                        <div className='i_hate_this_design'></div>
                    </div>

                    <div className='div2'>
                        <div>
                            <p>Estimate project</p>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header