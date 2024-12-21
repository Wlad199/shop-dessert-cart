import { configureStore } from '@reduxjs/toolkit'
import goodsReducer from './components/goodsSlice'
import popupReducer from './components/popupSlice'

export default configureStore({
	reducer: {
		goods: goodsReducer,
		popup: popupReducer
	}
})

