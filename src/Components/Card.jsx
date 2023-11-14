const Card = ({ img }) => {
    return (
        <>
            <div className="w-full md:w-full bg-[#fab1a0] shadow-xl p-4">
                <div>
                    <img className="h-[250px] w-[100%]  oject-cover" src={img} />
                    <div className="flex flex-col gap-4 p-[20px]">
                        <div>
                            <h2>Team Mmeber Name</h2>
                        </div>
                        <div>
                            <p>Welocme to India</p>
                        </div>
                        <div>
                            <a href="#">Welocme to India</a>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )

}


export default Card;