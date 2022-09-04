import React, {useState} from 'react'
import Hero from './components/Hero'
import List from './components/List'
import {Modal} from './components/Modal'
import Navbar from './components/Navbar'
import Effects from './effects.json'



function App() {

    const [effect, setEffect ] = useState(Math.floor(Math.random() * Effects.length + 1));
    // console.log(Effects.length +1);
    const [showModal, setShowModal] = useState(false)

    const handleOnClose = () => setShowModal(false)

    return (
        <div>
            <Navbar showModal={showModal} setShowModal={setShowModal} />
            <Hero effect ={effect} setEffect={setEffect} />
            <List effect={effect} setEffect={setEffect}/>
            <Modal onClose={handleOnClose} visible={showModal}/>
        </div>
    )
}

export default App
