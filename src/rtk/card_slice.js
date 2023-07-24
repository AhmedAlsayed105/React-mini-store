
import { createSlice } from "@reduxjs/toolkit";


export const cardSlice  = createSlice({
    name: 'cardSlice',
    initialState : [],

    reducers:{
        addToCard : (state,action)=>{
            let findProduct = state.find(product => product.id === action.payload.id)
            console.log(findProduct)
            if(findProduct){
                findProduct.quantity += 1
            }else{
                const prodcutClone = {...action.payload,quantity : 1}
                state.push(prodcutClone)
            }
        },

        deleteToCard : (state,action)=>{
            return state.filter(product => product.id !== action.payload.id)
        },
        clearAllCard : (state,action)=>{
            return state  = []
        }
    }


})

export const {addToCard,deleteToCard,clearAllCard} = cardSlice.actions

export default cardSlice.reducer