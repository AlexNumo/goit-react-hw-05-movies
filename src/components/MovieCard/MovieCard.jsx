export const MovieCard = ({item}) => {
    const releaseYear = new Date(item.release_date).getFullYear()
      return (
      <article>
        <h2>{item.title} <span>{releaseYear}</span></h2>
        {item.poster_path !== null && <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title}/>}
        <p>User score: {item.vote_average*10}%</p>
        <p>Overview: {item.overview}</p>
        <p>Genres: </p>
        <p>{item.genres.map(({id,name})=>{
          return <span key={id}>{name} </span>
        })}</p>
        <hr/>
      </article>
    )
  };
  
  