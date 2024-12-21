import { useDispatch } from 'react-redux'
import styles from './cartItem.module.scss'
import { deleteGoods } from '../goodsSlice'


const CartItem = ({ reload, name, quantity, price, id }) => {

	const dispatch = useDispatch()

	console.log(reload)

	return (
		<div className={styles.cartItem}>
			<div className={styles.wrapper}>
				<div className={styles.info}>
					<div className={styles.name}>{name}</div>
					<span className={styles.quantity}>{quantity}</span>
					<span className={styles.price}>${price}</span>
					<span className={styles.totalPrice}>${price * quantity}</span>
				</div>
				{!reload && (
					<div
						className={styles.close}
						onClick={() => dispatch(deleteGoods(id))}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" /></svg>
					</div>
				)}
			</div>
		</div>
	)
}

export default CartItem
