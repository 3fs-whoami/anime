"use client";

import HeaderMenu from "@/components/utilities/headerMenu";
import Pagination from "@/components/utilities/pagination";
import AnimeList from "@/components/AnimeList/"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/app/libs/api-libs"
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
    <div>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
      <AnimeList api={topAnime}/>
      <Pagination 
      page={page} 
      lastPage={topAnime.pagination?.last_visible_page}
      setPage={setPage}/>
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