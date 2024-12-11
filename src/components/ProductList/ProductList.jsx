import { useState } from 'react'
import data from '../../data.json'
import styles from './productList.module.scss'
import Product from '../Product/Product'


const ProductList = ({ addCart, cart }) => {


	const [products, setProducts] = useState(data)

	console.log(products)

	return (
		<ul className={styles.productList}>
			{products.map((product, index) => (
				<Product
					key={index}
					{...product}
					addCart={addCart}
					cart={cart}
				/>
			))}
		</ul>
	)
}

export default ProductList
