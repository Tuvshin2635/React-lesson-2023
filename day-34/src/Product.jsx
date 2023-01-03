import React from "react";


class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="container">
            <img src="image-yellow.png"></img>
            <div className="text">
                <p>  55 </p>
                <p className="text1"> Haught or Naught</p>
                <p> High- minded or absent- minded? You decide</p>
            </div>
        </div>;
    }
}

export default Product;
