//react
import React from "react";
import ReactDOM from "react-dom";
//antd
import { ConfigProvider } from "antd";
import faIR from "antd/es/locale/fa_IR";
//redux
import { Provider } from "react-redux";
import store from "redux/store";
//styles
import "./assets/styles/general.scss";
//router
import { BrowserRouter } from "react-router-dom";
//main components
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ConfigProvider locale={faIR} direction="rtl">
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ConfigProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// register();