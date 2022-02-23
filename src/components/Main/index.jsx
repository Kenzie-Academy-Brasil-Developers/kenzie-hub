import { useState } from "react"
import Button from "../Button"
import Techs from "../Techs"
import {Container} from './style'
import FormTechs from "../FormTechs"

const Main = () => {

    const [addTechs, setAddTechs] = useState(false)

    const handleTechs = () => {
        setAddTechs(!addTechs)
    } 

    return (
        <>
            <Container>
                <section>
                    <h1>Tecnologias</h1>
                    <Button backgroundColor="#212529" width="30px" onClick={() => handleTechs()}> + </Button>
                </section>
                {addTechs && <FormTechs />}
                <ul><Techs /></ul>
            </Container>
        </>
    )
}

export default Main