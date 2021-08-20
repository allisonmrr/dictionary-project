import React from 'react'
import './Phonetics.css'

export default function Phonetics(props) {
  return (
    <div className="d-flex justify-contents-center Phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        <i class="fas fa-volume-up audio-button"></i>
      </a>
      <p>{props.phonetics.text}</p>
    </div>
  )
}
