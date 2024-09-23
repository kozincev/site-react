export const HDesc = [
    {
        description: 'Some words about this step in our work.',
    },
    {
        description: "Some words about this step in our work. Some words about this step in our work. Some words about this step in our work.",
    }
]

export const HTitle = [
    {
        title: 'Design (if required)'
    },
    {
        title: 'Development, show demo version'
    },
    {
        title: 'Testing, completion'
    },
    {
        title: 'Product launch'
    },
    {
        title: 'Continued technical support'
    }
]

    let statuscheck1 = 0;
    let statuscheck2 = 0;
    let statuscheck3 = 0;
    let statuscheck4 = 0;
    let statuscheck5 = 0;

    function test1(onClick){
        if (statuscheck1 == 0){
            document.getElementById('button1').className = "buttonb"
            document.getElementById('text1.1').innerHTML = HDesc[1].description;
            document.getElementById('button2').className = "buttonw"
            document.getElementById('text2.1').innerHTML = HDesc[0].description;
            document.getElementById('button3').className = "buttonw"
            document.getElementById('text3.1').innerHTML = HDesc[0].description;
            document.getElementById('button4').className = "buttonw"
            document.getElementById('text4.1').innerHTML = HDesc[0].description;
            document.getElementById('button5').className = "buttonw"
            document.getElementById('text5.1').innerHTML = HDesc[0].description;
            statuscheck1 = 1;
            statuscheck2 = 0;
            statuscheck3 = 0;
            statuscheck4 = 0;
            statuscheck5 = 0;
        }
        else{
            statuscheck1 = 0;
            document.getElementById('button1').className = "buttonw"
            document.getElementById('text1.1').innerHTML = HDesc[0].description;
        }
        
    }
    function test2(onClick){
        if (statuscheck2 == 0){
            document.getElementById('button1').className = "buttonw"
            document.getElementById('text1.1').innerHTML = HDesc[0].description;
            document.getElementById('button2').className = "buttonb"
            document.getElementById('text2.1').innerHTML = HDesc[1].description;
            document.getElementById('button3').className = "buttonw"
            document.getElementById('text3.1').innerHTML = HDesc[0].description;
            document.getElementById('button4').className = "buttonw"
            document.getElementById('text4.1').innerHTML = HDesc[0].description;
            document.getElementById('button5').className = "buttonw"
            document.getElementById('text5.1').innerHTML = HDesc[0].description;
            statuscheck1 = 0;
            statuscheck2 = 1;
            statuscheck3 = 0;
            statuscheck4 = 0;
            statuscheck5 = 0;
        }
        else{
            statuscheck2 = 0;
            document.getElementById('button2').className = "buttonw"
            document.getElementById('text2.1').innerHTML = HDesc[0].description;
        }
        
    }
    function test3(onClick){
        if (statuscheck3 == 0){
            document.getElementById('button1').className = "buttonw"
            document.getElementById('text1.1').innerHTML = HDesc[0].description;
            document.getElementById('button2').className = "buttonw"
            document.getElementById('text2.1').innerHTML = HDesc[0].description;
            document.getElementById('button3').className = "buttonb"
            document.getElementById('text3.1').innerHTML = HDesc[1].description;
            document.getElementById('button4').className = "buttonw"
            document.getElementById('text4.1').innerHTML = HDesc[0].description;
            document.getElementById('button5').className = "buttonw"
            document.getElementById('text5.1').innerHTML = HDesc[0].description;
            statuscheck1 = 0;
            statuscheck2 = 0;
            statuscheck3 = 1;
            statuscheck4 = 0;
            statuscheck5 = 0;
        }
        else{
            statuscheck3 = 0;
            document.getElementById('button3').className = "buttonw"
            document.getElementById('text3.1').innerHTML = HDesc[0].description;
        }
        
    }
    function test4(onClick){
        if (statuscheck4 == 0){
            document.getElementById('button1').className = "buttonw"
            document.getElementById('text1.1').innerHTML = HDesc[0].description;
            document.getElementById('button2').className = "buttonw"
            document.getElementById('text2.1').innerHTML = HDesc[0].description;
            document.getElementById('button3').className = "buttonw"
            document.getElementById('text3.1').innerHTML = HDesc[0].description;
            document.getElementById('button4').className = "buttonb"
            document.getElementById('text4.1').innerHTML = HDesc[1].description;
            document.getElementById('button5').className = "buttonw"
            document.getElementById('text5.1').innerHTML = HDesc[0].description;
            statuscheck1 = 0;
            statuscheck2 = 0;
            statuscheck3 = 0;
            statuscheck4 = 1;
            statuscheck5 = 0;
        }
        else{
            statuscheck1 = 0;
            document.getElementById('button4').className = "buttonw"
            document.getElementById('text4.1').innerHTML = HDesc[0].description;
        }
        
    }
    function test5(onClick){
        if (statuscheck5 == 0){
            document.getElementById('button1').className = "buttonw"
            document.getElementById('text1.1').innerHTML = HDesc[0].description;
            document.getElementById('button2').className = "buttonw"
            document.getElementById('text2.1').innerHTML = HDesc[0].description;
            document.getElementById('button3').className = "buttonw"
            document.getElementById('text3.1').innerHTML = HDesc[0].description;
            document.getElementById('button4').className = "buttonw"
            document.getElementById('text4.1').innerHTML = HDesc[0].description;
            document.getElementById('button5').className = "buttonb"
            document.getElementById('text5.1').innerHTML = HDesc[1].description;
            statuscheck1 = 0;
            statuscheck2 = 0;
            statuscheck3 = 0;
            statuscheck4 = 0;
            statuscheck5 = 1;
        }
        else{
            statuscheck5 = 0;
            document.getElementById('button5').className = "buttonw"
            document.getElementById('text5.1').innerHTML = HDesc[0].description;
        }
        
    }



export {test1, test2, test3, test4, test5}
