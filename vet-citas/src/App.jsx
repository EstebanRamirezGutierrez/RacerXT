import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import Compras from "./components/Compras"

function App() {

  return (
    <div className='container mx-auto mt-20 '>
      <Header />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
        
      </div>
      <Compras />
      
    </div>
  )
}

export default App
