'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import styles from './layout.module.css'
import { Inter } from "next/font/google"
import 'normalize.css/normalize.css'
import "@/styles/globals.css"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) 
{
  return  <html lang="en">
      <body className={inter.className + ' ' + styles.body}>
        <Header/>
        <main className={styles.main}>
        <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark">
        </ToastContainer>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
}
