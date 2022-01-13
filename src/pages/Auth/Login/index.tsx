import React, { useEffect } from "react";
import { Form, Input, Button, Typography } from "antd";
import { StyledCard } from "./phonecheck.styled";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "redux/slices/user/slice";
import { useAppSelector } from "redux/store";
import Notification from "components/container/Notification";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const notification = useAppSelector((state) => state.notification);

	useEffect(() => {
		const notificationProps = {
			type: "success",
			description: notification.message,
			key: "message",
			config: {
				duration: 5,
				rtl: true,
				placement: "topLeft",
			},
		};
		Notification(notificationProps);
		if (notification.isSuccessful) {
			navigate("/dashboard");
		}
	}, [notification, navigate]);

	const onFinish = (values: any) => {
		dispatch(login(values));
	};

	return (
		<StyledCard
			title={
				<Typography.Title level={4} className="text-center">
					ورود
				</Typography.Title>
			}
			bordered={false}
		>
			<Form
				name="basic"
				labelCol={{ span: 24 }}
				wrapperCol={{ span: 24 }}
				onFinish={onFinish}
				autoComplete="off"
				className="form-wrapper"
			>
				<Form.Item
					label="شماره موبایل"
					name="phoneNumber"
					rules={[{ required: true, message: "ورود شماره موبایل الزامی است" }]}
				>
					<Input type="number" />
				</Form.Item>
				<Form.Item
					label="رمز عبور"
					name="password"
					rules={[{ required: true, message: "ورود رمز عبور الزامی است" }]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						ثبت
					</Button>
				</Form.Item>
				حساب کاربری ندارید؟ <NavLink to="/signup">ثبت نام کنید</NavLink>
			</Form>
		</StyledCard>
	);
};

export default Login;
