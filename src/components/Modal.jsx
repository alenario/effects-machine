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
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-[2px] flex items-center m-auto px-6 text-gray-600 md:px-12 xl:px-6"
        >
            {/* Flex starts */}
            

            <div class="grid gap-6">
        <div class="p-1 rounded-md group sm:flex space-x-6 bg-white bg-opacity-100 shadow-xl">
          <img src={imageMachine} alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500"/>
          <div class="sm:w-7/12 pl-0 p-5">
            <div class="space-y-2">
              <div class="space-y-4">
                <h4 class="text-2xl font-semibold text-cyan-900">Provident de illo eveniet commodi fuga fugiat laboriosam expedita.</h4>
                <p class="text-gray-600">Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
              </div>
              <a href="www.tailus.io" class="block w-max text-cyan-600">Read more</a>
            </div>
          </div>
        </div>
      </div>
            
            
            
        </div>
    )
}

{/* 
<div className="bg-white p-2 rounded-md flex flex-row justify-center h-[50vh]">

                <div>
                    <img src={imageMachine} className="h-[80vh]" alt="/" />
                </div>


                <div>
                    <p>My modal</p>
                    <p>Hello!</p>
                    <button onClick={onClose}>X</button>
                </div>
            </div>

*/}