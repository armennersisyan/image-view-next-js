import '../styles/globals.css'
import { createGenerateId, JssProvider } from 'react-jss';

function MyApp({ Component, pageProps }) {
  return (
    <JssProvider generateId={createGenerateId({ minify: true })}>
      <Component {...pageProps} />
    </JssProvider>
  )
}

export default MyApp
