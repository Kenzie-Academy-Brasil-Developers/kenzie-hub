import Button from "../Button"
import Techs from "../Techs"
import {Container} from './style'

const Main = () => {
    return (
        <>
            <Container>
                <section>
                    <h1>Tecnologias</h1>
                    <Button backgroundColor="#212529" width="30px"> + </Button>
                </section>
                <ul><Techs /></ul>
            </Container>
        </>
    )
}

export default Main