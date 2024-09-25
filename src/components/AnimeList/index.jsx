import Image from "next/image"
import Link from "next/link"
const Page = ({ api }) => {
    return (
        <div  className="grid md:grid-cols-4 sm:grid-cols-3 gap-4 grid-cols-2   ">
        {api.data?.map((/** @type {{ mal_id: import("react").Key; images: { webp: { image_url: string | import("next/dist/shared/lib/get-img-props").StaticImport; }; }; title: string | number | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal; }} */ anime) => {
            // console.log(anime)
            return (
                <div key={anime.mal_id} className="shadow-lg shadow-color-primary">
                    <Link href={`/${anime.mal_id}`} className="hover:text-color-accent text-color-primary cursor-pointer transition-all">
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