async function fetchAllData(URL, setUsers) {
  // fetch a data form localhost8080/users
  const FETCHED_DATA = await fetch(URL); //response
  const FETCHED_JSON = await FETCHED_DATA.json(); //{status:succes data: [{}]}
  setUsers(FETCHED_JSON.data);
}

async function deleteUser(userId, URL, setUsers) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
    }),
  };
  const FETCHED_DATA = await fetch(URL, options); //4tii shag
  const FETCHED_JSON = await FETCHED_DATA.json();
  setUsers(FETCHED_JSON.data);
}

async function updateUser(e, URL, setUsers) {
  const postData = {
    username: e.target.username.value,
    age: e.target.age.value,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(postData), //3tei shag damjuulax part
  };

  const FETCHED_DATA = await fetch(URL, options); //4tii shag
  const FETCHED_JSON = await FETCHED_DATA.json();
  setUsers(FETCHED_JSON.data);
}

async function createUser(
  currentUser,
  URL,
  setUsers,
  setIsUpdate,
  setCurrentUser,
  newUser
) {
  const putData = {
    id: currentUser.id,
    username: currentUser.username,
    age: currentUser.age,
  };
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(putData), //3tei shag damjuulax part
  };
  const FETCHED_DATA = await fetch(URL, options); //4tii shag
  const FETCHED_JSON = await FETCHED_DATA.json();
  setUsers(FETCHED_JSON.data);
  setIsUpdate(false);
  setCurrentUser(newUser);
}
export { deleteUser, fetchAllData, updateUser, createUser };
