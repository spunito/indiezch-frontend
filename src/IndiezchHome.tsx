import { FirstComponent } from "./components/home/FirstComponent"
import { Navbar } from "./components/layout/Navbar"
import { SecondComponent } from './components/home/SecondComponent';
import { InicioComponente } from './components/home/InicioComponente';
import { Footer } from './components/layout/Footer';


export const IndiezchHome = () => {
 
    return (
    <div >
      <Navbar/>
      <InicioComponente/>
      <FirstComponent/>
      <SecondComponent />
      <Footer />
      
    </div>
  )
}
