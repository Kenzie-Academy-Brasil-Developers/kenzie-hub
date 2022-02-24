import { useState } from "react"
import ButtonIcon from "../ButtonIcon"
import Techs from "../Techs"
import {Container} from './style'
import FormTechs from "../FormTechs"
import {FiPlus} from 'react-icons/fi'

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
                    <ButtonIcon 
                    icon={FiPlus} 
                    onClick={() => handleTechs()}
                    background='#212529'
                    />
                </section>
                {addTechs && <FormTechs addTechs={addTechs} setAddTechs={setAddTechs}/>}
                <ul><Techs /></ul>
            </Container>
        </>
    )
}

export default Main