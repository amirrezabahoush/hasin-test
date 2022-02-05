import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "redux/slices/user/slice";
import { useAppSelector } from "redux/store";
import { AuthForm, Notification } from "components/container";
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
		if (values.password.length <= 6) {
			const notificationProps = {
				type: "error",
				description: 'رمز عبور حداقل شامل 6 کاراکتر باید باشد',
				key: "message"
			};
			Notification(notificationProps);
		}
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
				<Input type="text" autoComplete="off" />
			</Form.Item>
			<Form.Item
				label="رمز عبور"
				name="password"
				rules={[
					{ required: true, message: "ورود رمز عبور الزامی است" },
					{
						pattern: Regex.password,
						message: 'رمز عبور باید شامل 6 کاراکتر عددی باشد',
					},
				]}
			>
				<Input.Password autoComplete="off"/>
			</Form.Item>
			حساب کاربری ندارید؟ <NavLink to="/signup">ثبت نام کنید</NavLink>
		</AuthForm>
	);
};

export default Login;
