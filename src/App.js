import React, {useState} from 'react'
import Hero from './components/Hero'
import List from './components/List'
import Navbar from './components/Navbar'
import Effects from './effects.json'



function App() {

    const [effect, setEffect ] = useState(Math.floor(Math.random() * Effects.length + 1));
    // console.log(Effects.length +1);

    return (
        <div>
            <Navbar />
            <Hero effect ={effect} setEffect={setEffect} />
            <List effect={effect} setEffect={setEffect}/>
        </div>
    )
}

export default App
