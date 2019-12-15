import ApiInterface from "./../ApiInterface";

const isSecure = true;
const apiEngine = new ApiInterface(isSecure);

const isSecure2 = true;
const apiEngineSecure = new ApiInterface(isSecure2);

export const createUser = async (name, email, password)=>{
  const rep = await engine.signup(name, email, password);
  console.log(rep);
};

export const getUserById = (userId, token) => {
  return apiEngine.getUserById(userId, token);
};

export const followFriend = async (friendId, token) => {
    const param = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({
        "id" : friendId
      })
    };
    return fetch(`${apiEngineSecure.rootUrlUbeat}follow`, param)
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(() => {
      console.error("Unable to follow this user.");
    });
};

export const deleteFriend = async (friendId, token) => {
    return fetch(
      `${apiEngineSecure.rootUrlUbeat}follow/${friendId}`,
      {
        method: "DELETE",
        headers: {
          "Authorization": token
        },
      }
    ).catch(() => {
      console.error("Unable to delete this friend.");
    });
  };

