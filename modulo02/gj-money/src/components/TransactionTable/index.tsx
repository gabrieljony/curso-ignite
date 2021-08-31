import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string,
}

export function TransactionTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => {
                console.log("data", response.data.transactions)
                setTransactions(response.data.transactions)
            })
    }, [])

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