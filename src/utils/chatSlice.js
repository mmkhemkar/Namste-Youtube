import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name :'chart',
    initialState :{
        messages :[],
    },
    reducers : {
        addMessage: (state,action) =>{
            state.messages.splice(10,1);
            state.messages.push(action.payload);
        },
    },
})
export const { addMessage} = chatSlice.actions;

export default chatSlice.reducer;