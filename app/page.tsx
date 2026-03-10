/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="bg-white">
      <header className="border-b border-gray-200 ">
        <div className="flex flex-row justify-between items-center max-w-7xl mx-auto p-4 ">
          <Link href={'/'} className="text-xl font-bold hover:opacity-80">
            <p>Diego Baca</p>
          </Link>
          <nav className="hidden md:flex flex-1 justify-center items-center">
            <div className="bg-gray-100 rounded-full px-1.5 py-1.5 flex items-center gap-2">
              <div className="flex items-center justify-center py-1 w-28 rounded-full gap-1.5 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#4b5563"
                  viewBox="0 0 256 256"
                >
                  <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                </svg>
                <span className="">About</span>
              </div>
              <div className="flex items-center justify-center py-1 w-28 rounded-full gap-1.5 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="#4b5563"
                  viewBox="0 0 256 256"
                >
                  <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>
                </svg>
                <p className="">Projects</p>
              </div>
              <div className="flex items-center justify-center py-1 w-28 rounded-full gap-1.5 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="#4b5563"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                </svg>
                <span className="">Contact</span>
              </div>
            </div>
          </nav>
          <div className="hover:opacity-70">
            <Link href={'https://github.com/diegofbacag'}>
              <FaGithub size={20} />
            </Link>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center">
        {/* About */}
        <section className="items-center min-h-[80vh] flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-20">
          <h1 className="text-6xl sm:text-7xl font-bold mb-4">{`Hi, I'm Diego`}</h1>
          <h2 className="text-2xl text-gray-700 mb-8">
            Full Stack Web Developer | Product Engineer
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            I help non-technical founders turn product ideas into working MVPs
            so they can launch faster, validate their idea, and attract early
            users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>
              </svg>
              View Projects
            </button>
          </div>
        </section>
        {/* PONER HOME, PROJECTS, ABOUT ME Y ULTIMO CONACT MEProjects */}
        <section className="w-full flex justify-center">
          <div className="max-w-5xl w-full">
            <h3 className="mb-6 text-xl font-semibold">
              Flou – Personal Finance App
            </h3>

            <div className="relative w-full aspect-[16/10] rounded-2xl border border-gray-200 overflow-hidden">
              {/* <Image
                src="/img/flou-hero.png"
                alt="Flou app"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              /> */}
              <iframe
                src="https://flouapp.vercel.app"
                className="w-full h-[700px] rounded-2xl border border-gray-200"
              ></iframe>
            </div>
          </div>
        </section>
        {/* Contact */}
        <section></section>
      </main>
      <footer className="w-full max-w-7xl mx-auto px-4 py-8 text-center text-sm text-gray-500 font-outfit">
        <p>© 2026 Diego Baca. All rights reserved.</p>
      </footer>
    </div>
  )
}
