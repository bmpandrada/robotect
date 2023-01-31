import { useState, useEffect } from 'react';
import './App.css';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';



const App = () =>{
  const [searchThis, setSearchField] = useState('');
  const [monstersAll, setMonster] = useState ([]);
  const [filteredMonster, setFilterMonster] = useState(monstersAll);
console.log('s')


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>setMonster(users));
  },[]);

  useEffect(()=>{
    const filterThis = monstersAll.filter((nameLetters)=>{ //gawa filter na mag babato sa setState
      return nameLetters.name.toLocaleLowerCase().includes(searchThis)//invoke ang gawa na setState
    });
    setFilterMonster(filterThis);
    },[monstersAll, searchThis]);
 


  const inputMonster = (e) =>{
    e.preventDefault();
    const searchFieldString = e.target.value.toLocaleLowerCase(); 
    setSearchField(searchFieldString);
  } 

 

  return(<div className='App'>
  <h1 className='app-title'>Robo Rolodex</h1>
      <SearchBox 
      className='monster-search-box'
      inputSearch={inputMonster} 
      placeHolder='Search Monster..'/>
      <Cardlist monstersAll={filteredMonster} />
  </div>)
}




















// class App extends Component {
//  constructor(){
//   super()
//   this.state ={
//     monstersAll:[],
//     searchThis:'',//lagay state
//   }
//  }
//  ///
//  componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response)=>response.json())
//   .then((users)=>this.setState(()=>{
//     return {monstersAll:users}
//   }))
//  }
// ///
// inputMonster = (e) =>{
//   const searchThis = e.target.value.toLocaleLowerCase(); //gawa ng setState
//   this.setState(()=>{
//     return {searchThis}//call ang gawa na setState 'searchThis'
//   })
// }

//  render(){ 
//   const {monstersAll, searchThis}= this.state;
//   const {inputMonster} =this;
//   const filterThis = monstersAll.filter((nameLetters)=>{ //gawa filter na mag babato sa setState
//     return nameLetters.name.toLocaleLowerCase().includes(searchThis)//invoke ang gawa na setState
//   })

//   return(<div className='App'>
//   <h1 className='app-title'>Robo Rolodex</h1>
//       <SearchBox 
//       className='monster-search-box'
//       inputSearch={inputMonster} 
//       placeHolder='Search Monster..'/>
//       <Cardlist monstersAll={filterThis} />
//   </div>)
//  }
// }

export default App;
