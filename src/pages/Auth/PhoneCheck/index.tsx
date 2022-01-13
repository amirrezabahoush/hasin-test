import React, { useState } from "react";
import { Form, Input, Button, Typography, Row, Col, Spin } from "antd";
import { StyledCard } from "./phonecheck.styled";
import { useNavigate } from "react-router-dom";
import { ReloadOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { getCode } from "redux/slices/code/slice";
import { useAppSelector } from "redux/store";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const dispatch  = useDispatch();
	const user = useAppSelector(state => state.user);
	const [isLoading, setIsLoading] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const onResend = () => {
		setIsLoading(true);
		dispatch(getCode({id: user.id}));
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
		setDisabled(true);
		setTimeout(() => {
			setDisabled(false);
		}, 2 * 60000);
	};

	const onFinish = (values: any) => {
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
								name="phone_number"
								// rules={[
								// 	{ required: true, message: "Please input your password!" },
								// ]}
							>
								<Input type="number" 
								addonAfter={
									<Button htmlType="submit" disabled={disabled}>
										<ReloadOutlined onClick={onResend} />
									</Button>}  
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
