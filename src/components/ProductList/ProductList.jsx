import styles from './productList.module.scss'
import Product from '../Product/Product'

const ProductList = ({ addCart, products }) => {


	return (
		<ul className={styles.productList}>
			{products.map((product, index) => (
				<Product
					key={index}
					{...product}
					addCart={addCart}
				/>
			))}
		</ul>
	)
}

export default ProductList
