import ProductList from "./components/ProductList/ProductList"
import Cart from "./components/Cart/Cart"
import Comfirm from "./components/Confirm/Comfirm";
import { useSelector } from "react-redux";

const App = () => {

	const popup = useSelector(state => state.popup.show)

	return (
		<div className="container">
			<div className="wrapper">

				<div className="products">
					<h1>Deserts</h1>
					<ProductList />
				</div>

				<div className="cart">
					<Cart reload={false} />
				</div>

				{popup ? (
					<div className="popup">
						<Comfirm />
					</div>
				) : ''
				}

			</div>
		</div>
	)
}

export default App
