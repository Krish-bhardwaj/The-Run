import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        address:" "
    },
    reducers:{
        update:(state,action) =>{
            state.address = action.address;
        }
    }
})
export const { update } = userSlice.actions;
export default userSlice.reducer;
