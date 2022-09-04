import React from 'react'

export const Modal = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === 'modalContainer') onClose();
  }  
  
  if (!visible) return null

    return (
        // backdrop-blur-sm, justify-center:Horizontal, items-center:Vertical
        <div id='modalContainer' onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-[2px] flex justify-center items-center">
            <div className="bg-white p-2 rounded">
                <p>My modal</p>
                <p>Hello!</p>
                <button onClick={onClose}>X</button>
            </div>
        </div>
    )
}
