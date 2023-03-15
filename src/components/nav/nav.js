import Link from "next/link"
import Image from "next/image"
import logo from "./logo.svg"
import filter from "./filter.svg"

export default function nav() {
  return (
    <nav className="flex justify-between py-3 px-6 shadow-[1px_1px_1px_0_rgba(0,0,0,.25)]">
      <Link className="flex gap-6 items-center" href="/">
        <Image width={40} src={logo} alt="Pokemon Logo" />
        <span className="text-red-600 text-3xl font-semibold">Pokedex</span>
      </Link>
      <button>
        <Image width={32} alt="Filter Pokemon" src={filter}/>
      </button>
    </nav>
  )
}