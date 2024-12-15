import { useEffect, useState } from "react"
import ProductList from "./components/ProductList/ProductList"
import Cart from "./components/Cart/Cart"
import { v4 } from 'uuid';
import data from './data.json'



const App = () => {

	const [products, setProducts] = useState(data)

	useEffect(() => {
		products.map(product => {
			product.id = v4();
			product.quantity = 0
		})
	}, [])

	const addCart = (name) => {
		setProducts(products.map(item => {
			if (item.name !== name) {
				return item
			}
			return {
				...item,
				quantity: ++item.quantity
			}
		}))
	}

	return (
		<div className="container">
			<div className="wrapper">
				<div className="products">
					<h1>Deserts</h1>
					<ProductList
						products={products}
						addCart={addCart}
					/>
				</div>
				<div className="cart">
					<Cart products={products} />
				</div>
			</div>
		</div>
	)
}

export default App
