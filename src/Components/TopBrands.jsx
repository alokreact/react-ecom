
import bg from '../assets/Divbg.png';
import mobile from '../assets/mobile.png';
import img1 from '../assets/feature-brand.png';
import img2 from '../assets/brand-2.png';

const TopBrands = () => {
    return (
        <>
            <div className="flex justify-around p-4">
                {/* First div */}
                <div className="relative bg-contain bg-center w-1/3 bg-white text-white p-4 m-2 rounded  with-image top-brands">

                    <div className='flex flex-row justify-between inner-brand align-items'>
                        <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg">
                            My Button
                        </button>
                        <img src={img1} className='w-[375px]  object-cover' />
                    </div>

                </div>

                {/* Second div */}
                <div className="relative bg-contain bg-center w-1/3 bg-white text-white p-4 m-2 rounded  with-image top-brands">


                    <div className='flex flex-row justify-between inner-brand align-items'>
                        <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg">
                            My Button
                        </button>

                        <img src={img2} className='w-[375px]  object-cover' />


                    </div>
                    <div className='flex flex-col justify-between align-items'>
                        <h3 className='font-medium text-base text-black'>Take  a step forward with CALL LABS</h3>
                    </div>


                </div>



                {/* Third div */}
                <div className="relative bg-contain bg-center w-1/3 bg-white text-white p-4 m-2 rounded  with-image top-brands">


                    <div className='flex flex-row justify-between inner-brand align-items'>
                        <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg">
                            My Button
                        </button>



                        <img src={mobile} className='w-[150px]  object-cover' />
                    </div>


                    <h3>Upto 80% Off</h3>

                </div>
            </div>
        </>
    )
}

export default TopBrands;