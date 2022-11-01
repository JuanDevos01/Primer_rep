import React, { useState } from "react"
//useState
export const FirstPage = () => {
    const [valor, setValor] = useState(10) //sirve para disparar estados
    const incrementar = () => {
    setValor(valor+1)
    }
    const decrementar = () => {
    setValor(valor-1)
    }

    return (
        <div>
        <h1>Hola</h1>
        <h1>{valor}</h1>
        <button onClick={incrementar}>+1</button>
        <button onClick={decrementar}>-1</button>
        
        </div>
    )
}