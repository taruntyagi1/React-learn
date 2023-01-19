import logo from './logo.svg';
import './App.css';
import {Component} from 'react'

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
   
    .then((user)  => this.setState(()=>{
      // console.log(users)
    return {monsters : user}
    },
    ()=>{
      console.log(this.state)
    }
    ))
    
  }
 
  render(){
    return (
      <div className="App">
        <input className='srch' type="search" placeholder='search monsters' 
        onChange={(event)=>{
        const filtermonsters = this.state.monsters.filter((monster) =>{
          console.log(this.state)
          console.log(event.target.value)
          return monster.email.includes(event.target.value)
        });
        this.setState(()=>{
          return {monsters : filtermonsters}
        })
          

        }}/>
       {this.state.monsters.map((monsters)=>{
        console.log(monsters.user)
        return (
          <div  key={monsters.id}>
            
            <p>{monsters.name}</p>
            {/* <p>{monsters.username}</p> */}
           

          </div>
        );
       })}


       </div>
      
    );
  }
 
  
}

export default App;
