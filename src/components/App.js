import React from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import axios from 'axios';
import Start from './Start';
import Menu from './Menu';
import Header from './Header';
import ListP from './ListP';
import Search from "./Search"
import Details from "./Details"

import dictionary from './dictionary'

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
    filmsNo: 1,
    peopleNo: 0, 
    planetsNo: 0,
    speciesNo: 0,
    starshipsNo: 36,
    vehiclesNo: 39,  
    menuPositions: [
      {
        name: "start",
        path: "/start",
        icon: 'home',
        exact: true
       },
      {
        name: "films",
        single: "film",
        icon: 'film',
        path: "/films"
       },
       {
         name: "people",
         single: "character",
         icon: 'street-view',
         path: "/people"
       },
       {
         name: "planets",
         single: "planet",
         icon: 'globe',
         path: "/planets"
       },
       {
         name: "species",
         single: "type",
         icon: 'dna',
         path: "/species"
       },
       {
         name: "starships",
         single: "starship",
         icon: 'fighter-jet',
         path: "/starships"
       },
       {
         name: "vehicles",
         single: "vehicle",
         icon: 'snowplow',
         path: "/vehicles"
       }
    ],
    inputSearchValue: "",
    inputSearchVisible: false,
    startVisible: true,
  }

  inputSearchChange = e => {
    this.setState({
      inputSearchValue: e.target.value,
    })
  }

  inputSearchSetVisible = () =>{
    this.setState({
      inputSearchVisible: true
    })
  } 

  startSetVisible = (bool) =>{
    bool = bool === undefined ? false : bool;
    this.setState({
      startVisible: bool
    })
  }

  sortObjects = key => {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key))
        return 0;
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB)
        comparison = 1;
      else if (varA < varB) 
        comparison = -1;

      return comparison
    };
  }

  componentDidMount = () => {
    const {menuPositions} = this.state;
    const {loadData} = this;

    menuPositions.forEach(position => {
      if (position.name !== "start")
        loadData(position.name);  
    })

    const path = window.location.pathname.substring(1);
    if (path !== "" && path !== "swapi")
      this.setState({startVisible: false})
  }

  loadData = (name, page = 1) => {
    axios.get(`https://swapi.dev/api/${name}/?page=${page}`)
      .then(response =>{
        let nextPage = response.data.next;
        let nameNo = name + "No";
        let loaded = "loaded_" + name;
        this.setState( prevState => {
          return {
            [name]: prevState[name].concat(response.data.results),
            [nameNo]: response.data.count
          }
        });
        if (nextPage !== null)
          this.loadData(name, ++page);
        else 
            this.setState({[loaded]:true});
      })
 }

  translate = (word,array) => { 
    let result = array.filter((a)=>a[0]===word);
    return result.length > 0 ? result[0][1] : word;
  }

  getDetails = (value,property,dictionary) => {
    const {loaded_films, loaded_people, loaded_planets, loaded_species, loaded_starships, loaded_vehicles} = this.state;
    const {translate} = this;

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
        let filteredValue = translate(this.state[property].filter( element => element.url === value)[0][key],dictionary); 
        return filteredValue === "Brak danych" ? "Brak danych" : <NavLink to={`/${property}/${filteredValue}`}>{filteredValue}</NavLink>
      }
      if (typeof value === "object" && value.length > 0 && this.state[property] !== undefined) {
        let s3 = "";
        s3 = value.map( element => (
          <li key={element}> 
            <NavLink to={`/${property}/${this.state[property].filter( f => f.url === element)[0][key]}`}>{translate(this.state[property].filter( f => f.url === element)[0][key],dictionary)}</NavLink>
          </li>))
          return <ul>{s3}</ul>
      }
      if (typeof value === "string" && value.indexOf("http://") === -1) 
        return translate(value,dictionary);
      else 
        return translate(value,dictionary);
    } 
  }
  

  
  render(){

    let {menuPositions, inputSearchValue, inputSearchVisible, startVisible} = this.state;
    let {films, people, planets, species, starships, vehicles} = this.state;
    
    let {loaded_films, loaded_people, loaded_planets, loaded_species, loaded_starships, loaded_vehicles} = this.state;
    let {translate, getDetails, sortObjects, inputSearchChange, inputSearchSetVisible, startSetVisible} = this;

    return (
      <Router>
        {/* <Header/> */}
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
          inputSearchSetVisible={inputSearchSetVisible}
          startSetVisible={startSetVisible}
        />
        <section>
          <Start startVisible={startVisible}/>
        </section>
        <Search
              inputSearchValue={inputSearchValue}
              inputSearchChange={inputSearchChange}
              inputSearchVisible={inputSearchVisible}
            />  
        <div className="contentWrap">
          <section className="left">
            <ListP
              menuPositions={menuPositions} 
              films={films}
              people={people}
              planets={planets}
              species={species}
              starships={starships}
              vehicles={vehicles}
              loaded_films={loaded_films}
              loaded_people={loaded_people}
              loaded_planets={loaded_planets}
              loaded_species={loaded_species}
              loaded_starships={loaded_starships}
              loaded_vehicles={loaded_vehicles}   
              dictionary={dictionary}
              translate={translate}
              sortObjects={sortObjects}
              inputSearchValue={inputSearchValue}
              inputSearchChange={inputSearchChange}
            />            
          </section>
          <section className="right">
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
