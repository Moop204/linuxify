'use client'

import { useState } from 'react';

export default function Home() {

  const [translatedCommand, setTranslatedCommand] = useState('');

  const updateDisplayedCommand = (element: any) => {
    console.log(typeof(element))
    setTranslatedCommand(element.target.value)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-md lg:flex">
        <h1>Linuxify</h1>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h3>When you can't be bothered to deal with Windows</h3>
      </div>

        <form onChange={updateDisplayedCommand} >
          <input name="query" />
        </form>
        <p>
          [[ {translatedCommand} ]]       
        </p>
    </main>
  )
}
