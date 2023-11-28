import React from 'react'

type Props = {
    color?: string
}

const Card = (props: Props) => {
    const x = props.color
  return (
    <div>Card {x} </div>
  )
}

export default Card