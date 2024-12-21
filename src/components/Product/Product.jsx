import { useDispatch } from 'react-redux'
import CartButton from './CartButton'
import CounterButton from './CounterButton'
import styles from './product.module.scss'

const Product = ({ image, name, category, price, quantity }) => {

	return (
		<li className={styles.product}>
			<div className={styles.image}>
				<img src={image.desktop} alt={name} />
				<div className={styles.counter}>
					{!quantity ? (
						<CartButton
							name={name}
						/>
					) : (
						<CounterButton
							name={name}
							price={price}
							quantity={quantity}
						/>
					)}
				</div>
			</div>
			<div className={styles.category}>{category}</div>
			<div className={styles.name}>{name}</div>
			<div className={styles.price}>${price}</div>
		</li>
	)
}

export default Product
