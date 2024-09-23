import '../Footer/Footer.css'
import it_logo from '../imgs/black_logo.png'
import insta from '../imgs/instagram.png'
import what from '../imgs/whatssapp.png'
import face from '../imgs/FaceBook.png'
import inn from '../imgs/in.png'
import arr from '../imgs/Button2.png'

export default function Footer(){
    return(
        <>
        <footer>
            <div className='ffspace'>
                <div className='threeagain'>
                    <div className='we'>
                        <img src={it_logo} alt="" />
                        <a href="">itsupportgroup@gmail.com</a>
                        <div className='social'>
                            <img src={insta} alt="" />
                            <img src={what} alt="" />
                            <img src={face} alt="" />
                            <img src={inn} alt="" />
                        </div>
                        <button>
                            <p>CONTACT US</p>
                            <img src={arr} alt="" />
                        </button>
                    </div>
                    <div className='are'>
                        <p className='black_text_f'>Our offices</p>
                        <p className='blue_text_f'>In Minsk</p>
                        <p className='gray_text_f'>+ 375 (29) 675-12-22</p>
                        <p className='gray_text_f'>44 Karl Liebknecht Street, floor 5, office 522</p>
                        <p className='blue_text_f f1'>In Vilnius</p>
                        <p className='gray_text_f'>+370 (52) 654-280-28</p>
                        <p className='gray_text_f'>44 Karl Liebknecht Street, floor 5, office 522</p>
                    </div>
                    <div className='sexbobomb'>
                        <p className='black_text_f f2'>services</p>
                        <p className='blue_text_f'>Technical Support</p>
                        <p className='blue_text_f'>Frontend Development</p>
                        <p className='blue_text_f'>Backend Development</p>
                        <p className='blue_text_f'>Mobile app development</p>
                        <p className='blue_text_f'>UI/UX Design</p>
                        <p className='blue_text_f'>Software Development</p>
                    </div>
                </div>
                <div className='lastpart'>
                    <p>Development by IT Support Group.</p>
                    <p>Data Privacy.</p>
                    <p>© 2023 IT Support Group </p>
                </div>
            </div>
        </footer>
        </>
    )
}