const Api_Key = '88c0c86971e06bf331ef2635f0edb21b';
const Api_Base = 'https://api.themoviedb.org/3';

/*
- Originais da Netflix
- Recomendados (trending)
- Em alta (top rated)
- Ação
- Comédia
- Terror
- Romance
- Documentários
*/

async function baseFetch(endpoint) {
    const req = await fetch(`${Api_Base}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                itens: await baseFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                itens: await baseFetch(`/trending/all/week?language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                itens: await baseFetch(`/movie/top_rated?language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                itens: await baseFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                itens: await baseFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                itens: await baseFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                itens: await baseFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                itens: await baseFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${Api_Key}`)
            }
        ]
    }
}