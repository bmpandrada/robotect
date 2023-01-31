import { Component } from "react";
import Card from "../card/card.component";
import './card-list-style.css'

class Cardlist extends Component {
    render(){
        const {monstersAll} =this.props;

        return (
            <div className='card-list'>
         {monstersAll.map((monsterCard)=>{

          return(<Card etoMonster={monsterCard} key={monsterCard.id}/>) 
         })}
            </div>
        )
    }
}


export default Cardlist;

