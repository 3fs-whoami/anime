"use client"
import { FileSearch } from "@phosphor-icons/react"
// import Link from "next/link"
import { useRouter } from "next/navigation"

const Page = () => {
    const router = useRouter()


    return (
        <dev className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <FileSearch size={50} className="text-color-nav text-4xl"/>
                <div className="text-color-accent text-4xl font-bold">Not found</div>
                <button onClick={() => router.back()} className="text-color-accent underline hover:text-cyan-500">Kembali ke Home</button>
            </div>
        </dev>
    )
}
export default Page