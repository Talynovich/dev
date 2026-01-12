import {useEffect, useState} from "react";
import Header from "../pages/homepage/header/index.js";

const Swapi = () => {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fethData = async () => {
      try {
        const response = await fetch('https://swapi.info/api/films')
        const data = await response.json()
        setFilms(data)
        setLoading(false)
      } catch (err) {
        console.log(`Ошибка API: ${err}`)
      }
    }
    fethData()
  }, [])
  if (loading) return <p>Загрузка...</p>
  return (
    <>
      <Header/>
      <div className="card text-bg-secondary mb-3" style={{maxWidth: '18rem'}}>
        <div className="card-header">Фильмы StarWars</div>
        <div className="card-body">
          {films.map(item => {
            return <p key={item.episode_id}>{item.title}</p>
          })}
        </div>
      </div>
    </>
  )
}
export default Swapi


// {films.map((film) => (
//   <p key={film.episode_id}>
//     {film.title}
//   </p>
// ))}

//
// import {useEffect, useState} from "react";
//
// const Swapi = () => {
//   const [films, setFilms] = useState([]);
//   const [loading, setLoading] = useState(true);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://swapi.info/api/films');
//         const data = await response.json();
//         setFilms(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Ошибка загрузки:", error);
//         setLoading(false);
//       }
//     };
//
//     fetchData();
//   }, []);
//
//   if (loading) return <p>Загрузка...</p>;
//   return (
//     <div>
//       <h1>Фильмы Star Wars</h1>
//       <ul>
//         {films.map((film) => (
//           <li key={film.episode_id}>
//             {film.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
//
// export default Swapi;