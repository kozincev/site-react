import '../GetInTouch/GetInTouch.css'
import button1 from '../imgs/Button1.png'
import button2 from '../imgs/white_icon.png'
import square from '../imgs/white_square.png'

export default function GetInTouch(){
    return(
        <>
            <section className='getInTouch'>
                <div className='wthit'>
                    <div>
                        <p className='bigFtext'>Get in touch with us</p>
                        <div className='threeInputs'>
                            <input type="text" placeholder='Enter your Full Name'/>
                            <input type="text" placeholder='Enter your Email'/>
                            <input type="text" placeholder='Enter your Phone Number'/>
                        </div>
                        <button className='mfbutton'>
                            <p>SUBMIT</p>
                            <img src={button1} alt="" />
                        </button>
                    </div>
                    <div>
                        <p className='alotOfText'>Simply fill in your Email in our contact form or get in touch with us by our  email - itsupportgroup@gmail.com - , and one of our experts will contact you shortly.</p>
                        <p className='alotOfText not'>This could be the beginning of a wonderful collaboration and the easiest way to acquire a highly-experienced team.</p>
                        <button className='mfbutton2'>
                            <p>DOWNLOAD THE BRIEF</p>
                            <img src={button2} alt="" />
                        </button>
                        <div className='lastForToday'>
                            <input type="text" placeholder='Describe your project'/>
                            <input type="text" placeholder='Upload file (max file size is 30 MB)'/>
                            <img src={square} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}