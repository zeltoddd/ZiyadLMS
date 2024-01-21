import Image from "next/image"
import { Banner } from "./banner"
import  HeroImg  from "../public/hero.png"

export const HeroHome = () => {
  return (
    <div>
        <div>
        <Banner />
        </div>
        <div>
        <div className="flex flex-wrap lg:w-1/2 mt-24 px-6">
            <div className="lg:hidden mb-10">
                    <Image 
                    src={HeroImg} 
                    alt=""
                    quality={80}                    
                    />
                </div>
                <div className="self-center relative lg:w-80 mb-10">
                    <h1 className="font-bold text-4xl my-6 text-primary-sd">Bangun Karirmu Sebagai Developer Profesional</h1>
                    <p className="text-sm md:text-xl text-gray-600 mb-2">Mulai belajar terarah dengan learning path</p>
                    <button className="bg-primary-sd py-2 px-4 rounded-sm text-black font-semibold my-5 bg-teal-300 hover:bg-teal-400 hover:outline hover:outline-gray-200 hover:shadow-md transition duration-300 ease-in-out"><a href="">Belajar Sekarang</a></button>
                </div>
        </div>
    </div>
    </div>
  )
}
