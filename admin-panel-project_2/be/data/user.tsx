import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./navbar";

interface IUsers {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  birthday: Date;
  phone_number: number;
  address: string;
  allergies: Array<any>;
  diet: Array<any>;
  imageURL: string;
}
function User() {
  const [user, setUser] = useState<IUsers[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchData(): Promise<void> {
    const FETCHED_DATA = await fetch("http://localhost:8080/user/list");
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUser(FETCHED_JSON);
  }
  useEffect(() => {
    fetchData();
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      email: e.target.email.value,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      birthday: e.target.birthday.value,
      phone_number: e.target.phone_number.value,
      address: e.target.address.value,
      allergies: e.target.allergies.value,
      diet: e.target.diet.value,
      imageURL: e.target.imageURL.value,
    };
    await fetch(`http://localhost:8080/user/admin/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  async function handleDelete(_id: string) {
    const deleteUser = await fetch(`http://localhost:8080/user/list/${_id}`, {
      method: "DELETE",
    });
    console.log(deleteUser);
  }

  const filteredUsers = user.filter((item) =>
    item.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[1480px] m-auto px-4 py-4 bg-slate-400">
      <Navbar />

      <div className="container">
        <h1> USER INFO </h1>
        <div className="flex gap-2 mb-2">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
          focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Search by username"
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
      </div>
      <div>
        <table className="bg-white">
          <thead className=" bg-slate-100 ">
            <tr className="border-2 text-gray-500 ">
              <th className="border-2 py-4">UserName</th>
              <th className="">UserID</th>
              <th className="border-2">Email</th>
              <th className="border-2">FirstName</th>
              <th className="border-2">LastName</th>
              <th className="border-2">Birthday</th>
              <th className="border-2">PhoneNum</th>
              <th className="border-2">Address</th>
              <th className="border-2">Allergy</th>
              <th className="border-2">Diet</th>
              <th className="border-2">Image</th>
              <th className="border-2">Btn</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr className="border-2" key={index}>
                <td className="border-2">{user.username}</td>
                <td className="border-2">{user.username}</td>
                <td className="border-2">{user.email}</td>
                <td className="border-2">{user.first_name}</td>
                <td className="border-2">{user.last_name}</td>
                <td className="border-2">{user.birthday}</td>
                <td className="border-2">{user.phone_number}</td>
                <td className="border-2">{user.address}</td>
                <td className="border-2">{user.allergies}</td>
                <td className="border-2">{user.diet}</td>
                <td>
                  <img className="w-14" src={user.imageURL} alt="" />
                </td>
                <td className="border-2 flex gap-2">
                  {
                    <button className="bg-[#125086] py-1 px-6 text-white">
                      EDIT
                    </button>
                  }
                  {
                    <button
                      className=" bg-red-500 py-1 px-6 text-white"
                      onClick={() => handleDelete(user._id)}
                    >
                      DEL
                    </button>
                  }
                  {/* {
                    <button className="bg-[#20DF7F] py-1 px-6 text-white ">
                      SAVE
                    </button>
                  } */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>
        <form
          className="bg-white px-4 py-6 mb-6 rounded shadow-xl "
          onSubmit={handleSubmit}
        >
          <div className="grid gap-6 mb-1 md:grid-cols-2">
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="username"
                placeholder="Username"
              />
            </div>
            {/* <label htmlFor="">USER ID</label>
          <input
            className="border-2"
            type="text"
            name="recipe_id"
            placeholder="Recipe Id"
          /> */}
            <div>
              <label
                htmlFor=""
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="email"
                placeholder="email"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                First Name{" "}
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="first_name"
                placeholder="First Name"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="last_name"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Birthday
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="birthday"
                placeholder="Birthday"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="phone_number"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="mb-1">
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              name="address"
              placeholder="Address"
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Allergies
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              name="allergies"
              placeholder="Allergies"
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              diet
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              name="diet"
              placeholder="diet"
            />
          </div>
          <div className="mb-1">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor=""
            >
              imageURL
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              name="imageURL"
              placeholder="imageURL"
            />
          </div>
          <button
            className=" rounded-md px-4 py-2 text-white bg-[#20DF7F] hover:bg-[#ffffff] hover:text-[#20DF7F] duration-300"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default User;
