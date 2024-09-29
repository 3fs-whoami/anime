import Image from "next/image"
import Link from "next/link"
const Page = ({ api }) => {
    return (
        <div  className="grid gap-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
        {api.data?.map((anime, index) => {
            // console.log(anime)
            return (
                <div key={`${index}`} className="shadow-lg shadow-color-primary">
                    <Link href={`/anime/${anime.mal_id}`} className="hover:text-color-accent text-color-primary cursor-pointer transition-all">
                        <Image 
                        src={anime.images.webp.image_url}
                        alt="..."
                        width={350} 
                        height={350}
                        className="w-full max-h-64 object-cover"
                    />
                        <h2 className="font-bold sm:text-xl text-md p-4">{anime.title}</h2>
                    </Link>
                </div>
                    )
        })}
        </div>
    )}

export default Page