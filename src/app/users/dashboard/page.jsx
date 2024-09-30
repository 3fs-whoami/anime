import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image";
import Link from "next/link";

const Page = async() => {
    const user = await authUserSession();
    // console.log(user)

    return(
        <div className="mt-6 px-4 py-8 text-color-primary flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold">DASHBOARD</h3>
            <h5>Welcome {user.name}</h5>
            <Image src={user.image} alt="..." width={250} height={250}></Image>

            <div className="flex gap-4 py-8 flex-wrap">
                <div className="py-8">
                    <Link href={"dashboard/collection"}
                     className="bg-color-accent text-color-dark font-bold px-4 py-2 text-xl"
                    >My Collection</Link>    
                </div>
                <div className="py-8">
                    <Link href={"dashboard/comment"}
                     className="bg-color-accent text-color-dark font-bold px-4 py-2 text-xl"
                    >My Comment</Link>    
                </div>
            </div>
        </div>
    )
}
export default Page