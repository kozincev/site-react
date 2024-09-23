import '../ourGoals/ourGoals.css'
import { goals } from './OurGoals'

function OurGoals(props){
    return(
        <>
        <section className='workSpace'>
            {/* Надпись вверху */}
            <div className='goal1'> 
                <p>What are our goals?</p>
            </div>
            {/* Первая полоса блоков */}
            <div className='goal2'>
                <div>
                    <div className='numba'>
                        <p>{goals[0].title}</p>
                    </div>
                    <div className='nenumba'>
                        <p className='blacktext'>{goals[0].sub_title}</p>
                        <p className='graytext'>{goals[0].description}</p>
                    </div>
                </div>
                <div>
                <div>
                    <div className='numba'>
                        <p>{goals[1].title}</p>
                    </div>
                    <div className='nenumba'>
                        <p className='blacktext'>{goals[0].sub_title}</p>
                        <p className='graytext'>{goals[0].description}</p>
                    </div>
                </div>
                </div>
                <div className='picture1'><img src={goals[4].picture} alt="" /></div>
            </div>
            {/* Вторая полоса блоков */}
            <div className='goal3'>
                <div className='picture2'><img src={goals[5].picture2} alt="" /></div>
                <div>
                <div className='numba'>
                        <p>{goals[2].title}</p>
                    </div>
                    <div className='nenumba ohno'>
                        <p className='blacktext'>{goals[0].sub_title}</p>
                        <p className='graytext2 downpls'>{goals[0].description}</p>
                        <p className='graytext2'>{goals[0].description}</p>
                    </div>
                </div>
            </div>
            {/* Третья полоса блоков */}
            <div className='goal4'>
                <div className='g41'>
                <div className='numba'>
                        <p>{goals[3].title}</p>
                    </div>
                    <div className='nenumba'>
                        <p className='blacktext'>{goals[0].sub_title}</p>
                        <p className='graytext3'>{goals[3].description}</p>
                    </div>
                </div>
                <div className='g42'><img src={goals[6].picture3} alt="" /></div>
            </div>
        </section>
        </>
    )
}

export default OurGoals