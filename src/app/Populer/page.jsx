// "use client"
"use client"

import React, { useEffect, useState } from "react"
import HeaderMenu from "@/components/utilities/HeaderMenu"
import Pagination from "@/components/utilities/Pagination"
import AnimeList from "@/components/AnimeList"

const Page = async () => {
    const [page, setPage] = useState(1099)
    const [topAnime, setTopAnime] = useState([])

    try {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`);
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
            const data = await response.json();
            setTopAnime(data)
        }
        useEffect(() => {
            fetchData()
        }, [page])
      return (
        <div className="mx-5 mb-8"> 
        
            <HeaderMenu title={`Anime Ter Populer #${page}`}/>

            {/* <Header title="Top Anime" LinkHref="/Populer" LinkTitle="Lihat semua"/> */}
            <AnimeList api={topAnime}/>
            <Pagination page={page} setPage={setPage} lastPage={topAnime.pagination.last_visible_page}/>   
        </div>
      );
    } catch (error) {
      console.error('Error fetching anime:', error);
    }
    
}
export default Page