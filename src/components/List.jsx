import { Link } from 'react-scroll'
import Effects from '../effects.json'

const List = (props) => {

    function handleClick(e) {
        // console.log(e.target.id)
        let targets = document.querySelectorAll('.opacityTarget')
        
        targets.forEach((element) => {
          element.classList.toggle('opacity0')
        })
        
        setTimeout(() => {
          props.setEffect(parseInt(e.target.id) - 1)
          targets.forEach((element) => {
            element.classList.toggle('opacity0')
          })
        },700)
        let theone = e.target.id - 1
        document.title = Effects[theone].title

    }

    return (
        <div name="list" className="w-full h-[screen] md:pt-0 pt-10 pb-3">
            <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-right w-full h-full">
                {/* Title stars here */}
                <div className="pb-6 text-center">
                    <h2 className="text-[#7f2ba3] text-3xl font-bold">
                        A list of the 100 most common psychological effects
                    </h2>
                    <p className="text-sm text-gray-500">Click on any item to see more information about it</p>
                </div>

                {/* List starts */}
                <div className="flex flex-wrap sm:flex-nowrap justify-right sm:justify-center px-6">
                    
                    {/* Column 1 */}
                    <div className='sm:order-none order-1'>
                        <ul className="text-xs px-2">
                            {Effects.slice(0, 25).map((element) => {
                                return (
                                    <Link
                                        to="top"
                                        smooth
                                        duration={600}
                                        className="cursor-pointer"
                                    >
                                        <li
                                            className="py-1 hover:scale-105 hover:text-[#7f2ba3] duration-150"
                                            onClick={(e) => {
                                                handleClick(e)
                                            }}
                                            id={element.id}
                                        >
                                            {element.id}. {element.title}
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className='sm:order-none order-3'>
                        <ul className="text-xs px-2">
                            {Effects.slice(25, 50).map((element) => {
                                return (
                                    <Link
                                        to="top"
                                        smooth
                                        duration={600}
                                        className="cursor-pointer"
                                    >
                                        <li
                                            className="py-1 hover:scale-105 hover:text-[#7f2ba3] duration-150"
                                            onClick={(e) => {
                                                handleClick(e)
                                            }}
                                            id={element.id}
                                        >
                                            {element.id}. {element.title}
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className='sm:order-none order-2'>
                        <ul className="text-xs px-2">
                            {Effects.slice(50, 75).map((element) => {
                                return (
                                    <Link
                                        to="top"
                                        smooth
                                        duration={600}
                                        className="cursor-pointer"
                                    >
                                        <li
                                            className="py-1 hover:scale-105 hover:text-[#7f2ba3] duration-150"
                                            onClick={(e) => {
                                                handleClick(e)
                                            }}
                                            id={element.id}
                                        >
                                            {element.id}. {element.title}
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className='sm:order-none order-4'>
                        <ul className="text-xs px-2">
                            {Effects.slice(75, 100).map((element) => {
                                return (
                                    <Link
                                        to="top"
                                        smooth
                                        duration={600}
                                        className="cursor-pointer"
                                    >
                                        <li
                                            className="py-1 hover:scale-105 hover:text-[#7f2ba3] duration-150"
                                            onClick={(e) => {
                                                handleClick(e)
                                            }}
                                            id={element.id}
                                        >
                                            {element.id}. {element.title}
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
