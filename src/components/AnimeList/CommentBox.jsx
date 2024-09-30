import prisma from "@/libs/prisma";
import React from "react";

const CommenBox = async({ anime_mal_id }) => {
    const comment = await prisma.comment.findMany({where: { anime_mal_id }})
    // console.log(comment)

    return (
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 mb-4">
            {comment.map((comment) => {
                return (
                    <div key={comment.id} className="text-color-dark bg-color-primary p-4">
                        <p>{comment.username}</p>
                        <p>{comment.comment}</p>
                    </div>
                )
            })}
            <div></div>
        </div>
    )
}

export default CommenBox