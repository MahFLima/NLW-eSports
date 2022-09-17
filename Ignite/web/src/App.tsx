import './styles/main.css'
import logo from './assets/logo.svg'

import { Footer } from './components/Footer'
import { Card } from './components/Card'
import { useEffect, useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog';
import { CreatedModal } from './components/CreatedModal'

export interface gameProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number
  }
}

function App() {
  const cards = ["/game1.png", "/game2.png", "/game3.png", "/game4.png", "/game5.png", "/game6.png"]

  const [games, setGames] = useState<gameProps[]>([])
  const [searchInput, setSearchInput] = useState("")
  const listSearch = searchInput.length > 0 ? games.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase())) : []

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })


  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} />
      <h1 className="text-6xl font-black text-white mt-20">Seu
        <span className="text-transparent bg-nlw-gradient bg-clip-text"> duo </span>
        está aqui
      </h1>

      <input
        className="mt-8 w-96 p-4 border-none bg-gray-800 text-white"
        type="text" placeholder="pesquisar"
        onChange={(e) => { setSearchInput(e.target?.value) }}
      />

      <div className="flex justify-center flex-wrap gap-6 mt-20">
        {searchInput ? (
          listSearch.map(item => {
            return (
              <Card
                key={item.id}
                title={item.title}
                bannerUrl={item.bannerUrl}
                ads={item._count.ads}
              />
            )
          })
        ) : (
          games.map(item => {
            return (
              <Card
                key={item.id}
                title={item.title}
                bannerUrl={item.bannerUrl}
                ads={item._count.ads}
              />
            )
          })
        )}


      </div>
      <Dialog.Root>
        <Footer />
        <CreatedModal/>
      </Dialog.Root>


    </div>
  )
}

export default App
