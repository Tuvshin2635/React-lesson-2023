import { useState } from 'react';
import products from '../Data/Seed'


export default function Product(props) {

    const [votes, setVotes] = useState(props.votes)


    function handleUpVote (props) {
        setVotes(votes+1)
        // console.log(props.id);
        // const foundProduct = products.filter(product => {
        //     if(product.id == props.id) {
        //         product.votes = product.votes + 1;
        //     }
        //     return product
        // })
        // console.log(foundProduct);
        return handleUpVote;
        
    }}


// function handProdcutUpVote(productId) {
//     console.log(productId + "was upvored");

//     const foundProduct = pr
// }~