import React from 'react'

import './main.css'

type ListItemProps = {}
export const ListItem: React.FC<ListItemProps> = ({ children }) =>
  <div className='list-item'>
    { children } 
  </div>

export default ListItem
