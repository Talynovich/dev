import {useState} from "react";
import Header from "../homepage/header/index.js";


const Coount = () => {
  const [count, setCount] = useState(0)
  const onClick = () => setCount(count + 1)
  const reset = () => setCount(0)

  return (
    <>
      <Header />
      <div className="container d-flex flex-column align-items-center mt-5">
        <div className="card text-center p-4 shadow-sm" style={{ width: '18rem' }}>
          <h2 className="card-title mb-4">Счётчик</h2>
          <div className="display-4 mb-4 p-3 bg-light border rounded">
            {count}
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary btn-lg" onClick={onClick}>
              Добавить
            </button>
            <button className="btn btn-outline-danger" onClick={reset}>
              Сбросить
            </button>
          </div>
        </div>
      </div>
    </>
  )

}
export default Coount