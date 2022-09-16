import './styles/main.css'
import logo from './assets/logo.svg'

import { Footer } from './components/Footer'
import { Card } from './components/Card'
import { useEffect, useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react'
import { Input } from './components/Input'
import { ButtonWeek } from './components/ButtonWeek'

interface gameProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number
  }
}

function App() {
  const cards = ["/game1.png", "/game2.png", "/game3.png", "/game4.png", "/game5.png", "/game6.png"]
  const weekDays = [
    { title: "Domingo", short: "Dom", },
    { title: "Segunda", short: "Seg", },
    { title: "Terça", short: "Ter", },
    { title: "Quarta", short: "Qua", },
    { title: "Quinta", short: "Qui", },
    { title: "Sexta", short: "Sex", },
    { title: "Sabado", short: "Sab", },
  ]
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
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg max-w-[500px] w-full shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>

            <Dialog.Content>
              <form className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="game" className="font-semibold">Qual o game?</label>
                  <Input id="game" placeholder="Selecione o game que deseja jogar" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <Input id="name" placeholder="Como te chamam dentro do game?" />
                </div>

                <div className="grid grid-cols-2 gap-6">

                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                    <Input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord">Qual o seu Discord?</label>
                    <Input id="discord" type="text" placeholder="Usuario#0000" />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays">Quando costuma jogar?</label>

                    <div className="grid grid-cols-4 gap-2">
                      {weekDays.map((item, index) => {
                        return (
                          <ButtonWeek key={index} title={item.title} short={item.short} />
                        )
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div className="flex flex-col gap-2">
                      <Input id="hourStart" type="time" placeholder="De" />
                      <Input id="hourEnd" type="time" placeholder="Até" />
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex gap-2 text-sm">
                  <Input type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer className="mt-4 flex justify-end gap-4">
                  <Dialog.Close
                    type="button"
                    className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                  >
                    Cancelar
                  </Dialog.Close>
                  <button
                    type="submit"
                    className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                  >
                    <GameController className="w-6 h-6" />
                    Encontrar duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>

          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>


    </div>
  )
}

export default App
