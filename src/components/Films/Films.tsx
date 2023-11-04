import FilmCard from "./FilmCard/FilmCard";

interface IFilm {
    id: number;
    title: string;
    description: string;
    mark?: number;
}

interface IFilmsProps {
    films: IFilm[];
}

export default function Films({films} : IFilmsProps) {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem", marginBottom: "1rem"}}>
        {films.map((film) => <FilmCard key={film.id} count={film.mark} title={film.title} description={film.description}></FilmCard>)}
    </div>
  )
}
