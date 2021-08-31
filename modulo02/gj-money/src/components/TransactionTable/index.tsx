import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles';

export function TransactionTable() {
    const {transactions} = useContext(TransactionsContext);
    console.log('transactions', transactions)
    
    function formatPhoneNumber(phone: string) {
        let clean = phone.replace(/[^\d]/g, '');
        let match = clean.match(/^(\d{2})(\d{4,5})(\d{4})$/);
        if (match) {
            return ['(', match[1], ') ', match[2], '-', match[3]].join('');
        }
        return null;
    }

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>
                            Título
                        </th>
                        <th>
                            Valor
                        </th>
                        <th>
                            Categoria
                        </th>
                        <th>
                            Data
                        </th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(transaction.amount)}</td>
                                <td>{transaction.category}</td>
                                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
                                <td><strong>{formatPhoneNumber("71999998888")}</strong></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}