import { RepositoryList } from './components/RepositoryList';
import { Counter } from './components/Counter';
import './styles/global.scss';

export function App() {
    // throw new Error('Eita Giovanna, o forninho caiu.')

    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    ) 
}