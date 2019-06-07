import React from 'react'

import './main.css'

export const ListItem: React.FC<{}> = ({ children }) =>
  <div className='list-item'>
    { children } 
  </div>

export default ListItem
