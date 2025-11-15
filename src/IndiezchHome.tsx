import { FirstComponent } from "./components/home/FirstComponent"
import { Navbar } from "./components/layout/Navbar"
import { SecondComponent } from './components/home/SecondComponent';
import { InicioComponente } from './components/home/InicioComponente';


export const IndiezchHome = () => {
 
    return (
    <div >
      <Navbar/>
      <InicioComponente/>
      <FirstComponent/>
      <SecondComponent />
      
    </div>
  )
}
