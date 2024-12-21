import styles from './productList.module.scss'
import Product from '../Product/Product'
import { useSelector } from "react-redux";

const ProductList = () => {

	const products = useSelector(state => state.goods.data)

	return (
		<ul className={styles.productList}>
			{products.map((product, index) => (
				<Product
					key={index}
					{...product}
				/>
			))}
		</ul>
	)
}

export default ProductList
