import { createSlice } from '@reduxjs/toolkit'

const popupSlice = createSlice({
	name: 'popup',
	initialState: {
		show: false
	},
	reducers: {
		showPopup: state => {
			state.show = !state.show
			document.body.classList.add('lock')
		}
	}
})

export const { showPopup } = popupSlice.actions
export default popupSlice.reducer