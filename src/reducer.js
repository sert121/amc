export const initialState = {
basket: [],
user: null,
};


export const getBasketTotal = (basket) => basket?.reduce((amount,item)=> item.price + amount, 0)

function reducer(state,action){

    console.log(action);

    switch(action.type){

        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }

        case 'ADD_TO_BASKET':
            return {
            ...state,
            basket:[...state.basket,action.item]
            };
            
        case 'REMOVE_FROM_BASKET':
            let new_basket = [...state.basket];

            const index = state.basket.findIndex((basketitem)=> basketitem.id === action.id)
            
            if (index >= 0){

                new_basket.splice(index,1);
            }
            else{
                console.warn('cant remove product')
            }

            return {
                ...state,basket:new_basket};
        default:
            return state;

    }

}
//action changes the state
// depending on the action type we change the logic

export default reducer;

