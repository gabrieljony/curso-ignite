// instalação: npm i next-auth
// https://next-auth.js.org/getting-started/example

import NextAuth from "next-auth"
import Provider from "next-auth/providers"

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
})

// FaunaDB - HTTP
// DynamoDB - AWS

// PostegreSQL, MongoDB

// Front-end ganhando mais responsabilidade