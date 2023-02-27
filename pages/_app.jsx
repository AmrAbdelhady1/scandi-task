import { StateContext } from '@/context/StateContext'
import { Toaster } from 'react-hot-toast';
import { Main } from '@/layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Main>
        <Toaster />
        <Component {...pageProps} />
      </Main>
    </StateContext>
  )
}
