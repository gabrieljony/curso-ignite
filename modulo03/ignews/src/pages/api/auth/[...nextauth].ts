// instalação: npm i next-auth
// https://next-auth.js.org/getting-started/example
// https://github.com/nextauthjs/next-auth-example/blob/main/pages/api/auth/%5B...nextauth%5D.js

import { query as q } from 'faunadb';
import NextAuth from "next-auth";
import Provider from "next-auth/providers";

import { client } from '../../../services/fauna';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Provider.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRETS,
      scope: "read:user"
    }),
    // ...add more providers here
  ],
  session:{
    jwt: true
  },
  jwt: {
    secret: process.env.JWT_SIGNING_PRIVATE_KEY,
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY
  },
  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    
    async signIn(user, account, profile) {
      console.log('USER....', user)
      const { email } = user;
      console.log('EMAIL...', email)
      // Inserção no bando de dados NoSQL FaunaDB
      // https://docs.fauna.com/fauna/current/api/fql/functions/create?lang=shell
      try{
        await client.query(
            q.Create(
              q.Collection('users'),
              { data: { email } }
            ),
        
          )
        return true 
      } catch(error) {
        console.log('ERROR', error)
        return false
      }
    },
    // async redirect(url, baseUrl) { 
    //   console.log('baseUrl', baseUrl)
    //   return baseUrl 
    // },
    // async session(session, user) { 
    //   console.log('session: ', session)
    //   return session 
    // },
    // async jwt(token, user, account, profile, isNewUser) { 
    //   console.log('token', token)
    //   return token 
    // }
  }
})

// FaunaDB - HTTP
// DynamoDB - AWS

// PostegreSQL, MongoDB

// Front-end ganhando mais responsabilidade