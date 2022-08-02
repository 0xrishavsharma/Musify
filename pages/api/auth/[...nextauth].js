import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi from "../../../lib/spotify-helper.js"
import LOGIN_URL from "../../../lib/spotify-helper.js";


const refreshAccessToken = async (token) => {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);
    
    const { body: refreshedToken } = await spotifyApi.refreshAccessToken(); // We are renaming the body that comes back to "refreshedToken"
    console.log("REFRESHED TOKEN IS", refreshedToken);

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000, // Equals to 1 hour as 3600 returns from spotify API
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    }
    
  }catch (error) {
    console.log(error)

    return {
      ...token,
      error: RefreshAccessTokenError,
    }
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL, //This is the url at which we will send the request for the user authorization for certain features 
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  // Now, we need to tap into the authentication part where we request more tokens when Spotify's API respond back like Access token, Refresh token. And when the
  // Access token expires it uses the Refresh token to generate a new Access token.
  // We can do all this with 2 functions
  // 1. JWT
  // 2. Session
  callbacks: {
    async jwt({ token, account, user }) {
      
      // initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000, //we are handling expiry times in Milliseconds hence * 1000
        }
      }

      // Return previous access token if it hasn't expired
      if (Date.now() < token.accessTokenExpires){
        console.log("EXISTING ACCESS TOKEN IS VALID");
        return token;
      }
      
      // If the access token is expired we'll generate a new token using the Refresh Token
      console.log("EXISTING ACCESS TOKEN EXPIRED, REFRESHING...");
      return await refreshAccessToken(token);  //Creating a special function named "refreshAccessToken"
    },

    async session({ session, token}) {
      session.user.accessToken = token.accessToken; //This is a http token so the client's browser can't read this token
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    }
  },
})