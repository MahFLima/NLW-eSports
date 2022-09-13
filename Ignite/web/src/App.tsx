import './styles/main.css'
import logo from './assets/logo.svg'


import { Footer } from './components/Footer'
import { Card } from './components/Card'

function App() {
  const cards = ["/game1.png", "/game2.png", "/game3.png", "/game4.png", "/game5.png", "/game6.png"]

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} />
      <h1 className="text-6xl font-black text-white mt-20">Seu
        <span className="text-transparent bg-nlw-gradient bg-clip-text"> duo </span>
        está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-20">
        {cards.map((item, index) => {
          return (
            <Card key={index} srcImg={item}/>
          )
        })}

      </div>

      <Footer/>

    </div>
  )
}

export default App
