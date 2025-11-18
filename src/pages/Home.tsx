import { FirstComponent } from "../components/home/FirstComponent"
import { SecondComponent } from '../components/home/SecondComponent';
import { InicioComponente } from '../components/home/InicioComponente';

export const Home = () => {
  return (
    <>
      <InicioComponente />
      <FirstComponent />
      <SecondComponent />
    </>
  );
};

