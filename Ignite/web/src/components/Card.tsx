import { useState } from "react";

type Props = {
  srcImg: string;
}

export function Card({srcImg}: Props){
  return(
  <a href="#" className="relative rounded-lg overflow-hidden">
    <img src={srcImg} alt="" />

    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
      <strong className="font-bold text-white block">
        League of Legends
      </strong>
      <span className="block text-zinc-300 text-sm">4 anuncios</span>
    </div>

  </a>
  )  
}