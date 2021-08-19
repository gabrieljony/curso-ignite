import React, { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss'

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

// Repositorio do GitHub https://api.github.com/users/gabrieljony/repos
export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

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
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
                
            </ul>
        </section>
    )
}
