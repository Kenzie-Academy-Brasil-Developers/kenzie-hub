import { Container } from "./style"

const Header = () => {

    const {name, course_module} = JSON.parse(localStorage.getItem('@KenzieHub:user'))

    return (
        <Container>
            <section>
                <h1>Ola, {name}</h1>
                <span>{course_module}</span>
            </section>
        </Container>    
    )
}
export default Header