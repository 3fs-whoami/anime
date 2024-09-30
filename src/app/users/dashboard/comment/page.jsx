import CommenBox from "@/components/AnimeList/CommentBox"
import Header from "@/components/Dashboard/Header"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Link from "next/link"

const Page = async () => {
    const user = authUserSession()

    const comments = await prisma.comment.findMany({where: {user_email: user.user_email}})
    return(
        <section className="mt-6 px-4 py-8 grid grid-cols-1 gap-4">
            <Header title={"My Comment"}/>
            {comments.map((comment) => {
                return (
                    <Link
                        href={`/anime/${comment.anime_mal_id}`} 
                        key={comment.id} className="bg-color-primary text-color-dark p-4">
                        <p className="text-sm">{comment.anime_title}</p>
                        <p className="italic">{comment.comment}</p>
                    </Link>
                )
            })}
            {/* <CommenBox/> */}

        </section>
    )
}
export default Page