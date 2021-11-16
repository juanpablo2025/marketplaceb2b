import { CallToActionSharp } from "@material-ui/icons";
import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name:"cart",
	initialState:{
		products:[],
		quiantity: 0,
		total: 0,
	
},
reducers:{
	addProduct:(state,action) =>{
		state.quantify += 1;
		state.products.push(action.payload);
		state.total += CallToActionSharp.payload.quantify;
	},
},
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;