import FilmCard from "./FilmCard/FilmCard";

interface IFilm {
    title: string;
    description: string;
    mark?: number;
}

interface IFilmsProps {
    films: IFilm[];
}

export default function Films({films} : IFilmsProps) {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem"}}>
        {films.map((film) => <FilmCard count={film.mark} title={film.title} description={film.description}></FilmCard>)}
    </div>
  )
}
