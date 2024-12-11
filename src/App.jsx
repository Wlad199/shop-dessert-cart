import { useState } from "react"
import ProductList from "./components/ProductList/ProductList"
import Cart from "./components/Cart/Cart"
import { v4 } from 'uuid';



const App = () => {

	const [cart, setCart] = useState([])

	const addCart = (name, price) => {

		const current = cart.find(item => {
			return item.name === name
		})

		if (current) {
			current.quantity = ++current.quantity
			setCart([...cart])
		} else {
			setCart([...cart, {
				id: v4(),
				name,
				price,
				quantity: 1
			}])
		}
	}
	//console.log(cart)

	return (
		<div className="container">
			<div className="wrapper">
				<div className="products">
					<h1>Deserts</h1>
					<ProductList
						addCart={addCart}
						cart={cart}
					/>
				</div>
				<div className="cart">
					<Cart cart={cart} />
				</div>
			</div>
		</div>
	)
}

export default App
