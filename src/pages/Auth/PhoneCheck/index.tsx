import React, { useState, useEffect } from "react";
import { Form, Input, Button, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { ReloadOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { getCode, sendCode } from "redux/slices/code/slice";
import { useAppSelector } from "redux/store";
import Notification from "components/container/Notification";
import { AuthForm } from "components/container";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useAppSelector((state) => state.user);
	const notification = useAppSelector((state) => state.notification);
	const [isLoading, setIsLoading] = useState(false);
	const [disabled, setDisabled] = useState(false);

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
			navigate("/signup/set-password");
		}
	}, [notification, navigate]);

	const onResend = () => {
		setIsLoading(true);
		setDisabled(true);
		dispatch(getCode({ id: user.id }));
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
		setTimeout(() => {
			setDisabled(false);
		}, 2 * 60000);
	};

	const onFinish = (values: { otpCode: string }) => {
		dispatch(sendCode({ id: user.id, ...values }));
		navigate("/signup/set-password");
	};

	return (
		<AuthForm submitText="ثبت" onFinish={onFinish} title="تایید شماره موبایل">
			<Spin spinning={isLoading}>
				<Form.Item
					label="کد فعالسازی"
					name="otpCode"
					rules={[{ required: true, message: "ارسال کد فعالسازی اجباری است" }]}
				>
					<Input
						addonAfter={
							<Button htmlType="submit" disabled={disabled}>
								<ReloadOutlined onClick={onResend} />
							</Button>
						}
					/>
				</Form.Item>
			</Spin>
		</AuthForm>
	);
};

export default Login;
