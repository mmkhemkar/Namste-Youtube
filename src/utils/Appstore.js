import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"


const appStote = configureStore({
 reducer :{
    app: appSlice,
 },
})

export default appStote;