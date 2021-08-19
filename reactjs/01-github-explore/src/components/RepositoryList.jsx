import React, { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss'

// Repositorio do GitHub https://api.github.com/users/gabrieljony/repos

const repository = {
    name: 'unform',
    description: 'teste',
    link: 'teste'
}
export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    // quando estiver com a lista vazia no segundo parametro no useEffect que é a dependencia,
    // quer dizer que vai ser executado uma única vez assim que o component for criado
    // ATENÇÃO: não deixar de usar o 2 parametro, pois fica em looping
    useEffect(() => {
        fetch('https://api.github.com/users/gabrieljony/repos')
        .then(response => response.json())
        .then(data => {
            console.log('data', data)
            setRepositories(data)
        })

    }, []);

    console.log('repositories', repositories)

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository="unform2"/>
            </ul>
        </section>
    )
}
