import React from 'react'
import imageMachine from './0-the-effects-machine.png'
import { IoMdClose } from 'react-icons/io'

export const Modal = ({ visible, onClose }) => {
    const handleOnClose = (e) => {
        if (e.target.id === 'modalContainer') onClose()
    }

    if (!visible) return null

    return (
        <div
            id="modalContainer"
            onClick={handleOnClose}
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-[2px] flex items-center m-auto px-6 text-gray-600 md:px-24 xl:px-6"
        >
            {/* Grid starts */}
            <div class="grid">
                <div class="rounded-sm group sm:flex space-x-6 bg-white bg-opacity-100 shadow-md">
                    {/* Left side: image */}
                    <img
                        src={imageMachine}
                        alt="art cover"
                        loading="lazy"
                        width="1000"
                        height="667"
                        class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-center rounded-tl-sm rounded-bl-sm transition duration-500"
                    />

                    {/* Right side: text */}
                    <div class="sm:w-7/12 pl-0 p-5">
                        <div class="space-y-2">
                            <div class="relative">
                                <button
                                    className="absolute right-0"
                                    onClick={onClose}
                                >
                                    <IoMdClose color="#7f2ba3" size={20} />
                                </button>

                                <div className="flex-col space-y-3 md:space-y-10 lg:space-y-36 sm:space-y-5 xs:space-y-3">
                                    <div>
                                        <h4 class="pt-5 xs:pt-6 md:pt-10 text-xl font-semibold text-[#7f2ba3] sm:pt-8">
                                            "It is remarkable how much long-term
                                            advantage people like us have gotten
                                            by trying to be consistently not
                                            stupid, instead of trying to be very
                                            intelligent."
                                        </h4>
                                        <p class="text-gray-600 pt-4 italic text-sm md:text-base">
                                            — Charlie Munger (Wesco Annual Meeting, 1989)
                                        </p>
                                    </div>
                                    <div className="">
                                        <p class="text-gray-600 lg:text-base text-sm sm:text-">
                                            The Effects Machine © 2022<br></br>
                                            Built with Tailwind and React
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}