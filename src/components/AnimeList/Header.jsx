import Link from "next/link"

const Header = ({title, LinkHref, LinkTitle}) => {
    return (
    <div className="flex justify-between p-4 items-center text-color-primary">
    <h1 className="text-2xl font-bold">{title}</h1>
      {LinkHref && LinkTitle ? <Link href={LinkHref}
      className="md:text-xl text-md
      underline hover:text-color-accent 
      transition-all">{LinkTitle}</Link> : null}
  </div>
)}
export default Header