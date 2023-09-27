import './FeaturedMovie.css'

export default function FeaturedMovie({item}) {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    return (
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='vertical'>
                <div className='horizontal'>
                    <div className='name'>{item.original_name}</div>
                    <div className='info'>
                        <div className='points'>{item.vote_average.toFixed(1)} Pontos</div>
                        <div className='year'>Lançamento: {firstDate.getFullYear()}</div>
                        <div className='seasons'>{item.number_of_seasons} {item.number_of_seasons > 1 ? 'Temporadas' : 'Temporada'}</div>
                    </div>
                    <div className='description'>{item.overview}</div>
                    <div className='buttons'>
                        <a href={`/watch/${item.id}`}>► Assistir</a>
                        <a href={`/list/add${item.id}`}>+ Minha Lista</a>
                    </div>
                    <div className='genres'><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}