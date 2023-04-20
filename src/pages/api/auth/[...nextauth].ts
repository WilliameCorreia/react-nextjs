import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID ?? '',
      clientSecret: process.env.KEYCLOAK_SECRET ?? '',
      issuer: process.env.KEYCLOAK_ISSUER,
    })
    // ...add more providers here
  ],
  secret: process.env.SECRET,
}

export default NextAuth(authOptions);