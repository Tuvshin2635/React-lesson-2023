function ProductFunc(promps) {
    return (

        <div className="container">
            {/* <img src="image-rose.png"></img> */}
            {/* <div className="text">
                <p>  55 </p>
                <p className="text1"> Ha2doxi t</p>
                <p> High- minded or absent- minded? You decide</p>
            </div> */}

            {/* <img src="image-aqua.png"></img> */}
            
            <p> {promps.title}</p>
            <p> {promps.id}</p>
            <img src={promps.submitterAvatarUrl} alt="" />
            <img src={promps.productImageUrl} alt="" />
            <p> {promps.description}</p>

            {/* <div className="text">
               
                <p> <i class="fa-sharp fa-solid fa-eject"></i>  44 </p>
                <p className="text1"> yellow Pail</p>
                <p> On - demand sand castle construction expertise</p>
                <p className="text3"> Submitted by: <i class="fa-brands fa-twitter"></i> </p>
            </div> */}

            {/* <img src="image-rose.png"></img>
            <div className="text">
                <p> <i class="fa-sharp fa-solid fa-eject"></i>  44 </p>
                <p className="text1"> yellow Pail</p>
                <p> On - demand sand castle construction expertise</p>
                <p className="text3"> Submitted by: <i class="fa-brands fa-twitter"></i> </p>

            </div> */}

        </div>

    )
}
export default ProductFunc;
