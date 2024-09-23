import Link from "next/link"
import ImputSearch from "./InputSearch"
const Page = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col md:items-center justify-between p-4 gap-4">
                <Link href={"/"} className="font-bold text-2xl"><span className="pl-2 py-2 bg-color-nav">Cuy</span><span className="pr-2 py-2 bg-color-dark text-color-primary">Anime List</span></Link>
                <ImputSearch/>
            </div>
        </header>
    )
}
export default Page