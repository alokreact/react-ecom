import backgroundImage from '../assets/Whitebg.png';
import blood from '../assets/blood.png';

const Brands = () => {

    return (

        <>
    <div className="container pt-20">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="font-mediom text-2xl underline">Top Brands Products</h3>
                    </div>
                    <div className="space-x-4 lg:mt-0 mt-4">
                        <button className="btn border border-green-500 text-black rounded-full
                         p-2 w-[120px] hover:scale-110 hover:bg-green-500 hover:text-white">View All</button>
                    </div>
                </div>
            </div>


            <div className="flex justify-around p-4 mt-16">
                {/* First div */}

                <div className="flex w-32 h-32 bg-cover rounded-full items-center p-6 hover:scale-105" style={{ backgroundImage: `url(${backgroundImage})` }}>

                    <img src={blood} className='w-24 h-24 object-cover' />
                </div>

                {/* Second div */}
                <div className="flex w-32 h-32 bg-cover rounded-full items-center p-6 hover:scale-105" style={{ backgroundImage: `url(${backgroundImage})` }}>

                    <img src={blood} className='w-24 h-24 object-cover' />
                </div>


                <div className="flex w-32 h-32 bg-cover rounded-full items-center p-6 hover:scale-105" style={{ backgroundImage: `url(${backgroundImage})` }}>

                    <img src={blood} className='w-24 h-24 object-cover' />
                </div>

                <div className="flex w-32 h-32 bg-cover rounded-full items-center p-6 hover:scale-105" style={{ backgroundImage: `url(${backgroundImage})` }}>

                    <img src={blood} className='w-24 h-24 object-cover' />
                </div>

                <div className="flex w-32 h-32 bg-cover rounded-full items-center p-6 hover:scale-105" style={{ backgroundImage: `url(${backgroundImage})` }}>

                    <img src={blood} className='w-24 h-24 object-cover' />
                </div>

                <div className="flex w-32 h-32 bg-cover rounded-full items-center p-6 hover:scale-105" style={{ backgroundImage: `url(${backgroundImage})` }}>

                    <img src={blood} className='w-24 h-24 object-cover' />
                </div>

            </div>
        </>
    )

}


export default Brands;