import Banner from '../assets/Banner.png'

const Sidebar = ()=>{
    const tags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"]; // Sample tags
   

    return(
        <div className="w-full p-4 bg-gray-100">
        {/* Image Section */}
        <div className="mb-4 border-b-2 pb-4">
          <img
            src={Banner}
            alt="Sample"
            className="w-full h-full object-cover rounded"
          />
        </div>
  
        {/* Tags Section */}
        <div className="mb-4 border-b-2 pb-4">
          <h3 className="text-lg font-semibold mb-2">Tags</h3>
          <div className="flex flex-wrap mb-2">
            <div className="bg-white-500  border text-black px-2 py-1 rounded mr-2 mb-2">
              Heart
            </div>
            <div className="bg-white-500 border text-black px-2 py-1 rounded mr-2 mb-2">
              Liver
            </div>
            <div className="bg-white-500 border text-black px-2 py-1 rounded mr-2 mb-2">
              Kidney
            </div>
  
            <div className="bg-white-500 border text-black px-2 py-1 rounded mr-2 mb-2">
              Kidney
            </div>
  
            <div className="bg-white-500 border text-black px-2 py-1 rounded mr-2 mb-2">
              Kidney
            </div>
            <div className="bg-white-500 border text-black px-2 py-1 rounded mr-2 mb-2">
              Kidney
            </div>
            <div className="bg-white-500 border text-black px-2 py-1 rounded mr-2 mb-2">
              Kidney
            </div>
  
            <div className="bg-white-500 border text-black px-2 py-1 rounded mr-2 mb-2">
              Kidney
            </div>
            <div className="bg-white-500 border text-black px-2 py-1 rounded mr-2 mb-2">
              Kidney
            </div>
            
            {/* Add more tags here */}
          </div>
        </div>
  
        {/* Checkboxes Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Options</h3>
          <div className="mb-2">
            <label className="flex items-center mb-1">
              <input type="checkbox" className="form-checkbox mr-2" />
              Checkbox 1
            </label>
            <label className="flex items-center mb-1">
              <input type="checkbox" className="form-checkbox mr-2" />
              Checkbox 2
            </label>
            {/* Add more checkboxes here */}
          </div>
        </div>
      </div>
  
    )
}

export default Sidebar;