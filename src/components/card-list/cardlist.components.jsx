import React from 'react';
import {Card} from '../card/card.components';
import './card.style.css';

export const CardList = props => {
    return <div className= 'card-list'>{props.demon.map( demon => (<Card key = {demon.id} demon ={demon}/>))}
    </div>
}