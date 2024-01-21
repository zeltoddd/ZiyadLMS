import { Card, CardContent } from "./ui/card"
import D2 from "../public/d2.png"
import Image from "next/image"

export const ProgamNew = () => {
  return (
    <div className="container px-6">
        <h2 className="text-2xl mb-3">Progam terbaru kami</h2>
        <p className="text-sm text-justify text-gray-600 mb-5">Bekerja sama dengan partner, kami menyelenggarakan beberapa program untuk mendukung developer Indonesia.</p>
        <Card className="hover:scale-105 transition duration-300 ease-in-out">
            <CardContent className="mb-0">
                <Image className="pt-6 rounded-lg"
                src={D2}
                alt="d2"/>
            </CardContent>
            <CardContent className="">
                <p className="text-xs text-gray-500">Oleh ZiyadLMS Membangun Negeri</p>
                <h2 className="mt-3 mb-1 text-lg">ZiyadLMS Bootcamp Batch 2</h2>
                <p className="text-gray-600 text-sm text-justify">Program ZiyadLMS Bootcamp bertujuan untuk menghasilkan talenta berstandar tinggi yang sesuai dengan standar industri.</p>
            </CardContent>
        </Card>
    </div>
  )
}
