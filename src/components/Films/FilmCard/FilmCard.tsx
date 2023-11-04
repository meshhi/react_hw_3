import Stars from "./Stars/Stars.tsx";

interface FilmCardsProps {
    count?: number;
    title: string;
    description: string;
}

export default function FilmCard({title, description, count} : FilmCardsProps) {
  return (
    <div className="filmcard" style={{display: 'flex', width: "fit-content", boxShadow: "10px 10px 5px -6px rgba(0,0,0,0.75)", padding: "1rem", borderRadius: "5px", border: "1px solid black", backgroundColor: "#fff" }}>
        <img className="filmcard-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9TaLT57UlWPJ4wu3SpNLMI5oSkBzU_qUkaB7y0laPoOvmc8Z3xGFWTuvuVS0fz2KvL2Y&usqp=CAU" alt="" />
        <div className="filmcard-description">
            <h2 className="filmcard-title">{title}</h2>
            <Stars count={count}></Stars>
            <span>{description}</span>
        </div>

    </div>
  )
}
