import Link from "next/link"
import ImputSearch from "./inputSearch"
const Page = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col md:items-center justify-between p-4 gap-4">
                <Link href={"/"} className="font-bold text-2xl"><span className="p-2 rounded-l-md text-color-primary bg-color-dark">Cuy</span><span className="p-2 rounded-r-md bg-color-nav ">Anime List</span></Link>
                <ImputSearch/>
            </div>
        </header>
    )
}
export default Page