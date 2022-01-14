import React, { useEffect } from "react";
import { Form, Select, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { sendUserData } from "redux/slices/user/slice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "redux/store";
import { Notification, AuthForm } from "components/container";
import { SignupValues } from "./SignUp.props";
import Regex from "utils/regex";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const notification = useAppSelector((state) => state.notification);

	useEffect(() => {
		if (notification.isSuccessful) {
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
			navigate("/signup/check-phone");
		}
	}, [notification, navigate]);

	const onFinish = async (values: SignupValues) => {
		dispatch(sendUserData(values));
	};

	return (
		<AuthForm title="ثبت نام" onFinish={onFinish} submitText="ثبت نام">
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
				rules={[
					{ required: true, message: "ثبت کد ملی الزامی است" },
					{
						pattern: Regex.nationalcode,
						message: " فرمت کد ملی وارد شده صحیح نمی باشد",
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="شماره همراه"
				name="phoneNumber"
				rules={[
					{ required: true, message: "ثبت شماره همراه الزامی است" },
					{
						pattern: Regex.mobileNumber,
						message: "شماره همراه وارد شده صحیح  نمی باشد",
					},
				]}
			>
				<Input className="w-100" />
			</Form.Item>

			<Form.Item
				label="ایمیل"
				name="email"
				rules={[
					{ required: true, message: "ثبت ایمیل الزامی است" },
					{
						pattern: Regex.email,
						message: "ایمیل وارد شده صحیح  نمی باشد",
					},
				]}
			>
				<Input type="email" />
			</Form.Item>
		</AuthForm>
	);
};

export default Login;
