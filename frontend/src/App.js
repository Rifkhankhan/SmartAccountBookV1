import './App.css'
import { Provider, useDispatch, useSelector } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Routers from './Router/Routers'
import { store } from './store/index'

function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<div className="App">
					<Routers />
					<Footer />
				</div>
			</Provider>
		</BrowserRouter>
	)
}

export default App
