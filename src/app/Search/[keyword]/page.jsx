import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"


const Page = async({params}) => {
    try {
      const {keyword} = params
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const SearchAnime = await response.json();
    const decodedKeyword = decodeURI(keyword);
    // console.log(search)
  return (
    <div className="mx-5 mb-8">
      <Header title={`Search Anime "${decodedKeyword}"..`}/>
      <AnimeList api={SearchAnime}/>
    </div>
  );
} catch (error) {
  console.error('Error fetching anime:', error);
}
}

export default Page