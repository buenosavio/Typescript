import { Link } from 'react-router-dom'
import { ImageLogo } from './Logo.styles'

function Logo() {
  return (
  
      <Link to='/'> 
        <ImageLogo />
      </Link>

    
  )
}

export default Logo