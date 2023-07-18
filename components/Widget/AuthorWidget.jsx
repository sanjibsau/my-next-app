import React from 'react'
import Div from '../Div'
import Image from 'next/image'

export default function AuthorWidget({src, name, description}) {
  return (
    <Div className="cs-author_card text-center">
      <Image src={src} alt="Aauthor" width={130} height={130} />
      <h3>{name}</h3>
      <p>{description}</p>
    </Div>
  )
}
