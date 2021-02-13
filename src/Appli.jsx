import './Appli.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';
import BtnAjouterSignets from './BtnAjouterSignets';

export default function Appli() {

  return (
    <div className="Appli">
        <Entete />
          <section className="contenuPrincipal">
        <ListeSignets/>
      </section>
      <BtnAjouterSignets/>
    </div>
  );
}

