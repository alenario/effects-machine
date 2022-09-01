import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

import $1ambiguity from '../images/1-ambiguity.png'

const Hero = () => {
    return (
        <div name="home" className="h-screen w-full">
          {/* h-[90vh] */}
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-2xl font-bold">
                        <span className="md:text-4xl text-[#7f2ba3]">#01</span>{' '}
                        The Ambiguity Effect
                    </h2>
                    <p className="text-gray-500 py-4 max-w-xl">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Libero aut amet fugit quam, nostrum optio
                        voluptates omnis facilis sequi fuga recusandae earum
                        iste dolorem sapiente inventore consectetur atque autem
                        repudiandae. Ea corporis eveniet omnis et nulla
                        laudantium vitae, consequatur ut explicabo, obcaecati
                        pariatur nisi, accusamus necessitatibus dicta similique
                        harum porro?
                    </p>
                    <div>
                        <button className="group text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-tr from-[#7f2ba3] to-[#bd4dec] cursor-pointer">
                            View more effects
                            <span className="pl-2 group-hover:rotate-90 duration-150">
                                <FaAngleRight size={20}/>
                            </span>
                        </button>
                    </div>
                </div>

                <div className="">
                    <img
                        className="rounded-md mx-auto w-2/3 md:w-full sm:scale-75"
                        src={$1ambiguity}
                        alt="Ambiguity effect"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
