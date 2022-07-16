import prev from '../../assets/prev.svg'
import next from '../../assets/next.svg'
import usePoke from '../../hooks/usePoke'
import './style.css'

export default function Pagination() {
    const { pokemons, pagination, setpagination } = usePoke()
    const paginationNext = () => {
        if (pokemons.length < 18) return
        setpagination(pagination + 18)
    }

    const paginationPrev = () => {
        if (pagination === 0) return
        setpagination(pagination - 18)
    }

    return (
        <div className="pagination__icons">
            <img
                className={pagination === 0 ? 'hidden' : 'page-icon prev'}
                src={prev}
                alt='prev'
                onClick={() => paginationPrev()} />
            <img
                className={pokemons.length < 18 ? 'hidden' : 'page-icon next'}
                src={next}
                alt='next'
                onClick={() => paginationNext()} />
        </div>
    )

}
