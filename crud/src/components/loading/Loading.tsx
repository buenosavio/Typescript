import imgLoading from '../../images/loadingimg.gif'
import { Container } from './Loading.styles'

function Loading() {
  return (
    <Container>
      <img src={imgLoading}/>
      <h3>Loading...</h3>     
    </Container>
  )
}

export default Loading