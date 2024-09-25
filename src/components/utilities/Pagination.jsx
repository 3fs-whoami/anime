const Pagination = ({ page, lastPage, setPage }) => {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        if(page < lastPage){
        setPage((NextPage) => NextPage + 1)
        scrollTop()
        }
        else if(page > lastPage) return
        
    }
    
    const handlePrevPage = (page) => {
        if(page > 1){
        setPage((NextPage) => NextPage - 1)
        scrollTop()
        }
        else if(page < 1) return
        
    }

    return (
        <div className="flex justify-center items-center py-4 px-4 gap-4 font-bold text-color-primary">
            <buton onClick={handleNextPage} className="hover:text-color-accent cursor-pointer">next</buton>
            <p>{ page } of {lastPage}</p>
            <buton onClick={handlePrevPage} className="hover:text-color-accent cursor-pointer">prev</buton>
        </div>
    )
}

export default Pagination