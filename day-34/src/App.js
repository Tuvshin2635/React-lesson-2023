import logo from './logo.svg';
import './App.css';
import HelloWorld2 from './HelloWorld';
import Product from './Product';
import Product2 from './Product2';
import Product3 from './Product3';
import ProductFunc from './ProducdFunc';
import products from './Seed';


// function App() {
//   const productList = products.map((products) =>
//   // console.log(products); 
//   return <ProductFunc
//     title={products.title}
//     id={products.id}
//   />
//   }

function App() {
  const productList = products.map((products) => {
    return <ProductFunc
      title={products.title}
      id={products.id}
      description={products.description}
      submitterAvatarUrl={products.submitterAvatarUrl}
      productImageUrl={products.productImageUrl}
    />
  })
  return (
    <div className="App" >
      <header className="App-header">
        <div>
          <h1> Product List</h1>
          <hr />
          {products.map((product) => {
            console.log(product)
          })}
          <products />
          {productList}
        </div>
      </header>
    </div>
  )
}








// }

// function App() {

//   //odoo function dotor function hiih gj bn

//   const user={
//     firstName:"tuvshin",
//     lastName:"."
//   };
//   function formatName(user){
//     return user.firstName+''+user.lastName;
//   }

//   const Style={
//     color:"red",
//     background:"yellow",
//     // margin:"auto",
//     padding:"50px 200px"
//   }

//   const element=(
//     <h1 style={Style}>hello,{formatName(user)}!</h1>
//   )
//   // const image = <img src="www.someurl/img.png" alt="dog picture"/>

// const secondElemtn = (<h1 className="my-text"> hieeedeeee</h1>)


//   return(
//     <div> String text
//     {element}
//     {secondElemtn}
//     </div>
//   )
// return (

//   <div className='App'>
//     <HelloWorld2 />

//     <header className='App-header'>
//       <div className='app-big-container'>
//         <h1> Product List </h1>
//         {/* <Product /> */}
//         <ProductFunc/>
//         {/* <Product2 />
//         <Product3 /> */}

//       </div>
//     </header>

//   </div>



// )

// const name="tuvshin";
// const element=<h1>Hello,{name}</h1>
// return (
//   element
// );




export default App;