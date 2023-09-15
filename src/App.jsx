
import Header from './Component/Header'
import Card from './Component/Card'
import Footer from './Component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
      <div>
        <Header encabezado= "Adopta un Perrito"/>
        <Card colorfondo = "secondary" texto = "Adoptame" descripcion= "El Chow Chow, una peculiar raza china de perros guardianes caracterizada por su apariencia similar a la de un león y por su lengua de color negro azulado." nombre= "Chow Chow" imagen= "https://www.hogarmania.com/archivos/201105/chow-chow-xl-321x171x80xX.jpg"/>
        <Card colorfondo = "primary" texto = "Adoptame" descripcion= "El Bichón Maltés, una raza de perro pequeño,su aspecto dulce y cariñoso, hace que sea uno de los perros más populares y de compañía." nombre= "Bichon Maltes" imagen= "https://www.feelcats.com/wp-content/uploads/2019/08/bichon-maltes.jpg"/>
        <Card colorfondo = "danger" texto = "Adoptame" descripcion= "El Beagle es una raza de perro que transmite jovialidad. Este sabueso requiere, como cualquier otra mascota, mucho cariño." nombre= "Beagle" imagen= "https://www.feelcats.com/wp-content/uploads/2019/08/beagle.jpg"/>
        <Card colorfondo = "info" texto = "Adoptame" descripcion= "El Pequinés o pekinés es, sin duda, uno de los perros más peculiares que se pueden ver por nuestras calles." nombre= "Pequines" imagen= "https://www.feelcats.com/wp-content/uploads/2019/08/pequines.jpg"/>

        <Footer />
        
      </div>
    </>
  )
}

export default App
