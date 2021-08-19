import React from 'react'

export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository}</strong>
            <p>forms in reactjs</p>

            <a href="http://">
                Acessar repositório
                </a>
        </li>
    )
}
