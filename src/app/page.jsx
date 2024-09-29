import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce, getAnimeId } from "@/libs/api-libs"

const Page = async() => {
    const topAnime = await getAnimeId("top/anime", "limit=8")
    let recomendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
    const test = reproduce(recomendedAnime, 8)
    // console.log(test)

    return (
    <>
      <section className="mx-5 mb-10">      
        <Header title="Top Anime" linkHref="/populer" linkTitle="Lihat semua"/>
        <AnimeList api={topAnime}/>
      </section>
      <section className="mx-5 mb-10"> 
        <Header title="Rekomendasi" />
        <div className="mb-10 ">
        <AnimeList api={test}/>
        </div>     
      </section>
    </>
  );
// } catch (error) {
//   console.error('Error fetching anime:', error);
// }
}
export default Page