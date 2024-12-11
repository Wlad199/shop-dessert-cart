import styles from './counterButton.module.scss'


const CounterButton = ({ addCart, name, price, cart }) => {


	return (
		<div className={styles.counterWrapper}>
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z" /></svg>
			</button>
			<span>{cart.quantity}</span>
			<button onClick={() => addCart(name, price)}>
				<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" /></svg>
			</button>
		</div>
	)
}

export default CounterButton
