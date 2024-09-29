"use client";

import HeaderMenu from "@/components/utilities/headerMenu";
import Pagination from "@/components/utilities/pagination";
import AnimeList from "@/components/AnimeList/"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs"
import { useEffect, useState } from "react";

const Page = () => {

  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])
  
  const fetchData = async() => {
    
    const populerAnime = await getAnimeResponse(`top/anime`, `page=${page}`)
    setTopAnime(populerAnime)
  }
  useEffect(() => {
    fetchData()
  }, [page])
  // const lastPage = topAnime.pagination?.last_visible_page
  // console.log(lastPage)


  return (
    <div className="mx-5 mb-10">
      <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
      <section>
        <AnimeList api={topAnime}/>
        <Pagination 
        page={page} 
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}/>
      </section>
    </div>
  );
};

export default Page;

//   const populerAnime = await response.json();
  
//   setTopAnime(populerAnime)
// }
// const fetchAnime = async () => {
  
//     setPopanime(data); 
// };

// useEffect(() => {
//   fetchAnime(); 
// }, [page]);