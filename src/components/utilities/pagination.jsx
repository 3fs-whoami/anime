const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            { page <= 1 ? null : 
                <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">Prev</button>
            }

            <p>{page} of {lastPage}</p>

            { page >= lastPage ? null : 
                <button onClick={handleNextPage} className="transition-all hover:text-color-accent">Next</button>
            }
        </div>
    )
}

export default Pagination

// const Pagination = ({ page, lastPage, setPage }) => {
//     const scrollTop = () => {
//         scrollTo({
//             behavior: "smooth",
//             top: 0
//         })
//     }

//     const handleNextPage = () => {
//         if(page < lastPage){
//         setPage((NextPage) => NextPage + 1)
//         scrollTop()
//         }
//         else if(page > lastPage) return
        
//     }
    
//     const handlePrevPage = () => {
//         if(page > 1){
//         setPage((NextPage) => NextPage - 1)
//         scrollTop()
//         }
//         else if(page < 1) return
        
//     }

//     return (
//         <div className="flex justify-center items-center py-4 px-4 gap-4 font-bold text-color-primary">
//             <buton onClick={handlePrevPage} className="hover:text-color-accent cursor-pointer">prev</buton>
//             <p>{ page } of {lastPage}</p>
//             <buton onClick={handleNextPage} className="hover:text-color-accent cursor-pointer">next</buton>
//         </div>
//     )
// }

// export default Pagination