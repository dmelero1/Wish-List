import './App.css'

const wishes = [
  {
    id: 0,
    text: "Travel to the moon",
    completed: true  ,
  },
  {
    id: 1,
    text: "Learn React",
    completed: false,
  },
  {
    id: 2,
    text: "Get a job",
    completed: false,
  },
  {
    id: 3,
    text: "Get a mansion",
    completed: false,
  },
]

function App() {
  return (
    <div className="app">
      <h1>My WishList</h1>
      <fieldset className="wish-input">
        <legend>New Wish</legend>
        <input type="text" placeholder="My new wish"/>
      </fieldset>
      <ul className="wish-list">
        {wishes.map(wish => (
          <li key={wish.id} className={`
            wish-list__item
            ${wish.completed ? `wish-list__item--done` : ''}`
          }>
            <input type="checkbox" checked={wish.completed}/>
            <label>{wish.text}</label>
          </li>
        ))}
        
      </ul>

    </div>
  )
}

export default App
