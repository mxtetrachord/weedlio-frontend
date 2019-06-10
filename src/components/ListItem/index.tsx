import React from 'react'

import './main.css'

type ListItemProps = { color?: string }
export const ListItem: React.FC<ListItemProps> = ({ children, color }) =>
  <div className={ `list-item ${ color }`}>
    { children } 
  </div>

export default ListItem
