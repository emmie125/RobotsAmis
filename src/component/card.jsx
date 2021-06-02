const Card = (props) => {
  return (
    <div className="card" >
      <div>
        <img src={props.url} alt={props.alt} />
      </div>
      <div className="card__description">
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
      <button className="btnDetails" onClick={props.clickCard}>Details</button>
    </div>
  );
};

export const ClickCard = (props) => {
  
  return (
    <div className="card-click" >
      <button className="btnshowCards" onClick={props.showCards}>Back</button>
      <div className="card-click__img">
        <img src={props.url} alt={props.alt} />
      </div>

      <div className="card-click__identity">
        <h2>{props.name}</h2>
        <p className="card-click__identity__contenu">{props.username}</p>
        <p className="card-click__identity__contenu">{props.email}</p>
        <p>
          <span className="card-click__identity__contenu">{props.adress}</span>
          <span>{props.street}</span>
          <span>{props.suite}</span>
          <span>{props.city}</span>
          <span>{props.zicode}</span>
        </p>
        <p>
          <span className="card-click__identity__contenu">{props.geo}</span>
          <span>{props.lat}</span>
          <span>{props.lng}</span>
        </p>
        <p className="card-click__identity__contenu">{props.phone}</p>
        <p className="card-click__identity__contenu">{props.website}</p>
        <p ><span className="card-click__identity__contenu">{props.company}</span>
            <span>{props.catchPhrase}</span>
            <span>{props.bs}</span>
        </p>
      </div>
    
    </div>
  );
};

export default Card;
