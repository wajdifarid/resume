import React from "react"

type Props = {
  imgSrc: string,
  title: string,
  details: string
}

export default function PortfolioCard({ imgSrc, title, details }: Props) {
  return (
    <div className="flex-col justify-start items-start flex">
      <img className="w-[280px] h-[136px] rounded-tl-lg rounded-tr-lg border border-slate-100" src={imgSrc} alt="project preview" />
      <div className="px-4 pt-2 pb-4 rounded-bl-lg rounded-br-lg border border-slate-100 flex-col justify-start items-start flex">
        <div className="text-sky-500 text-[14px] font-medium leading-normal">{title}</div>
        <div className="w-[248px] text-slate-400 text-[12px] font-normal leading-none">{details}</div>
      </div>
    </div>
  )
}
