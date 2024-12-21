import { useDispatch } from 'react-redux'
import styles from './counterButton.module.scss'
import { addInCart, removeInCart } from '../goodsSlice'



const CounterButton = ({ name, price, quantity }) => {

	const dispatch = useDispatch()

	return (
		<div className={styles.counterWrapper}>
			<button onClick={() => dispatch(removeInCart(name))}>
				<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z" /></svg>
			</button>
			<span>{quantity}</span>
			<button onClick={() => dispatch(addInCart(name))}>
				<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" /></svg>
			</button>
		</div>
	)
}

export default CounterButton
