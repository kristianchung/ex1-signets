import "./ListeSignets.scss";
import Signet from "./Signet";
import tabSignets from './data/signets.json'; 

export default function ListeSignets(props){

    return(
        <div className="ListeSignets">
            <h2>Signets Afficher</h2>
            <ul>
                {
                    tabSignets.map((sig) =>
                        <Signet 
                            key={sig.id}
                            titre={props.titre} 
                            id={sig.id} 
                            couleur={sig.couleur} 
                            dateDeModification={sig.dateDeModification} 
                        />
                    )   
                }     
            </ul>
        </div>
    )
}