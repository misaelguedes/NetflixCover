import './MovieRow.css'

export default function MovieRow({title, itens}) {
    return (
        <div className='movierow'>
            <h2>{title}</h2>
            <div className='listarea'>
                <div className='list'>
                    {itens.results.length > 0 && itens.results.map((item, key) => (
                        <div key={key} className='item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}