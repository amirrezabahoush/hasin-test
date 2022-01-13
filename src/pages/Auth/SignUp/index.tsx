import React, { useEffect } from "react";
import { Form, Select, InputNumber, Input, Button, Typography } from "antd";
import { StyledCard } from "./login.styled";
import { useNavigate } from "react-router-dom";
import { sendUserData } from "redux/slices/user/slice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "redux/store";
import Notification from "components/container/Notification";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const notification = useAppSelector((state) => state.notification);

	useEffect(() => {
		if (notification.isSuccessful) {
			const notificationProps = {
				type: 'success',
				description: notification.message,
				key: 'message',
				config: {
					duration: 5,
					rtl: true,
					placement: 'topLeft',
				},
			};
			Notification(notificationProps);
			navigate("/signup/check-phone");
		}
	}, [notification, navigate]);

	const onFinish = async (values: any) => {
			dispatch(
				sendUserData({ user: { ...values, phoneNumber: "09195187626" } })
			);
	};

	return (
		<StyledCard
			title={
				<Typography.Title level={4} className="text-center">
					ثبت نام
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
					label="نوع کاربر"
					name="nationality"
					rules={[{ required: true, message: "انتخاب نوع کاربر الزامی است" }]}
				>
					<Select>
						<Select.Option value="Iranian">ایرانی</Select.Option>
						<Select.Option value="Foreigner">خارجی</Select.Option>
					</Select>
				</Form.Item>

				<Form.Item
					label="کد ملی"
					name="merchantCode"
					rules={[{ required: true, message: "ثبت کد ملی الزامی است" }]}
				>
					<Input type="number" />
				</Form.Item>

				<Form.Item
					label="شماره همراه"
					name="phoneNumber"
					rules={[{ required: true, message: "ثبت شماره همراه الزامی است" }]}
				>
					<InputNumber className="w-100" />
				</Form.Item>

				<Form.Item
					label="ایمیل"
					name="email"
					rules={[{ required: true, message: "ثبت ایمیل الزامی است" }]}
				>
					<Input type="email" />
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						ثبت نام
					</Button>
				</Form.Item>
			</Form>
		</StyledCard>
	);
};

export default Login;
