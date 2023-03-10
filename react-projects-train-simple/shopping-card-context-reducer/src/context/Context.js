import { createContext, useContext, useReducer } from "react";

import faker from "faker";
import { cartReducer } from "./Reducers";

export const Cartctx = createContext();
const ContextProvider = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));
  const initialState = {
    products,
    cart: [],
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <Cartctx.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Cartctx.Provider>
  );
};
export default ContextProvider;
export const CartState = () => {
  return useContext(Cartctx);
};
