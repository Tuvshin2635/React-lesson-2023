import axios from "axios";

async function fetchAllData(URL, setUsers) {
  // fetch a data form localhost8080/users
  const FETCHED_DATA = await axios.get(URL); //response
  console.log("axios", FETCHED_DATA);

  //   const FETCHED_JSON = await FETCHED_DATA.json(); //{status:succes data: [{}]}
  setUsers(FETCHED_DATA.data.data);
}

async function deleteUser(userId, URL, setUsers) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "DELETE",
    data: {
      userId: userId,
    },
  }); //4tii shag
  setUsers(FETCHED_DATA.data.data);
}

async function updateUser(userId, URL, setUsers) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "PUT",
    data: {
      userId: userId,
    },
  });
  setUsers(FETCHED_DATA.data.data);
}

async function createUser(setUsers, userId, URL) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "POST",
    data: {
      userId: userId,
    },
  });
  setUsers(FETCHED_DATA.data.data);
}

//   const putData = {
//     id: currentUser.id,
//     username: currentUser.username,
//     age: currentUser.age,
//   };
//   const options = {
//     method: "PUT",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(putData), //3tei shag damjuulax part
//   };
//   const FETCHED_DATA = await fetch(URL, options); //4tii shag
//   const FETCHED_JSON = await FETCHED_DATA.json();
//   setUsers(FETCHED_JSON.data);
//   setIsUpdate(false);
//   setCurrentUser(newUser);

export { deleteUser, fetchAllData, updateUser, createUser };
