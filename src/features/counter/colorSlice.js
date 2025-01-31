import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    color:"black"
}

export const colorSlice = createSlice({
    name:"color",
    initialState,
    reducers:{
        selectGreen:(state)=> {
            state.color = "green"
        },
        selectYellow:(state) => {
            state.color = "yellow"
        },
        selectGivenColor:(state, action)=>{
            state.color = action.payload
        },
        selectDefault:(state) => {
            state.color = "black"
        }
    }
})


export const {selectGreen, selectYellow, selectGivenColor, selectDefault} = colorSlice.actions
export default colorSlice.reducer