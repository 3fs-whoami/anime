import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/app/libs/api-libs"

const Page = async() => {
  // try {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
    // if (!response.ok) {
    //   throw new Error('Failed to fetch');
    // }
    const topAnime = await getAnimeResponse("top/anime", "limit=8")
  return (
    <div className="mx-5 mb-8">      
      <Header title="Top Anime" linkHref="/populer" linkTitle="Lihat semua"/>
      <AnimeList api={topAnime}/>
    </div>
  );
// } catch (error) {
//   console.error('Error fetching anime:', error);
// }
}
export default Page