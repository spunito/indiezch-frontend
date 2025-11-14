import { FirstComponent } from "./components/home/FirstComponent"
import { Navbar } from "./components/layout/Navbar"
import { SecondComponent } from './components/home/SecondComponent';


export const IndiezchHome = () => {
 
    return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <FirstComponent/>
      <SecondComponent />
      
    </div>
  )
}
