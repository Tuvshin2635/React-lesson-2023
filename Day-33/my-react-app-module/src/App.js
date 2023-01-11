import './App.css';
import ProductFunc from './Product';
import products from './Seed';
// import Product from './Product';

function App() {
  const productList = products.map((product) => {
    console.log(product)

    return <ProductFunc 
      title={product.title} 
      id={product.id}
      description={product.description}
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl} 
    />
  })

  // const productList2 = products.map((product)=> {
  //   return <Product
  //   title={product.title} 
  //   id={product.id}
  //   description={product.description}
  //   url={product.url}
  //   votes={product.votes}
  //   submitterAvatarUrl={product.submitterAvatarUrl}
  //   productImageUrl={product.productImageUrl} 
  // />
  // })


  return (
    <div className='App'>
      <header className="app-header">
        <h1>Popular Products</h1>
        <hr/>
        {productList}
        {/* {productList2} */}
      </header>
    </div>
  )
}
export default App;

