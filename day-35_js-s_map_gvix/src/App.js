import logo from './logo.svg';
import './App.css';
import products from './Seed';

function App(props) {
  return (
    <div className="App" >
      <header className="App-header">
        <div>
          <h1> Product List</h1>
          <hr />
            {products.map((product) => {
              console.log(product)
            })}
            <product/>

        </div>
      </header>

    </div>
  )
}













// function Profile(props) {
//   // console.log('props', props);
//   // destructuring
//   const { img, name, age, profession } = props;

//   return (
//     <div className="profile" >
//       <img src={img} alt="people" />
//       <p> name:  {name} </p>
//       <p> age: {age} </p>
//       <p>profession: {profession}</p>
//     </div>
//   );
// }
// function App() {
//   // const user = {
//   //   img: "image-aqua.png",
//   //   name: "jhon",
//   //   age: 20,
//   //   profession: "MBA"
//   // }
//   return (
//     <div className="app2" >
//       <Profile
//         // {...user}
//         img="image-aqua.png"
//         name="jhon"
//         age={20}
//         profession="MBA"
//       />
//       <Profile
//         img="image-aqua.png"
//         name="Clark"
//         age={20}
//         profession="BBBHA"
//       />
//     </div>
//   );
// }
export default App;


