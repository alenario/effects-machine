import React from 'react'
import imageMachine from './0-the-effects-machine.png'

export const Modal = ({ visible, onClose }) => {
    const handleOnClose = (e) => {
        if (e.target.id === 'modalContainer') onClose()
    }

    if (!visible) return null

    return (

        <div
            id="modalContainer"
            onClick={handleOnClose}
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-[2px] flex justify-center items-center"
        >
            {/* Flex starts */}
            <div className="bg-white p-2 rounded-md flex flex-row justify-center h-[50vh]">
                {/* Column 1-L: Image  */}
                <div>
                    <img src={imageMachine} className="h-[80vh]" alt="/" />
                </div>

                {/* Column 2-R: Text  */}
                <div>
                    <p>My modal</p>
                    <p>Hello!</p>
                    <button onClick={onClose}>X</button>
                </div>
            </div>
        </div>
    )
}
