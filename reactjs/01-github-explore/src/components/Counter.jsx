import React from 'react'
import { useState } from 'react'

// Toda função do react que começar com use, Ex. useState, chamamos ela de hook ou gancho
// Imutabilidade - prever que uma variavel que não vai ter seu valor alterado, mas sim da um novo valor para aquela váriavel
//Ex.
// usuarios = ['gabriel','pedro','lucas']
// usuários.push('rafael') -> não é imutabilidade
// novoUsuarios = [..usuarios, 'rafael']
export function Counter(props) {
    // let -> let it change, que quer dizer deixe isso mudar
    // setCounter -> setar um novo valor para a variavel counter
    let [counter, setCounter] = useState(0);

    function increment() {
        counter += 1;
        setCounter(counter);
        console.log('increment', setCounter(counter))
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Incrementar</button>
        </div>
    )
}
