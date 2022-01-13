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
import reportWebVitals from "./reportWebVitals";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
