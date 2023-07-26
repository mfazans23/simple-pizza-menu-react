import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
]

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData
  const numPizzas = pizzas.length

  return (
    <main className='menu'>
      <h2>Our menu</h2>
      {pizzas && numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine, 6 creative dishes to choose from. All
            from our stone oven, organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizzaData.map((pizza, index) => (
              <Pizza key={index} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu</p>
      )}
    </main>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 8
  const closeHour = 22
  const isOpen =
    (hour >= openHour && hour <= 23) || (hour >= 0 && hour <= closeHour)

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {String(openHour).padStart(2, '0')}
          :00 and {String(closeHour).padStart(2, '0')}:00
        </p>
      )}
    </footer>
  )
}

function Order({ closeHour }) {
  return (
    <div className='order'>
      <p>
        We're open until {String(closeHour).padStart(2, '0')}:00. Come visit us
        or order online.
      </p>
      <button className='btn'>Order</button>
    </div>
  )
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'sold out' : `$${pizzaObj.price}`}</span>
      </div>
    </li>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
