import CartButton from './CartButton'
import CounterButton from './CounterButton'
import styles from './product.module.scss'


const Product = ({ image, name, category, price, addCart, cart }) => {

	return (
		<li className={styles.product}>
			<div className={styles.image}>
				<img src={image.desktop} alt={name} />
				<div className={styles.counter}>
					{/*{isActiveCount*/}
					{/*<CartButton />*/}
					<CounterButton
						addCart={addCart}
						name={name}
						price={price}
						cart={cart}
					/>
				</div>
			</div>
			<div className={styles.category}>{category}</div>
			<div className={styles.name}>{name}</div>
			<div className={styles.price}>${price}</div>
		</li>
	)
}

export default Product
