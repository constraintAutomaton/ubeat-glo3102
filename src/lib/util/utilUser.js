import ApiInterface from "./../ApiInterface";

const engine = ApiInterface(false);

export const createUser = async (name, email, password)=>{
  const rep = await engine.signup(name, email, password);
  console.log(rep);
};
