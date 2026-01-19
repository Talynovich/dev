import {useEffect, useState} from "react";
import HomePage from "../src/pages/homepage/index.js";
import {useParams} from "react-router";

const Swapi = () => {
  const [film, setFilm] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.info/api/films')
        const data = await response.json()
        setFilm(data)
      } catch (error) {
        console.log(`Ошибка ёбана рот: ${error}`)
        setLoading('Загрузка.........')
      }
    }
    fetchData()
  }, [])

  const params = useParams()
  console.log(params, 'swapi')

  if (loading) return (
    <>
      <HomePage />
      <h1>Название фильмов</h1>
      {film.map(item => (
        <p>{item.title}</p>
      ))}
    </>
  )
}
export default Swapi