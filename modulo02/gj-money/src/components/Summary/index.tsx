import { useContext } from 'react';
import entradasImg from '../../assets/entradas.svg';
import saidasImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles';

export function Summary() {
    const {transactions} = useContext(TransactionsContext);
    console.log('transactionsSummary', transactions)

    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if (transaction.type === 'deposit'){
    //         return acc + transaction.amount;
    //     }

    //     return acc;
    // }, 0)

    const summary = transactions.reduce((acumulador, transaction) => {
        if (transaction.type === 'deposit'){
            acumulador.deposits += transaction.amount;
            acumulador.total += transaction.amount;
        }else{
            acumulador.withdraws += transaction.amount;
            acumulador.total -= transaction.amount;
        }

        return acumulador;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entragas</p>
                    <img src={entradasImg} alt="entradas" />
                </header>
                <strong className='typeDeposits'>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="saidas" />
                </header>
                <strong className='typeWithdraws'>-{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.withdraws)}</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Entragas</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.total)}</strong>
            </div>
        </Container>
    )
}