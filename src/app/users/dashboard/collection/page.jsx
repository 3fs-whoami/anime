import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Dashboard/Header"

const Page = () => {
    return (
        <section className="mt-4  pb-20 px-4 w-full">
            <div className="mt-6">
                <Header title={"My Collection"}/>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                <Link href={"/"} className="relative border-2 border-color-accent">
                    <Image src={""} alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
                        <h5 className="text-xl text-center">Judul Anime</h5>
                    </div>
                </Link>
                <Link href={"/"} className="relative border-2 border-color-accent">
                    <Image src={""} alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
                        <h5 className="text-xl text-center">Judul Anime</h5>
                    </div>
                </Link>
                <Link href={"/"} className="relative border-2 border-color-accent">
                    <Image src={""} alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
                        <h5 className="text-xl text-center">Judul Anime</h5>
                    </div>
                </Link>
                <Link href={"/"} className="relative border-2 border-color-accent">
                    <Image src={""} alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
                        <h5 className="text-xl text-center">Judul Anime</h5>
                    </div>
                </Link> 
                <Link href={"/"} className="relative border-2 border-color-accent">
                    <Image src={""} alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
                        <h5 className="text-xl text-center">Judul Anime</h5>
                    </div>
                </Link>
               
            </div>
        </section>
    )
}
export default Page