"use client";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import Pagination from "@/components/utilities/pagination"; // Pastikan komponen Pagination sudah diimport
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  const fetchSearch = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}&page=${page}`);
    const searchAnime = await response.json();
    if (searchAnime && searchAnime.data) {
      setTopAnime(searchAnime);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [page, decodedKeyword]); // Add decodedKeyword to dependency array

  return (
    <div className="mx-5 mb-10 mt-5">
      <Header title={`Search Anime "${decodedKeyword}"..`} />
      <AnimeList api={topAnime} />
      <footer className="my-5">
      <Pagination 
        page={page} 
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage} 
      />
      </footer>
    </div>
  );
};

export default Page;