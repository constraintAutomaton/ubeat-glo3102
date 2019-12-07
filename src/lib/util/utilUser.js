import ApiInterface from "./../ApiInterface";

const isSecure = false;
const apiEngine = new ApiInterface(isSecure);

export const createUser = async (name, email, password)=>{
  const rep = await engine.signup(name, email, password);
  console.log(rep);
};

export const getUserById = async userId => {
  const result = await apiEngine.getUserById(userId);

  if (result != null) {
    let user = result;
    return user;
  } else {
    throw "Failed to fetch user: " + userId + ". It does not exist!";
  }
};

