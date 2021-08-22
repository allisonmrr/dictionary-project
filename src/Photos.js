import React from 'react'
import './Photos.css'

export default function Photos(props) {
  if (props.photos) {
    return (
      <section>
        <div className="row Photos">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.tiny}
                    className="img-fluid"
                    alt="search result"
                  />
                </a>
              </div>
            )
          })}
        </div>
      </section>
    )
  } else {
    return null
  }
}
