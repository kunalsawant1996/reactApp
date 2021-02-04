// Include all Reducers from all modules
import authentication from "./modules/Login/Reducer";
import userDataState from "./modules/Admin/Reducer";
import  singleUserDataState from "./modules/UserDetails/Reducer";
import  productState from "./modules/ProductList/Reducer";
import  cartState from "./modules/Cart/Reducer";
export  {
  authentication,
  userDataState,
  singleUserDataState,
  productState,
  cartState
};
