import imgError from '../../images/error.gif'
import { Container } from './Error.styles'

function Error() {
  return (
    <Container>
      <img src={imgError} alt="" />
      <h3>Erro...</h3>
    </Container>
  )
}

export default Error