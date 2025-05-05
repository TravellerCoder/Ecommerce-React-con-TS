import { createContext, Dispatch } from "react"
import { CartAction, CartState } from "./cartReducer";

export interface CartContextType{
    state: CartState;
    dispatch: Dispatch<CartAction>
}

export const CartContext = createContext<CartContextType| undefined>(undefined);