import { getProviders, signIn } from "next-auth/react";

function Login({providers}) {

    console.log("Login page")
  return (
    <div className='text-white'>
        Login
    </div>
  )
}

export default Login;

// ServerSideRendering of Providers
// We have to render all the providers on the server before this login page loads on the client browser and for that we'll follow the following method
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}