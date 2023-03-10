export const initialState = {
    cart:[],
    user: null
};


// reducer used to dispacth data into data layer whenever we click add to cart reducer always listening an action
const reducer = (state, action)=>{
    // console.log(state)
    // console.log(action)

    switch(action.type){
        case "ADD_TO_CART":
        return {
            ...state,   // we will return what state originally was
            cart: [...state.cart, action.item],   // but we gonna change the cart current cart state + whatever we decided to add
        };

        case "REMOVE_FROM_CART":
            // return{
            //     ...state, 
            //     cart: state.cart.filter(item=> item.id !==action.id)
            // }

            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );

            let newCart = [...state.cart];

            if(index >= 0){
                newCart.splice(index, 1)
            }
            else{
                console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`)
            }

            return{
                ...state,
                cart: newCart 
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

    default:
        return state;
    }
};

export default reducer


