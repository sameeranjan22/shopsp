import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import dbConnect from "../utils/dbConnect";

const connect = () => {
    dbConnect();
  }

function Layout({children}) {
  return (
    <div className='layout'>
        {connect}
        <Head>
            <title>
                Shop | S P Solutions Point Pvt. Ltd.
            </title>

        </Head>
        <header>
            <Navbar />

        </header>
        <main className='main-container'>
            {children}

        </main>
        <footer>
            <Footer />
        </footer>

    </div>
  )
}

export default Layout
