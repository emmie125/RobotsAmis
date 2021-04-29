import { useState, useEffect } from "react";
import Card, { ClickCard } from "./component/card";
import Inputfield from "./component/input";

const App = () => {
  const [robots, setRobots] = useState([]);
  let [search, setSearch] = useState(robots);
  let [findrobot, setFindrobot] = useState();

  const [etat, setEtat] = useState(false);
  const [etatCard, setEtatCard] = useState(false);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const tabData = data.map((robot) => {
          return robot;
        });
        setRobots(tabData);
        setSearch(tabData);
      });
  }, []);
  console.log(robots);

  const Change = (e) => {
    e.preventDefault();
    const filtreRobots = robots.filter(({ name }) =>
      name.toUpperCase().includes(e.currentTarget.value.toUpperCase())
    );

    console.log(filtreRobots);
    setSearch(filtreRobots);
  };

  const handelClickCard = (id) => {
    const findRobot = robots.find((robots) => robots.id === id);
    console.log(findRobot);
    setFindrobot(findRobot);
    setEtatCard(true);
  };

  console.log(findrobot);
  const showCards = () => {
    setEtatCard(false);
  };
  return (
    <div className="container">
      <div className="container__title">
        <h1>MES AMIS ROBOTS</h1>
      </div>
      <div className="container__card">
        {etatCard === false ? (
          <>
            <div className="container__card__input">
              <Inputfield placeholder="Rechercher par nom" onChange={Change} />
            </div>
            <div className="container__card__description">
              {search.map(({ id, name, email }) => {
                return (
                  <Card
                    key={id}
                    url={`https://robohash.org/${id}`}
                    name={name}
                    email={email}
                    clickCard={() => handelClickCard(id)}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <ClickCard
            name={`NAME : ${findrobot.name}`}
            url={`https://robohash.org/${findrobot.id}`}
            username={`USERNAME : ${findrobot.username}`}
            email={`EMAIL : ${findrobot.email}`}
            adress={`ADRESSE : `}
            street={`STREET : ${findrobot.address.street}`}
            suite={`SUITE : ${findrobot.address.suite}`}
            city={`CITY : ${findrobot.address.city}`}
            zicode={`ZICODE : ${findrobot.address.zicode}`}
            geo={`GEOLOCATION : `}
            lat={`LAT : ${findrobot.address.geo.lat}`}
            lng={`LNG : ${findrobot.address.geo.lng}`}
            phone={`PHONE : ${findrobot.phone}`}
            website={`WEBSITE : ${findrobot.website}`}
            company={`COMPANY : ${findrobot.company.name}`}
            catchPhrase={`CATCHPHRASE : ${findrobot.company.catchPhrase}`}
            bs={`BS : ${findrobot.company.bs}`}
            showCards={showCards}
          />
        )}
      </div>
    </div>
  );
};
export default App;
