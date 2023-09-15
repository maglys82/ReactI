
import Header from './assets/Component/Header'
import Card from './assets/Component/Card'
import Footer from './assets/Component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
      <div>
        <Header encabezado= "Adopta un Perrito"/>
        <Card colorfondo = "secondary" texto = "Adoptame" descripcion= "El Chow Chow, una peculiar raza china de perros guardianes caracterizada por su apariencia similar a la de un león y por su lengua de color negro azulado." nombre= "Chow Chow" imagen= "https://www.hogarmania.com/archivos/201105/chow-chow-xl-321x171x80xX.jpg"/>
        <Footer />
        
      </div>
    </>
  )
}

export default App
