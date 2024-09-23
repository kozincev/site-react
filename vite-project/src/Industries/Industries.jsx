import '../Industries/Industries.css'
import in_icon_1 from '../imgs/in_icon_1.png'
import in_icon_2 from '../imgs/in_icon_2.png'
import in_icon_3 from '../imgs/in_icon_3.png'

export default function Industries(){
    return(
        <>
        <section className='industries'>
            <div className='inWorkSpace'>
                <p>Industries</p>
                <div className='threeofin'>
                    <div>
                    <img src={in_icon_1} alt="" />
                    <p className='inName'>Logistics</p>
                    <div className='anotherline'></div>
                    <p className='whoreadit'>Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.</p>
                    </div>
                    <div>
                    <img src={in_icon_2} alt="" />
                    <p className='inName'>E-commerce</p>
                    <div className='anotherline'></div>
                    <p className='whoreadit'>Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.</p>
                    </div>
                    <div>
                    <img src={in_icon_3} alt="" />
                    <p className='inName'>CRM systems</p>
                    <div className='anotherline'></div>
                    <p className='whoreadit'>Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.</p>    
                    </div> 
                </div>
                
            </div>
        </section>
        </>
    )
}