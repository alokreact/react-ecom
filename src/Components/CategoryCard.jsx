import labs from '../assets/labs5.png';

const CategoryCard =()=>{
    return (
        <>
      
            <div className="mt-16 border brorder-garay-200 hover:border-gray-300 hover:scale-105 tranistion-transform rounded-lg">
                <div className="flex justify-between items-center p-6">
                    <div className="space-y-4">
                            <h3 className="font-medium text-xl">Shortest reporting Time</h3>
                            <p className="text-gray">Qualified Pathologist at each lab</p>
                    </div>
                    <img src={labs} className="w-[45px]" />
                </div>
            </div>
        </>
    )
}
export default CategoryCard;