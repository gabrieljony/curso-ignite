// essa pasta services, não teria a mesma semantica que teria no back-end.
// O services aqui tem mais o intuito de ser serviço de dados, todo lugar onde eu possa buscar dados
// buscar dados, enviar dados, banco de dados uma api externa, ou qualquer coisa relacionado vou colocar na pasta services

import axios from 'axios';
export const api = axios.create({
    baseURL: 'http://localhost:3000/v1'
})