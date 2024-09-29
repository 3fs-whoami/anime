import React from "react"
import AnimeList from "@/components/AnimeList/index"
import Header from "@/components/AnimeList/header"
const Page = async({params: {keyword}}) => {
    const search = decodeURI(keyword)
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=naruto`)
    const anime = await response.json()
    
    return (
        <div className="mx-5 mb-8">
            <Header title={`Search Anime "${search}"..`}/>
            <AnimeList api={anime}/>
        </div>
    )
}
export default Page