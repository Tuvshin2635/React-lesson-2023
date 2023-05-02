import { useEffect, useState } from "react";
import Navbar from "./navbar";

interface IIngredients {
  ingredient_id: number;
  ingredient_name: string;
  imageURL: string;
  calories: number;
  totalFat: number;
  carbs: number;
  sugars: number;
  protein: number;
  sodium: number;
  fiber: number;
  description: string;
}

export default function Material() {
  const [ingredients, setIngredients] = useState<IIngredients[]>([]);
  const [editIngredient, setEditIngredient] = useState<IIngredients[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [IngName, setIngName] = useState<IIngredients[]>([]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const data = {
      ingredient_id: e.target.ingredientId.value,
      ingredient_name: e.target.ingredientName.value,
      imageURL: e.target.imageURL.value,
      calories: e.target.calories.value,
      totalFat: e.target.totalFat.value,
      carbs: e.target.carbs.value,
      sugars: e.target.sugars.value,
      protein: e.target.protein.value,
      sodium: e.target.sodium.value,
      fiber: e.target.fiber.value,
      description: e.target.description.value,
    };
    await fetch("http://localhost:8080/ingredients/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  async function handleDelete(_id: string) {
    const deleteIng = await fetch(
      `http://localhost:8080/ingredients/list/${_id}`,
      {
        method: "DELETE",
      }
    );
    console.log(deleteIng);
  }

  async function handleUpdate(e: any, index: number) {
    e.preventDefault();
    const data = {
      ingredient_id: ingredients.ingredient_id,
      ingredient_name: e.target.ingredientName.value,
      imageURL: e.target.imageURL.value,
      calories: e.target.calories.value,
      totalFat: e.target.totalFat.value,
      carbs: e.target.carbs.value,
      sugars: e.target.sugars.value,
      protein: e.target.protein.value,
      sodium: e.target.sodium.value,
      fiber: e.target.fiber.value,
      description: e.target.description.value,
    };

    await fetch(`http://localhost:8080/ingredients/list/${_id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    const newIngredients = [...ingredients];
    newIngredients[index] = data;
    setIngredients(newIngredients);
  }

  function handleUserName() {
    setIngredients({
      ...ingredients,
      // ingredient_name: e.target.value,
    });
  }

  const filteredIngredients = ingredients.filter((item) =>
    item.ingredient_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  async function fetchData(): Promise<void> {
    const FETCHED_DATA = await fetch("http://localhost:8080/ingredients/list");
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setIngredients(FETCHED_JSON);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-[1280px] m-auto px-4 py-4 bg-slate-400">
      <Navbar />
      <div className="flex gap-2 mb-2">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
          focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="Search by Ingredient's name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className=" rounded-md px-1 py-0 text-white bg-[#20DF7F] hover:bg-[#ffffff] hover:text-[#20DF7F] duration-300"
          onClick={() => setSearchTerm("")}
        >
          CLEAR SEARCH
        </button>
      </div>
      <div>
        <div className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
          <h1> Ingredients INFORMATION CRUD </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white px-4 py-6 mb-1 rounded shadow-xl "
        >
          <div className="grid gap-6 mb-1 md:grid-cols-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              ID
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="ingredientId"
                placeholder="id"
              />
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ingredient Name
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="ingredientName"
                placeholder="Ingredient Name"
                onChange={handleUserName}
                // value={}
              />
            </label>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="description"
                placeholder="Description"
              />
            </label>

            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor=""
            >
              Image URL
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="imageURL"
                placeholder="Image URL"
              />
            </label>

            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor=""
            >
              Calories
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="calories"
                placeholder="Calories"
              />
            </label>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor=""
            >
              Total Fat
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="totalFat"
                placeholder="Total Fat"
              />
            </label>

            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor=""
            >
              Carbs
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="carbs"
                placeholder="Carbs"
              />
            </label>

            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor=""
            >
              Sugars
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="sugars"
                placeholder="Sugars"
              />
            </label>

            <label
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor=""
            >
              Protein
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="protein"
                placeholder="Protein"
              />
            </label>
            <label
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor=""
            >
              Sodium
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="sodium"
                placeholder="Sodium"
              />
            </label>

            <label
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor=""
            >
              Fiber
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="fiber"
                placeholder="Fiber"
              />
            </label>
          </div>
          <button
            className=" rounded-md px-4 py-2 text-white bg-[#20DF7F] hover:bg-[#ffffff] hover:text-[#20DF7F] duration-300"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      ----
      <table className="bg-white">
        <thead className=" bg-slate-100 ">
          <tr className="border-2 text-gray-500 ">
            <th className="border-2">ID</th>
            <th className="border-2">Name</th>
            <th className="border-2">Photo</th>
            <th className="border-2">Calories</th>
            <th className="border-2">totalFat</th>
            <th className="border-2">carbs</th>
            <th className="border-2">sugars</th>
            <th className="border-2">protein</th>
            <th className="border-2">sodium</th>
            <th className="border-2">fiber</th>
            <th className="border-2">Descripstion</th>
            <th className="border-2">Btn</th>
          </tr>
        </thead>
        <tbody>
          {filteredIngredients.map((ingredient, index) => (
            <tr className="border-2" key={index}>
              <td className="border-2">{ingredient.ingredient_id}</td>
              <td className="border-2">{ingredient.ingredient_name}</td>
              <td className="border-2">
                <img className="w-14" src={ingredient.imageURL} alt="" />
              </td>
              <td className="border-2">{ingredient.calories}</td>
              <td className="border-2">{ingredient.totalFat}</td>
              <td className="border-2">{ingredient.carbs}</td>
              <td className="border-2">{ingredient.sugars}</td>
              <td className="border-2">{ingredient.protein}</td>
              <td className="border-2">{ingredient.sodium}</td>
              <td className="border-2">{ingredient.fiber}</td>

              <td className="border-2">{ingredient.description}</td>
              <td className="border-2 flex gap-2">
                {
                  <button
                    className="bg-[#125086] py-1 px-6 text-white"

                    // <button onClick={() => handleUpdate(user.id)}> EDIT </button>
                  >
                    EDIT
                  </button>
                }
                {
                  <button
                    className=" bg-red-500 py-1 px-6 text-white"
                    onClick={() => handleDelete(ingredient._id)}
                  >
                    DEL
                  </button>
                }
                {/* {<button className=" bg-green">SAVE</button>} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
