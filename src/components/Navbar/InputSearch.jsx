"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"
const ImputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const HandleSearch = ( /** @type {{ preventDefault: () => void; }} */ event) => {
        const keyword = searchRef.current.value
        
        if(event.key === "Enter" || event.type === "click"){
            if (keyword.length == 0 || keyword == " ") return alert("please input your titie or name of anime")
            // else if (keyword == " ") return alert("please input your title anime")
            event.preventDefault()
            router.push(`/Search/${keyword}`)
        }
        // console.log(router)
    }

    return (
        <div className="relative">
            <input type="text" placeholder="search anime" 
            className="p-2 rounded-md w-full" 
            ref={searchRef} onKeyDown={HandleSearch}/>
            
            <button className="absolute top-2 end-2 "
            onClick={HandleSearch}>
                <MagnifyingGlass  size={25} />
            </button>
        </div>
    )
}

export default ImputSearch