import { createSlice } from '@reduxjs/toolkit'
import data from '../data'
import { v4 } from 'uuid';

data.map(product => {
	product.id = v4();
	product.quantity = 0
})

const initialState = {
	data: data
}

const goodsSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {
		addInCart: (state, action) => {
			state.data.map(item => {
				if (action.payload !== item.name) {
					return item
				}
				return {
					...item,
					quantity: ++item.quantity
				}
			})
		},

		removeInCart: (state, action) => {
			state.data.map(item => {
				if (action.payload !== item.name) {
					return item
				}
				return {
					...item,
					quantity: --item.quantity
				}
			})
		},

		deleteGoods: (state, action) => {
			state.data.map(item => {
				if (action.payload === item.id) {
					item.quantity = 0
				}
			})
		}
	}
})

export const { addInCart, removeInCart, deleteGoods } = goodsSlice.actions
export default goodsSlice.reducer