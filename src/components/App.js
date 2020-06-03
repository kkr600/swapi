import React from 'react';
import Menu from './Menu';
import Header from './Header';
import Styles from '../css/App.css';

class App extends React.Component {

  state = {
    films: [],
    people: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
    selectedMenuItem: "",
    selectedDetails:"",
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
    ]
  }

  selectedDetails = (item) => {
    this.setState({
      selectedDetails: item,
    })
  }

  setSelectedMenuItem = (item) => {   
    fetch(`https://swapi.dev/api/${item}/`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        [item]: data.results,
        selectedMenuItem: item,
      })
    });
    let menuPositions = this.state.menuPositions;
    let menuPositionsIndex = menuPositions.findIndex( el => el.name == item);
    menuPositions.forEach( (el,i) => {
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
    let result = array.filter((a)=>a[0]==word);
    return result.length > 0 ? result[0][1] : word;
  }

  showDetails = id => {
    
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
      ["The Empire Strikes Back","Impreium Kontratakuje"],
      ["Return of the Jedi","Powrót Jedi"],
      ["The Phantom Menace","Mroczne Widmo"],
      ["Attack of the Clones","Atak Klonów"],
      ["Revenge of the Sith","Zemsta Sithów"],
      ["birth_year","Rok urodzenia"],
      ["eye_color","Kolor oczu"],
      ["gender","Płeć"],
      ["hair_color","Kolor włosów"],
      ["height","Wzrost"],
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
      ["brown, blue, green, hazel, grey, amber","Brązowe, niebieskie, zielone, piwne,szare,bursztynowe"],
      ["hair_colors","Kolor włosów"],
      ["blonde, brown, black, red","Blond, brązowe,czarne, czerwone"],
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
          translate={this.translate}
          dictionary={dictionary}
          showDetails={this.showDetails}
          />
      </React.Fragment>
    )
  }
}

export default App;
