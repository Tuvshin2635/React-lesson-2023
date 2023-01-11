import logo from './logo.svg';
import './App.css';

import Alert from './Alert';
import ProductFunc from './ProductFunc';

import products from './Seed'

function App() {


  function handleProductUpVote(productId) {
    console.log('upvoted', productId)
    const foundProduct=products.filter(product=>{
      if(product.id=productId){
        return product
      }
    })
    console.log(foundProduct[0].votes)
    foundProduct[0].votes=foundProduct[0].votes+1;
    console.log(foundProduct[0].votes)

   const newProducts= productList.map(product=>{
      if(product.id==productId){
        return Object.assign({},product,{
          votes:product.votes+1
        })

      } else{
        return product;
      }
    })
    console.log(productList)
    console.log(newProducts)
  }
  const productList = products.map((product) => {
    console.log(product)
    return <ProductFunc
    votes={product.votes}
      id={product.id}
      title={product.title}

      submitterAvatarUrl={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl}
      onVote={handleProductUpVote}
    />
  })


  return (




    <div className="App container">
      <Alert />
      {/* tolgoi heseg /}
      <header className="App-header">


        <h1 className="tolgoi container"><img src={logo} className="icon" alt="logo" />  <b>Popular Products</b> <img src={logo} className="icon" alt="logo" /></h1>
      </header>

      {/ body heseg */}
      <div id='container'>
        {productList}
        <hr></hr>


      </div>

    </div>

  );

}


export default App;