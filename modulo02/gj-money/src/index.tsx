import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes(){
    this.namespace = 'v1';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: "transaction 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createdAt: new Date()
        },
        {
          id: 2,
          title: "transaction 2",
          amount: 500,
          type: "deposit",
          category: "Food",
          createdAt: new Date()
        },
        {
          id: 3,
          title: "transaction 3",
          amount: 200,
          type: "withdraw",
          category: "Food",
          createdAt: new Date()
        },
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
