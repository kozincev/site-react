import { choose } from './WhyChooseUs'
import Button from '../components/Button'
import '../WhyChooseUs/WhyChooseUs.css'

function WhyChooseUs() {

    function handleClick(onClick) {
        document.getElementById("div1").innerHTML = choose[0].title;
        document.getElementById("div2").innerHTML = choose[0].description;
    }
    function handleClick2(onClick) {
        document.getElementById("div1").innerHTML = choose[1].title;
        document.getElementById("div2").innerHTML = choose[1].description;
    }
    function handleClick3(onClick) {
        document.getElementById("div1").innerHTML = choose[2].title;
        document.getElementById("div2").innerHTML = choose[2].description;
    }
    function handleClick4(onClick) {
        document.getElementById("div1").innerHTML = choose[3].title;
        document.getElementById("div2").innerHTML = choose[3].description;
    }

    return(
        <>
        <section className='finalwork'>
            <div className='two_txt'>
                <p className='biggerxt'>Why choose us?</p>
                <p className='smallerxt'>Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.</p>
            </div>
            <div className='two_divs'>
                <div className='last1'>
                    <Button className='pipka' onClick={handleClick}>Team</Button>
                    <Button onClick={handleClick2}>Communication</Button>
                    <Button onClick={handleClick3}>Solution</Button>
                    <Button onClick={handleClick4}>Quality</Button>
                    <div className='last_pipka'></div>
                </div>
                <div className='last2'>
                    <p id='div1' className='big_text_ohyeah'>{choose[0].title}</p>
                    <p id='div2' className='smallertextr'>{choose[0].description}</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default WhyChooseUs