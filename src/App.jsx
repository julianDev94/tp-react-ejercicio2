
import { Container } from 'react-bootstrap'
import Mensaje from './components/Mensaje'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const valorMensaje = 'My friend!';  

  return (
    <>
      <Container className='my-3 text-center'>
        <Mensaje valorMensaje = {valorMensaje}/>
      </Container>      
    </>
  )
}

export default App
