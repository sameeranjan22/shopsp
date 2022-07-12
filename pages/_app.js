import React from 'react';
import { Toaster} from 'react-hot-toast';
import { Layout } from '../components'
import '../styles/globals.css'
import { StateContext} from '../context/StateContext';
import Router from 'next/router';
import NProgress from 'nprogress';
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
