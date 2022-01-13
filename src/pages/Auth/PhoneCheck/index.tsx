import React, { useState, useEffect } from "react";
import { Form, Input, Button, Typography, Spin } from "antd";
import { StyledCard } from "./phonecheck.styled";
import { useNavigate } from "react-router-dom";
import { ReloadOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { getCode, sendCode } from "redux/slices/code/slice";
import { useAppSelector } from "redux/store";
import Notification from "components/container/Notification";

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

	const onFinish = (values: any) => {
		dispatch(sendCode({ id: user.id, ...values }));
		navigate("/signup/set-password");
	};

	return (
		<StyledCard
			title={
				<Typography.Title level={4} className="text-center">
					تایید شماره موبایل
				</Typography.Title>
			}
			bordered={false}
		>
			<Spin spinning={isLoading}>
				<Typography.Text>ارسال کد به شماره همراه ۰۹۱۲۳۴۶۳۳۲۱</Typography.Text>
				<Form
					name="basic"
					labelCol={{ span: 24 }}
					wrapperCol={{ span: 24 }}
					onFinish={onFinish}
					autoComplete="off"
					className="form-wrapper"
				>
					<Form.Item
						label="کد فعالسازی"
						name="otpCode"
						rules={[
							{ required: true, message: "ارسال کد فعالسازی اجباری است" },
						]}
					>
						<Input
							type="number"
							addonAfter={
								<Button htmlType="submit" disabled={disabled}>
									<ReloadOutlined onClick={onResend} />
								</Button>
							}
						/>
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" htmlType="submit">
							ثبت
						</Button>
					</Form.Item>
				</Form>
			</Spin>
		</StyledCard>
	);
};

export default Login;
