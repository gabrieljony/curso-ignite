import React from 'react'
import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss'

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository="unform2"/>
                <RepositoryItem repository="unform3"/>
                <RepositoryItem repository="unform4"/>
                <RepositoryItem repository="unform5"/>
            </ul>
        </section>
    )
}
