import React from 'react';
import Menu from './Menu';
import Header from './Header';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'



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
    selectedMenuItem: "",
    selectedDetails:"",
    detailPlanets: [],
    menuPositions: [
      {
        name: "films",
        single: "film",
        selected: false,
       },
       {
         name: "people",
         single: "character",
         selected: false,
       },
       {
         name: "planets",
         single: "planet",
         selected: false,
       },
       {
         name: "species",
         single: "type",
         selected: false,
       },
       {
         name: "starships",
         single: "starship",
         selected: false,
       },
       {
         name: "vehicles",
         single: "vehicle",
         selected: false,
       }
    ],
    listVisible: false,
  }

  sortObjects = (key) => {
    let order = "asc";
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

  componentDidMount = () => {
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
        .then(data => {
          this.setState(
            { loaded: true})
        })
    }
  }

  

  selectedDetails = (item) => { //when click on position in list 
    this.setState({
      selectedDetails: item,
    });
    window.scrollTo(0, 0);
  }

  setSelectedMenuItem = (item) => {   //set clicked main type (films, vehicles etc)
    this.setState({
      selectedMenuItem: item,
      listVisible: true,
    })
    let menuPositions = this.state.menuPositions;
    let menuPositionsIndex = menuPositions.findIndex( el => el.name == item);
    menuPositions.forEach( (el,i) => {  //un-checked other main types 
      if (i != menuPositionsIndex)
        el.selected = false
      else 
      el.selected = true
    });
    this.setState({
      selectedDetails: "",
      menuPositions 
    });
  }

  translate = (word,array) => { 
    let result = array.filter((a)=>a[0]===word);
    return result.length > 0 ? result[0][1] : word;
  }

  awesome = (selectedMenuItem,selectedDetails) => {
    selectedMenuItem = selectedMenuItem === "homeworld" ? "planets" : selectedMenuItem;
    this.setSelectedMenuItem(selectedMenuItem);
    this.selectedDetails(selectedDetails);
  }

  getDetails = (id,el,dictionary) => {
    let key = el === "films" ? "title" : "name"
    el = el === "characters" ? "people": el;
    el = el === "residents" ? "people" : el;
    el = el === "pilots" ? "people" : el;
    el = el === "homeworld" ? "planets" : el;

    if (id === null)
      return "Brak";
    else if (typeof id == "number")
      return id.toString();
    else if (typeof id === "object" && id.length === 0) {
      return "Brak";
    } 
    else if (typeof id === "object" && id.length > 0 && this.state[el] !== undefined) {
      let s3;
      s3 = id.map( element => 
        <li key={element}> 
          <a className="link" onClick={()=>{this.awesome(el,this.state[el].filter( f => f.url === element)[0][key])}}> 
            {this.state[el].filter( f => f.url === element)[0][key]} 
          </a> 
        </li>
      )
      return <ul>{s3}</ul>;
    }
    else if (typeof id === "string" && id.indexOf("http://") === -1)
      return this.translate(id,dictionary);
    else if (id.indexOf("http://") !== -1) {
      console.log("")
      let filteredValue = this.translate(this.state[el].filter( element => element.url === id)[0][key],dictionary); 
      return filteredValue;
    }
    else 
      return this.translate(id,dictionary);
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


    return (
      <React.Fragment>
        <Header/>
        <Menu   
          menuPositions={this.state.menuPositions} 
          onMenuClick={this.setSelectedMenuItem} 
          onDetailsClick={this.selectedDetails}
          selectedMenuItem={this.state.selectedMenuItem}
          selectedDetails={this.state.selectedDetails}
          films={this.state.films}
          people={this.state.people}
          planets={this.state.planets}
          species={this.state.species}
          starships={this.state.starships}
          vehicles={this.state.vehicles}
          loaded_films={this.state.loaded_films}
          loaded_people={this.state.loaded_people}
          loaded_planets={this.state.loaded_planets}
          loaded_species={this.state.loaded_species}
          loaded_starships={this.state.loaded_starships}
          loaded_vehicles={this.state.loaded_vehicles}         
          translate={this.translate}
          dictionary={dictionary}
          getDetails={this.getDetails}
          sortObjects={this.sortObjects}
          arrayToString={this.arrayToString}
          listVisible={this.state.listVisible}
          listVisibleTrue={this.listVisibleTrue}
          />
      </React.Fragment>
    )
  }
}

export default App;
