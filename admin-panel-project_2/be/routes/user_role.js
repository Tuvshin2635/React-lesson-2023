import { getUserRole } from "../services/user_role-services.js";
import express from "express";

const user_role_router = express.Router();

user_role_router.get("/user_role", async (request, response) => {
  const result = getUserRole();
  response.status(200).send(result);
});

export default user_role_router;




// import React, { useState } from "react";
// import axios from "axios";

// interface IIngredients {
//   ingredient_id: number;
//   ingredient_name: string;
//   imageURL: string;
//   calories: number;
//   totalFat: number;
//   carbs: number;
//   sugars: number;
//   protein: number;
//   sodium: number;
//   fiber: number;
//   description: string;
// }

// const Material = () => {
//   const [ingredientName, setIngredientName] = useState("");
//   const [description, setDescription] = useState("");
//   const [imgURL, setImgURL] = useState("");
//   const [calories, setCalories] = useState(0);
//   const [totalFat, setTotalFat] = useState(0);
//   const [carbs, setCarbs] = useState(0);
//   const [sugars, setSugars] = useState(0);
//   const [protein, setProtein] = useState(0);
//   const [sodium, setSodium] = useState(0);
//   const [fiber, setFiber] = useState(0);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const ingredientData: IIngredients = {
//         ingredient_id: Math.floor(Math.random() * 100) + 1,
//         ingredient_name: ingredientName,
//         imageURL: imgURL,
//         calories: calories,
//         totalFat: totalFat,
//         carbs: carbs,
//         sugars: sugars,
//         protein: protein,
//         sodium: sodium,
//         fiber: fiber,
//         description: description,
//       };
//       await axios.post("http://localhost:8080/ingredients/add", ingredientData);
//       alert("Data added successfully");
//     } catch (error) {
//       console.log(error);
//       alert("Failed to add data");
//     }
//   };

//   return (
//     <div>
//       <div className="border bg-slate-300">
//         <h1> Ingredients INFORMATION CRUD </h1>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="">Ingredient Name</label>
//         <input
//           type="text"
//           name="ingredientName"
//           placeholder="Ingredient Name"
//           value={ingredientName}
//           onChange={(e) => setIngredientName(e.target.value)}
//         />
//         <br />
//         <label>Description</label>
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <br />
//         <label htmlFor="">Image URL</label>
//         <input
//           type="text"
//           name="imgURL"
//           placeholder="Image URL"
//           value={imgURL}
//           onChange={(e) => setImgURL(e.target.value)}
//         />
//         <br />
//         <label htmlFor="">Calories</label>
//         <input
//           type="text"
//           name="calories"
//           placeholder="Calories"
//           value={calories}
//           onChange={(e) => setCalories(Number(e.target.value))}
//         />
//         <br />
//         <label htmlFor="">Total Fat</label>
//         <input
//           type="text"
//           name="totalFat"
//           placeholder="Total Fat"
//           value={totalFat}
//           onChange={(e) => setTotalFat(Number(e.target.value))}
//         />
//         <br />
//         <label htmlFor="">Carbs</label>
//         <input
//           type="text"
//           name="carbs"
//           placeholder="Carbs"
//           value={carbs}
//           onChange={(e) => setCar
