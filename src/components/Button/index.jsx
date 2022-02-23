import { Container } from './style'

const Button = ({children, backgroundColor = '#FF577f', width = '80%', ...rest}) => {
    return (
        <Container {...rest} backgroundColor={backgroundColor} width={width}> 
            {children}
        </Container>
    )
}

export default Button