import '../styles/global.css';

//import '../styles/globals.css';
// todos os estilos que se repetem em toda a aplicação ficam nesse arquivo _app.tsx

import { ChallengesProvider } from '../contexts/ChallengesContext';

// import { ChallengesContext } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  /* return <Component {...pageProps} /> */

  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
  /* return (
    <ChallengesContext.Provider>
      <Component {...pageProps} />
    </ChallengesContext.Provider>
); */
}

export default MyApp
