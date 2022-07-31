import Head from 'next/head'
import Image from 'next/image'
import Center from '../components/center/Center'
import Sidebar from '../components/sidebar/Sidebar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Musify - Your music companion</title>
        <link rel='icon' href='#' />
      </Head>
      
      <main className='flex flex-row h-screen'>
        <Sidebar className="flex-2 overflow-scroll" />
        <Center className="flex-3 overflow-scroll"/>
      </main>

      <div>
        {/* Player */}
      </div>


    </div>
  )
}
