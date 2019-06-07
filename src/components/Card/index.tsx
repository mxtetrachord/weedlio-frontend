import React from 'react'
import { Link } from 'react-router-dom'

import './main.css'

type CardProps = {
  header: string,
  children: JSX.Element,
  fullwidth?: boolean
}

export const Card: React.FC<CardProps> = ({ header, children, fullwidth }: CardProps) =>
  <div className={`card ${fullwidth ? 'fullwidth' : ''}`}>
    <Link to={`/${header}`}>
      <div className={`card-header ${header}`}>
        <h3>{ header }</h3>
      </div>
    </Link>

    <div className='card-content'>
      { children }
    </div>
  </div>

export default Card
