"use client"
import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
    return (
        <dev className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <FileSearch size={50} className="text-color-nav text-4xl"/>
                <div className="text-color-accent text-4xl font-bold">Not found</div>
                <Link href={"/"} className="text-color-accent underline hover:text-cyan-500">Kembali ke Home</Link>
            </div>
        </dev>
    )
}
export default Page