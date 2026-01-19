import style from './CountBtn.module.css'
import {useState} from "react";
import HomePage from "../src/pages/homepage/index.js";
import {useParams} from "react-router";

const CountBtn = () => {
  const params = useParams()
  console.log(params)
    const [count, setCount] = useState(0)
    const onClick = () => {
        setCount(count + 1)
    }
const reset = () => {
        setCount(0)
}

    return (
        <>
          <HomePage />
            <div className={style.count}>{count}</div>
            <botton className={style.btn} onClick={onClick}>Прибавить</botton>
            <botton className={style.btn} onClick={reset}>Сбросить</botton>
        </>
    )
}
export default CountBtn