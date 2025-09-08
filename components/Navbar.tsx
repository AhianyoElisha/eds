import { NAV_LINKS } from "@/constants"
import { link } from "fs"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 animate-slideInDown">
      <Link href="/" className="hover:scale-105 transition-transform duration-300">
        <Image src={"/ezarlogo.png"} alt="logo" width={120} height={40}/>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link, index) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter
          cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-50 animate-slideInDown"
          style={{ animationDelay: `${index * 100}ms` }}>
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden animate-slideInRight delay-300">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src={"menu.svg"}
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden hover:scale-110 transition-transform duration-300"
      />
    </nav>
  )
}

export default Navbar