import React, { useState } from "react";
import { Form, Input, Button, Typography, Row, Col, Spin } from "antd";
import { StyledCard } from "./phonecheck.styled";
import { useNavigate } from "react-router-dom";
import { ReloadOutlined } from "@ant-design/icons";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const onResend = () => {
		setIsLoading(true);
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
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					onFinish={onFinish}
					autoComplete="off"
				>
					<Row>
						<Col xs={16}>
							<Form.Item
								label="کد فعالسازی"
								name="phone_number"
								// rules={[
								// 	{ required: true, message: "Please input your password!" },
								// ]}
							>
								<Input type="number" />
							</Form.Item>
						</Col>

						<Col xs={8}>
							<Button type="dashed" htmlType="submit" disabled={disabled}>
								<ReloadOutlined onClick={onResend} />
							</Button>
						</Col>
					</Row>

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
