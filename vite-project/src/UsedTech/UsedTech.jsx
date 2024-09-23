import '../UsedTech/UsedTech.css'
import icon from '../imgs/js_icon.png'
import {lol1, lol2, lol3, lol4, lol5, lol6, lol7, lol8} from '../UsedTech/UsedTech.js'




export default function usedTech() {
    return(
        
        <>
        <section className='usedTech'>
            <div className='workspaceUT'>
                <p className='titleUT'>Used technologies</p>
                <p className='descUT'>Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.</p>
                <div className='line'>
                    <div className='linespace'>
                        <div className='lineitself'></div>
                        <div className='lessspace'>
                            <button id='b1' onClick={lol1} className='buttonoff'></button>
                            <button id='b2' onClick={lol2} className='buttonoff'></button>
                            <button id='b3' onClick={lol3} className='buttonoff'></button>
                            <button id='b4' onClick={lol4} className='buttonoff'></button>
                            <button id='b5' onClick={lol5} className='buttonoff'></button>
                            <button id='b6' onClick={lol6} className='buttonoff'></button>
                            <button id='b7' onClick={lol7} className='buttonoff'></button>
                            <button id='b8' onClick={lol8} className='buttonoff'></button>
                        </div>
                    </div>
                    <div className='textspace'>
                        <p id='p1' className='textoff'>Title of the first technology</p>
                        <p id='p2' className='textoff'>Title of the first technology</p>
                        <p id='p3' className='textoff'>Title of the first technology</p>
                        <p id='p4' className='textoff'>Title of the first technology</p>
                        <p id='p5' className='textoff'>Title of the first technology</p>
                        <p id='p6' className='textoff'>Title of the first technology</p>
                        <p id='p7' className='textoff'>Title of the first technology</p>
                        <p id='p8' className='textoff'>Title of the first technology</p>
                    </div>

                    <div className='icon_space'>
                        <img className='js_icon' id='im1' src={icon} alt="" />
                        <img className='js_icon' id='im2' src={icon} alt="" />
                        <img className='js_icon' id='im3' src={icon} alt="" />
                        <img className='js_icon' id='im4' src={icon} alt="" />
                        <img className='js_icon' id='im5' src={icon} alt="" />
                        <img className='js_icon' id='im6' src={icon} alt="" />
                        <img className='js_icon' id='im7' src={icon} alt="" />
                        <img className='js_icon' id='im8' src={icon} alt="" />
                    </div>
                    
                    
                </div>
            </div>
        </section>
        </>
    )
}