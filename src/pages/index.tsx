import { Tab } from '@headlessui/react'
import Head from 'next/head'
import Link from 'next/link'
import Masonry from 'react-masonry-css'
import classNames from 'classnames'
import Image from 'next/image'

const tabs = [
  {key : 'all', display: 'All'},
  {key : 'conceptual', display: 'Conceptual'},
  {key : 'dance', display: 'Dance'},
  {key : 'events', display: 'Events'},
  {key : 'crystal', display: 'Crystal'},
]

export default function Home() {
  return (
    <div className="h-full bg-stone-800 overflow-auto">
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="Working progress so don't judge too hard..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <header className="fixed w-full bg-stone-800 bg-opacity-50 z-10 top-0 flex justify-between  items-center h-[90px] px-10 ">
        <div>
          <Image src={'/logo.png'} width={80} height={50} className="pt-4" alt='logo'/>
        </div>
        <Link href="#" className="rounded-xl bg-white text-stone-700 px-5 py-2 hover:bg-opacity-90">       
         Get in Touch
        </Link>

      </header>

      <main className='pt-[110px]'>
        <div className='flex  flex-col items-center h-full'> 
      <Tab.Group>
      <Tab.List className="flex justify-center gap-14">
          {tabs.map(tab => (
          <Tab key={tab.key} className="flex p-2"> 
          {({selected}) => 
          (<span className={classNames("text-lg",
          selected ? 'text-white' : 'text-stone-400')}>{tab.display}</span>)}
        </Tab>
        ))}

      </Tab.List>
      <Tab.Panels className="h-full bg-opacity-40 h-full max-w-[1500px] w-full p-2 sm:p-4 my-6">
        <Tab.Panel className='overlow-auto'>
            <Masonry breakpointCols={{default: 4, 900: 3 , 600: 2, 400: 1}} className='flex gap-3' columnClassName=''>
              <img src="/AMP_1100.jpg" alt='Isal1' className='my-2 rounded-xl'/> 
              <img src="/background.jpg" alt='Isal2' className='my-2 rounded-xl'/> 
              <img src="/AMP07467.jpg" alt='Isal3' className='my-2 rounded-xl'/> 
              <img src="/AMP07467.jpg" alt='Isal3' className='my-2 rounded-xl'/> 
              <img src="/AMP07467.jpg" alt='Isal3' className='my-2 rounded-xl'/> 
              <img src="/AMP_1100.jpg" alt='Isal1' className='my-2 rounded-xl'/> 
              <img src="/background.jpg" alt='Isal2' className='my-2 rounded-xl'/> 
              <img src="/AMP07467.jpg" alt='Isal3' className='my-2 rounded-xl'/> 
              <img src="/AMP_1100.jpg" alt='Isal1' className='my-2 rounded-xl'/> 
              <img src="/background.jpg" alt='Isal2' className='my-2 rounded-xl'/> 
              <img src="/AMP07467.jpg" alt='Isal3' className='my-2 rounded-xl'/> 
               <img src="/AMP_1100.jpg" alt='Isal1' className='my-2 rounded-xl'/> 
              <img src="/background.jpg" alt='Isal2' className='my-2 rounded-xl'/> 
              <img src="/AMP07467.jpg" alt='Isal3' className='my-2 rounded-xl'/> 
            </Masonry>
        </Tab.Panel>
        <Tab.Panel>Conceptual</Tab.Panel>
        <Tab.Panel>Dance</Tab.Panel>
        <Tab.Panel>Dance</Tab.Panel>
        <Tab.Panel>Dance</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
      </main>


      <footer className='h-[60px] flex justify-center items-center'>
        <p>
        Logo
        </p></footer>
    </div>
  )
}
