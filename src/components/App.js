import React from 'react';
import {NavLink} from 'react-router-dom'
import Menu from './Menu';
import Header from './Header';
import List from "./List";
import Search from "./Search"
import Details from "./Details"
import {BrowserRouter as Router} from 'react-router-dom'
import "../css/List.css";

class App extends React.Component {

  state = {
    films: [],
    people: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
    loaded_films: false,
    loaded_people: false,
    loaded_planets: false,
    loaded_species: false,
    loaded_starships: false,
    loaded_vehicles: false,
    menuPositions: [
      {
        name: "films",
        single: "film",
        path: "/films"
       },
       {
         name: "people",
         single: "character",
         path: "/people"
       },
       {
         name: "planets",
         single: "planet",
         path: "/planets"
       },
       {
         name: "species",
         single: "type",
         path: "/species"
       },
       {
         name: "starships",
         single: "starship",
         path: "/starships"
       },
       {
         name: "vehicles",
         single: "vehicle",
         path: "/vehicles"
       }
    ],
    inputSearchValue: "",
  }

  inputSearchChange = e => {
    this.setState({
      inputSearchValue: e.target.value,
    })
  }

  sortObjects = key => {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return comparison
    };
  }

  componentWillMount = () => {
    this.state.menuPositions.forEach(position => {
      fetch(`https://swapi.dev/api/${position.name}/`)
      .then(response => response.json() )
      .then(data => {
        let nubmerOfPages = Math.ceil(data.count/10);
        this.setState( () => {
          let loaded = "loaded_" + position.name;
          return { 
            [position.name]: data.results,
            [loaded]: true,
          };          
        });
        if (nubmerOfPages > 1)
          this.getNextPages(position.name,nubmerOfPages);
      })
    });
  }

  getNextPages = (name, nubmerOfPages) => {
    let i;
    for (i = 2; i < nubmerOfPages+1; i++){
      fetch(`https://swapi.dev/api/${name}/?page=${i}`)
        .then(response => response.json())
        .then(data => {
            this.setState( (prevState,props) => {  
              let loaded = "loaded_" + name;
              return {
                      [name]: prevState[name].concat(data.results),
                      [loaded]: true,
                    };
            })
        })
    }
  }

  onDetailsClick = (item) => { //when click on position in list 
    this.setState({
      selectedDetails: item,
    });
    window.scrollTo(0, 0);
  }

  translate = (word,array) => { 
    let result = array.filter((a)=>a[0]===word);
    return result.length > 0 ? result[0][1] : word;
  }

  getDetails = (value,property,dictionary) => {
    const {loaded_films, loaded_people, loaded_planets, loaded_species, loaded_starships, loaded_vehicles} = this.state;

    if (loaded_films && loaded_people && loaded_planets && loaded_species && loaded_starships && loaded_vehicles) {
      let key = property === "films" ? "title" : "name"
      property = property === "characters" ? "people": property;
      property = property === "residents" ? "people" : property;
      property = property === "pilots" ? "people" : property;
      property = property === "homeworld" ? "planets" : property;
      
      if (value === null)
        return "Brak";
      if (typeof value == "number")
        return value.toString();
      if (typeof value === "object" && value.length === 0) {
        return "Brak";
      } 
      if (typeof value === "string" && value.indexOf("http://") !== -1) {
        let filteredValue = this.translate(this.state[property].filter( element => element.url === value)[0][key],dictionary); 
        return filteredValue === "Brak danych" ? "Brak danych" : <NavLink to={`/${property}/${filteredValue}`}>{filteredValue}</NavLink>
      }
      if (typeof value === "object" && value.length > 0 && this.state[property] !== undefined) {
        let s3 = "";
        s3 = value.map( element => (
          <li key={element}> 
            <NavLink to={`/${property}/${this.state[property].filter( f => f.url === element)[0][key]}`}>{this.state[property].filter( f => f.url === element)[0][key]}</NavLink>
          </li>)
        ) 
        return <ul>{s3}</ul>
      }
      if (typeof value === "string" && value.indexOf("http://") === -1) 
        return this.translate(value,dictionary);
      else 
        return this.translate(value,dictionary);
    } 
  }
  

  render(){

    const dictionary = [
      ["films","Filmy"],
      ["people", "Postaci"],
      ["planets","Planety"],
      ["species","Gatunki"],
      ["starships","Statki kosmiczne"],
      ["vehicles","Pojazdy"],
      ["characters","Postaci"],
      ["director","Reżyser"],
      ["episode_id","Część"],
      ["producer", "Producent/ci"],
      ["release_date","Data premiery"],
      ["title","Tytuł"],
      ["A New Hope","Nowa Nadzieja"],
      ["The Empire Strikes Back","Imperium Kontratakuje"],
      ["Return of the Jedi","Powrót Jedi"],
      ["The Phantom Menace","Mroczne Widmo"],
      ["Attack of the Clones","Atak Klonów"],
      ["Revenge of the Sith","Zemsta Sithów"],
      ["birth_year","Rok urodzenia"],
      ["eye_color","Kolor oczu"],
      ["gender","Płeć"],
      ["hair_color","Kolor włosów"],
      ["height","Wzrost"],
      ["mass","Waga"],
      ["homeworld","Planeta pochodzenia"],
      ["name","Imię/Nazwa"],
      ["skin_color","Kolor skóry"], 
      ["climate","Klimat"],
      ["diameter","Średnica"],
      ["gravity","Przyciąganie"],
      ["orbital_period","Okres orbitowania"],
      ["population","Populacja"],
      ["rotation_period","Czas obrotu"],
      ["surface_water","Powierznia wody"],
      ["terrain","Rodzaj terenu"],
      ["average_height","Przeciętny wzrost"],
      ["average_lifespan","Przeciętna długość życia"],
      ["classification","Rodzaj"],
      ["mammal","Ssak"],
      ["designation","Odczuwanie"],
      ["eye_colors","Kolor/y oczu"],
      ["brown","Brązowe"],
      ["blue","Niebieskie"],
      ["green","Zielone"],
      ["hazel","Piwne"],
      ["yellow","Żółte"],
      ["grey","Szare"],
      ["amber","Bursztynowe"],
      ["hair_colors","Kolor włosów"],
      ["blond","Blond"],
      ["fair","Biała"],  
      ["brown","Brązowe/a"],
      ["black","Czarne"],
      ["red","Czerwone"],
      ["white","Biały/e"],
      ["gold","Złoty"],
      ["light","Jasna"],
      ["brown, grey","Brązowe, szare"],
      ["white, red","Biała, czerwona"],
      ["blue-gray","Niebiesko-szare"],
      ["auburn, white", "Kasztanowe, białe"],
      ["white, blue", "Biała, niebieskia"],
      ["language","Język"],
      ["cargo_capacity","Pojemność załadunkowa"],
      ["cost_in_credits","Koszt"],
      ["hyperdrive_rating","Hipernapęd"],
      ["length","Długość"],
      ["manufacturer","Producent"],
      ["max_atmosphering_speed","Maks. prędkość w atmosferze"],
      ["model","Model"],
      ["passengers","Liczba pasażerów"],
      ["starship_class","Klasa"],
      ["Human","Ludzie"],
      ["film","Film"],
      ["character","Postać"],
      ["planet","Planeta"],
      ["type","Gatunek"],
      ["starship","Statek kosmiczny"],
      ["vehicle","Pojazd"],
      ["none","Brak"],
      ["male","Mężczyzna"],
      ["female","Kobieta"],
      ["n/a","Brak danych"],
      ["unknown","Brak danych"],
      ["pilots","Piloci"],
      ["vehicle_class","Klasa pojazdu"],
      ["consumables","Eksploatacja"],
      ["landing craft","Barka desantowa"],
      ["crew", "Załoga"],
      ["skin_colors","Kolory skóry"],
      ["residents","Mieszkańcy"],
      ["opening_crawl","Wstęp"],
      ["indefinite", "Brak danych"]
    ]

    let {menuPositions, inputSearchValue} = this.state;
    let {films, people, planets, species, starships, vehicles} = this.state;
    let {loaded_films, loaded_people, loaded_planets, loaded_species, loaded_starships, loaded_vehicles} = this.state;
    let {translate, getDetails, sortObjects, inputSearchChange} = this;

    return (
      <Router>
        <Header/>
        <Menu   
          menuPositions={menuPositions} 
          loaded_films={loaded_films}
          loaded_people={loaded_people}
          loaded_planets={loaded_planets}
          loaded_species={loaded_species}
          loaded_starships={loaded_starships}
          loaded_vehicles={loaded_vehicles}         
          translate={translate}
          dictionary={dictionary}
          getDetails={getDetails}
          />
          <div className="clearfix">
            <section className="left fl">
            <Search
                    inputSearchValue={inputSearchValue}
                    inputSearchChange={inputSearchChange}
                />  
              <List 
                menuPositions={menuPositions} 
                films={films}
                people={people}
                planets={planets}
                species={species}
                starships={starships}
                vehicles={vehicles}
                dictionary={dictionary}
                translate={translate}
                sortObjects={sortObjects}
                inputSearchValue={inputSearchValue}
                inputSearchChange={inputSearchChange}
              />            
            </section>
            <section className="right fr">
              <Details
                films={films}
                people={people}
                planets={planets}
                species={species}
                starships={starships}
                vehicles={vehicles}
                dictionary={dictionary}
                translate={translate}
                getDetails={getDetails}
              />
            </section>
          </div>
      </Router>
    )
  }
}

export default App;
