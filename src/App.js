import Dictionary from './Dictionary'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <i class="fas fa-book"></i> Dictionary
        </h1>
      </header>
      <Dictionary defaultKeyword="welcome" />
      <footer className="text-center">
        <a
          href="https://github.com/allisonmrr/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{' '}
        by Allison Maurer
      </footer>
    </div>
  )
}
