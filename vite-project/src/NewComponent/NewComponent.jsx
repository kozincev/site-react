import { ways } from "../massive"

function NewComponent(props){
    console.log(props)
    const now = new Date()
    return(
        
        <>
        <section>
            <p><strong>{props.title}</strong> {props.description}</p>
        </section>
        </>
    )
}

export default NewComponent
