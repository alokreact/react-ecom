import SingleProduct from "../SingleProduct";

const FeatureProduct = () => {
    const product = [10, 20, 30, 40, 50, 60];


    return (
        <>
            <div className="container pt-20">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="font-mediom text-2xl">Feature Products</h3>
                    </div>
                    <div className="space-x-4 lg:mt-0 mt-4">
                        <button className="btn btn-success round-lg">Cat1</button>
                    </div>
                </div>


                <div className="grid sm:grid-cols-2 lg:grid-cols-4">

                    {
                        product.map((el) => {

                            return (

                                <SingleProduct key={el} />

                            )

                        })

                    }


                </div>
            </div>
        </>
    )

}


export default FeatureProduct;