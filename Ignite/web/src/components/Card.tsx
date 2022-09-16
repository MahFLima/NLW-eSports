import { useState } from "react";

interface Props {
  title: string;
  ads: number;
  bannerUrl: string;
}

export function Card({ title, ads, bannerUrl }: Props) {
  return (
    <>
      <a href="#" className="w-[200px] self-stretch relative rounded-lg overflow-hidden hover:translate-x-2 hover:-translate-y-2">
        <img src={bannerUrl} alt="" />

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
          <strong className="font-bold text-white block">
            {title}
          </strong>
          {ads == 0 ?
            (<span className="block text-zinc-300 text-sm">sem anuncios</span>) :
            ads == 1 ? ((<span className="block text-zinc-300 text-sm">{ads} anuncio</span>)) :
              (<span className="block text-zinc-300 text-sm">{ads} anuncios</span>)
          }
        </div>

      </a>
    </>
  )
}