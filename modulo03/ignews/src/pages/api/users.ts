import { NextApiRequest, NextApiResponse } from 'next'

//API rotes do next - http://localhost:3000/api/users
//Executada com o conceito de Serverless, só sobe e desce de acordo que é chamado a requisição
export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Diego'},
        {id: 2, name: 'Ana'},
        {id: 3, name: 'Rafael'},
        {id: 4, name: 'Lucas'},
    ]

    return response.json(users)
}

// metodos de autenticação
// JWT (Storage)
// Next Auth (Social)
// Cognito, Auth0

// https://next-auth.js.org/providers/github
