import "./Signet.scss";
import BtnConfig from './BtnConfig';
import BtnDeplace from './BtnDeplace';

export default function signets(props){
    return (
        <li className="Signet">
            <BtnDeplace/>
            <div className="image">
                <img src={'images/' + props.id + '.png'} alt={props.titre}/>
            </div>
            <div className="info">
                <h3>{props.titre}</h3>
                <p className="dateDeModification"> Modifié : {props.dateDeModification}</p>
             <BtnConfig/>
            </div>
        </li>
    );
}