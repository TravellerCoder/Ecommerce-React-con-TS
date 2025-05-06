import { CartProduct } from "../interface";
export interface CartState {
    cartItems: CartProduct[]
}

export const initialState = {  
    cartItems: [],
}
export interface CartAction {
    type: 'ADD_TO_CART' | 'REMOVE_FROM_CART';
    payload: CartProduct
}

export const cartReducer = (state: CartState, action: CartAction) : CartState => {
    switch (action.type) {
        case 'ADD_TO_CART' : 
            const {id} = action.payload;

            //validamos si el producto ya existe en el carrito
            const existingItem = state.cartItems.find((item) => item.id === id)

            if( existingItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map( (item) => item.id === id ? { ...existingItem, quantity: existingItem.quantity +1 } : item)
                }
            }else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, {...action.payload, quantity: 1}]
                }
            }
            case 'REMOVE_FROM_CART':
                const { id : removeItemId } = action.payload;

                //validamos si el producto ya existe en el carrito
                const itemToRemove = state.cartItems.find((item) => item.id === removeItemId)

                //si la cantidad existente es 1 eliminamos el producto del carrito 
                    if (itemToRemove) {
                        if ( itemToRemove. quantity === 1){
                            return {
                                ...state,
                                cartItems : state.cartItems.filter((item) => item.id !== removeItemId)
                            } 
                        } 
                        else {
                            return {
                                ...state,
                                cartItems: state.cartItems.map((item) => item.id === removeItemId ? { ...itemToRemove, quantity: itemToRemove.quantity - 1 } : item)
                    }
                    return state; 
                    }
                }
                default:
                    return state;
            }
    }   