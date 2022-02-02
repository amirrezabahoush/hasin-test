import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "redux/slices/user/slice";
import { useAppSelector } from "redux/store";
import { AuthForm } from "components/container";
import { LoginValues } from "./Login.props";
import Regex from "utils/regex";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const notification = useAppSelector((state) => state.notification);

	useEffect(() => {
		if (notification.isSuccessful) {
			navigate("/dashboard");
		}
	}, [notification, navigate]);

	const onFinish = (values: LoginValues) => {
		dispatch(login(values));
	};

	return (
		<AuthForm submitText="ثبت" onFinish={onFinish} title="ورود">
			<Form.Item
				label="شماره موبایل"
				name="phoneNumber"
				rules={[
					{ required: true, message: "ورود شماره موبایل الزامی است" },
					{
						pattern: Regex.mobileNumber,
						message: " فرمت شماره همراه وارد شده صحیح نمی باشد",
					},
				]}
			>
				<Input type="number" />
			</Form.Item>
			<Form.Item
				label="رمز عبور"
				name="password"
				rules={[
					{ required: true, message: "ورود رمز عبور الزامی است" }
				]}
			>
				<Input.Password />
			</Form.Item>
			حساب کاربری ندارید؟ <NavLink to="/signup">ثبت نام کنید</NavLink>
		</AuthForm>
	);
};

export default Login;
