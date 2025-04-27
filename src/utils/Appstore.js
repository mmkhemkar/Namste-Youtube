import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import searchSlice from "./searchSlice"
import chatSlice from "./chatSlice"


const appStote = configureStore({
 reducer :{
    app: appSlice,
    search: searchSlice,
    chart : chatSlice,
 },
})

export default appStote;