import React from 'react'
import Synonyms from './Synonyms'
import './meanings.css'

export default function Meanings(props) {
  console.log(props.meanings)
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <div className="definition">{definition.definition}</div>
              <div className="example">{definition.example}</div>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        )
      })}
    </div>
  )
}
