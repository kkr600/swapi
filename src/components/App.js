import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios';
import Menu from './Menu';
import Header from './Header';
import ListProperties from './ListProperties';
import Details from "./Details"
import { Sidebar, w3_close } from './Sidebar';

class App extends React.Component {

  state = {
    films: [],
    people: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
    loaded: {
      films: false,
      people: false,
      planets: false,
      species: false,
      starships: false,
      vehicles: false, 
    },
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
  }

  inputSearchChange = e => {
    this.setState({
      inputSearchValue: e.target.value,
    })
    document.querySelector('.search').focus();
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
        this.setState( prevState => {
          return {
            [name]: prevState[name].concat(response.data.results),
            [nameNo]: response.data.count
          }
        });
        if (nextPage !== null)
          this.loadData(name, ++page);
        else {
          let newState = this.state.loaded;
          newState[name] = true;
          this.setState({loaded: newState})
        } 
      })
 }

  render(){

    let { menuPositions, inputSearchValue } = this.state;
    let { loaded, films, people, planets, species, starships, vehicles} = this.state;
    let { getDetails, inputSearchChange } = this;
    
    return (
      <Router>
        
        <div className="mainWrap">
          <div className="halfWrap">
          <Sidebar
              menuPositions={menuPositions} 
              loaded={loaded}
              getDetails={getDetails}
            />
            <Header/>
            <Menu   
              menuPositions={menuPositions} 
              loaded={loaded}      
              getDetails={getDetails}
            />
          </div>

          <div className="contentWrap"> 
            <section className="left">
              <ListProperties
                menuPositions={menuPositions} 
                films={films}
                people={people}
                planets={planets}
                species={species}
                starships={starships}
                vehicles={vehicles}
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
                loaded={loaded}
              />
            </section>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;