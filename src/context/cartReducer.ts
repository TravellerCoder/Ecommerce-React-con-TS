export const initialState = {  
    cartItems: [],
}

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART' : 
            const {id} = action.payload;

            //validamos si el producto ya existe en el carrito
            const existingItem = state.cartItems.find((item) => item.id === id)

            if( existingItem){
                return {
                    ...state,
                    cartItems: state.cartItem.map( (item) => item.id === id ? { ...existingItem, quantity: existingItem.quantity +1 } : item)
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
                if ( itemToRemove. quantity === 1){
                    return {
                        ...state,
                        cartItems : state.cartItems.filter((item) => item.id !== removeItemId)
                    } 
                } // si la es mayo a 1 restamos de a 1 la cantidad del prodducto
                else {
                    return {
                        ...state,
                        cartItems: state.cartItems.map((item) => item.id === removeItemId ? { ...itemToRemove, quantity: itemToRemove.quantity - 1 } : item)
                    }
                }
                default:
                    return state;
            }
    }   