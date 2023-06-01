import React from 'react'
import TituloCompleto from './componets/TituloCompleto'

function App(props) {
  return (
    <>
      <h1>Hello {props.amigo}</h1>
      <TituloCompleto></TituloCompleto>
    </>
  )
}

export default App
