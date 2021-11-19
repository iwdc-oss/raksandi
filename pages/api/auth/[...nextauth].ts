import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    jwt: true,
  },
  secret: process.env.SECRET,
  jwt: {
    encryption: true,
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    // Notes: Add payload to JWT token
    async jwt(token, user) {
      if (user?.email) {
        token.email = user.email
      }
      // console.log('jwt', token)
      return token
    },
    // Notes: Get data from users (google account)
    async signIn({ user, account, profile, email, credentials }) {
      // console.log(user, account, profile, email, credentials)
      return true
    },
  },
})
