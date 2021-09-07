// instalação: npm i next-auth
// https://next-auth.js.org/getting-started/example

import NextAuth from "next-auth";
import Provider from "next-auth/providers";

import { query as q } from 'faunadb';
import { fauna } from '../../../services/fauna';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Provider.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRETS,
      scope: 'read:user'
    }),
    // ...add more providers here
  ],
  jwt: {
    signingKey: process.env.SIGNING_KEY
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('user', user)

      // Inserção no bando de dados NoSQL FaunaDB
      // https://docs.fauna.com/fauna/current/api/fql/functions/create?lang=shell
      // try{
      //   await fauna.query(
      //     q.Create(
      //       q.Collection('users'),
      //       { data: {email} }
      //     )
      //   )
      //   return true 
      // } catch {
      //   return false
      // }
      return true
      
    },
  }
})

// FaunaDB - HTTP
// DynamoDB - AWS

// PostegreSQL, MongoDB

// Front-end ganhando mais responsabilidade