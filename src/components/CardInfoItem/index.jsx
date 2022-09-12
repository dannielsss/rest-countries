import React from 'react'
import { Info } from './styles';

function CardInfoItem({ title, value }) {
  return (
    <Info>
      <span>{title}</span> {value}
    </Info>
  )
}

export default CardInfoItem;