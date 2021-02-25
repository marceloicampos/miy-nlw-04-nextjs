//import '../styles/globals.css'
// todos os estilos que se repetem em toda a aplicação ficam nesse arquivo _app.tsx

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
