import React from 'react'
import './searchBox.styles.css';

export const SearchBox = ({Placeholder ,Handeler}) =>(
    <input 
        className='search'
        type='search' 
        placeholder={Placeholder}  
        onChange = {Handeler}
     />
)