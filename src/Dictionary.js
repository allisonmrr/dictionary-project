import React, { useState } from 'react'

export default function Dictionary() {
  let [keyword, setKeyword] = useState('')

  function search(event) {
    event.preventDefault()
    alert(`Searching for ${keyword}`)
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value)
  }

  return (
    <form onSubmit={search}>
      <input
        type="search"
        placeholder="Enter a word"
        onChange={handleKeywordChange}
      />
    </form>
  )
}