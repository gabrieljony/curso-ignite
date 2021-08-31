import { useContext } from 'react';
import entradasImg from '../../assets/entradas.svg';
import saidasImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles';

export function Summary() {
    const data = useContext(TransactionsContext);
    console.log('data', data)

    return (
        <Container>
            <div>
                <header>
                    <p>Entragas</p>
                    <img src={entradasImg} alt="entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="saidas" />
                </header>
                <strong>-R$ 500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Entragas</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
}