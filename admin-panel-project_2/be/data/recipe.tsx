import { useEffect, useState } from "react";
import Navbar from "./navbar";

interface IRecipe {
  recipe_id: number;
  recipe_name: string;
  ingredients: Array<any>;
  prep_time: number;
  cooking_time: number;
  meal_type: string;
  description: string;
  imageURL: string;
  videoURL: string;
  recipe_category_id: number;
}

export default function Recipe() {
  const [recipe, setRecipe] = useState<IRecipe[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    const data = {
      recipe_id: e.target.recipe_id.value,
      recipe_name: e.target.recipe_name.value,
      prep_time: e.target.prep_time.value,
      cooking_time: e.target.cooking_time.value,
      meal_type: e.target.meal_type.value,
      description: e.target.description.value,
      imageURL: e.target.imageURL.value,
      videoURL: e.target.videoURL.value,
      recipe_category_id: e.target.recipe_category_id.value,
    };
    await fetch(`http://localhost:8080/recipe/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  async function handleDelete(_id: string) {
    const deleteIng = await fetch(`http://localhost:8080/recipe/list/${_id}`, {
      method: "DELETE",
    });
    console.log(deleteIng);
  }

  // async function handleUpdate(e: any) {
  //   e.preventDefault()

  // }

  async function fetchData(): Promise<void> {
    const FETCHED_DATA = await fetch("http://localhost:8080/recipe/list");
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRecipe(FETCHED_JSON);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const filteredRecipes = recipe.filter((item) =>
    item.recipe_name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[1280px] m-auto px-4 py-4 bg-slate-400">
      <Navbar />
      <br></br>
      <div className="flex gap-2 mb-2">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
          focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="Search by Recipe name"
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
        <h1> RECIPE INFORMATION CRUD </h1>
        <form
          className="bg-white px-4 py-6 mb-6 rounded shadow-xl "
          onSubmit={handleSubmit}
        >
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              RECIPE ID
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="recipe_id"
                placeholder="Recipe Id"
              />
            </label>
            {/* <br /> */}
            <label htmlFor="">
              RECIPE Name
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="recipe_name"
                placeholder="Recipe Name"
              />
            </label>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              ingredients{" "}
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="ingredients"
                placeholder="array bdlaar oruulax"
              />
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {" "}
              Prep Time
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="prep_time"
                placeholder="Prep Time"
              />
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cooking time
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="cooking_time"
                placeholder="Cooking time"
              />
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Meal type
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="meal_type"
                placeholder="Meal Type"
              />
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="description"
                placeholder="Description"
              />
            </label>

            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ImageURL
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="imageURL"
                placeholder="ImageURL"
              />
            </label>

            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              VideoURL
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="videoURL"
                placeholder="Video"
              />
            </label>

            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Recipe Category ID
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="recipe_category_id"
                placeholder="Recipe Category ID"
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
      -------------
      <table className="bg-white">
        <thead className=" bg-slate-100 ">
          <tr className="border-2 text-gray-500 ">
            <th className="border-2">RecipeID</th>
            <th className="border-2">RecipeName</th>
            <th className="border-2">ingredients</th>
            <th className="border-2">PrepTime</th>
            <th className="border-2">CookTime</th>
            <th className="border-2">Meal Type</th>
            <th className="border-2">Description</th>
            <th className="border-2">ImageUrl</th>
            <th className="border-2">VideoURL</th>
            <th className="border-2">Recipe CategoryID</th>
            <th className="border-2">Btn</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecipes.map((recipe, index) => (
            <tr className="border-2" key={index}>
              <td className="border-2">{recipe.recipe_id}</td>
              <td className="border-2">{recipe.recipe_name}</td>
              <td className="border-2">{recipe.ingredients}</td>
              <td className="border-2">{recipe.prep_time}</td>
              <td className="border-2">{recipe.cooking_time}</td>
              <td className="border-2">{recipe.meal_type}</td>
              <td className="border-2">{recipe.description}</td>
              <img className="w-14" src={recipe.imageURL} alt="" />
              <td className="border-2">{recipe.videoURL}</td>
              <td className="border-2">{recipe.recipe_category_id}</td>
              <td className="border-2 flex gap-2">
                {
                  <button className="bg-[#125086] py-1 px-6 text-white">
                    EDIT
                  </button>
                }
                {
                  <button
                    className=" bg-red-500 py-1 px-6 text-white"
                    onClick={() => handleDelete(recipe._id)}
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
