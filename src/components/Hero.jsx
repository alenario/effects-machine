import { FaAngleRight, FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-scroll'
import Effects from '../effects.json'

const Hero = (props) => {  
  
  return (
        <div name="home" className="h-[95vh] w-full relative">
            <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col-reverse items-center justify-center h-full px-6 md:flex-row pb-6">
                <div className="flex flex-col justify-center h-full transitionB opacityTarget">

                    {/* The h-full here is what is making the responsive version so fluffed in height */}
                    <h2 className="text-2xl font-bold">
                        <span className="md:text-4xl text-[#7f2ba3]">
                            {Effects[props.effect].span}
                        </span>{' '}
                        {Effects[props.effect].title}
                    </h2>
                    <div className="text-gray-500 py-4 max-w-xl">
                        <p>
                            {Effects[props.effect].paragraph1}
                            <br></br> <br></br>
                            {Effects[props.effect].paragraph2}
                        </p>
                    </div>
                    <div>
                        <Link
                            to="list"
                            smooth
                            duration={500}
                            className="drop-shadow-lg	group text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-tr from-[#7f2ba3] to-[#bd4dec] cursor-pointer"
                        >
                            View more effects
                            <span className="pl-2 group-hover:rotate-90 duration-150">
                                <FaAngleRight size={20} />
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="md:pb-12">
                    <div className="relative transitionB opacityTarget">
                        <img
                            className="drop-shadow-md	rounded-md mx-auto w-3/5 md:w-full sm:scale-75"
                            src={Effects[props.effect].img}
                            alt="/"
                        />
                        <p className="absolute inset-x-0 lg:bottom-8 sm:block hidden md:bottom-5 sm:bottom-5 italic text-center text-sm text-gray-500">
                            <b>Prompt:</b> {Effects[props.effect].caption}
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <Link
                    to="list"
                    smooth
                    duration={500}
                    className="cursor-pointer absolute md:block hidden right-1/2 translate-x-1/2 translate-y-1/2 bottom-20 hover:scale-110 duration-200"
                >
                    <FaChevronDown
                        className="animate-bounce"
                        color="#7f2ba3"
                        size={25}
                    />
                </Link>
            </div>
        </div>
    )
}

export default Hero
