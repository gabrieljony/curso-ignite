import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          amount: 400,
          type: "deposit",
          category: "Dev",
          createdAt: new Date('2021-02-12')
        },
        {
          id: 2,
          title: "Salário",
          amount: 500,
          type: "deposit",
          category: "salario",
          createdAt: new Date('2021-02-15')
        },
        {
          id: 3,
          title: "Almoço",
          amount: 200,
          type: "withdraw",
          category: "Food",
          createdAt: new Date('2021-02-16')
        },
      ]
    })
  },

  routes(){
    this.namespace = 'v1';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
