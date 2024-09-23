import '../HowWeWork/HowWeWork.css'
import { HDesc } from './HowWeWork'
import { HTitle } from './HowWeWork'
import { test1, test2, test3, test4, test5 } from './HowWeWork'

export default function HowWeWork(){
    

    return(
        <>
        <section className='forthblock'>
            <div className='howspace'>
                <p className='titleof4'>How we work?</p> 

                <div className='sixbuttons'>
                    <div className='imposterD'>
                        <p>Requirements analysis and statement of work</p>
                    </div>
                    <button className='buttonw' id='button1' onClick={test1}>
                        <p id='text1' className='hTitle'>{HTitle[0].title}</p>
                        <p id='text1.1' className='hDescription'>{HDesc[0].description}</p>
                    </button>
                    <button className='buttonw' id='button2' onClick={test2}>
                        <p id='text2' className='hTitle'>{HTitle[1].title}</p>
                        <p id='text2.1' className='hDescription'>{HDesc[0].description}</p>
                    </button>
                    <button className='buttonw' id='button3' onClick={test3}>
                        <p id='text3' className='hTitle'>{HTitle[2].title}</p>
                        <p id='text3.1' className='hDescription'>{HDesc[0].description}</p>
                    </button>
                    <button className='buttonw' id='button4' onClick={test4}>
                        <p id='text4' className='hTitle'>{HTitle[3].title}</p>
                        <p id='text4.1' className='hDescription'>{HDesc[0].description}</p>
                    </button>
                    <button className='buttonw' id='button5' onClick={test5}>
                        <p id='text5' className='hTitle'>{HTitle[4].title}</p>
                        <p id='text5.1' className='hDescription'>{HDesc[0].description}</p>
                    </button>
                </div>

                <button className='circle'><p>LEARN MORE</p></button>
            </div>
        </section>
        </>
    )
}