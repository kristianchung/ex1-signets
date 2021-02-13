import "./Entete.scss";


export default function Entete(props){

    return (
        <header className="Entete">
            <div>Signets</div>
            <ul className="navUtil">
                <div>Nom, Prénom</div>
                <div>[icone]</div>
            </ul>
        </header>
    );
}