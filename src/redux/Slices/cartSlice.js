import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);// action.payload resembles the input you sent to add reducer
        },
        remove:(state,action)=>{
           return state.filter((item)=>item.id!==action.payload); //save items into the state whose item id is not equal to action.payload
        }
    }
})
export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer;
