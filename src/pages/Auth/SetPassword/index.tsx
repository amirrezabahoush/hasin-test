import React from "react";
import { Form, Input, Button, Typography, Row, Col } from "antd";
import { StyledCard } from "./setpassword.styled";
import { useNavigate } from "react-router-dom";

const SetPassword: React.FC = () => {
	const navigate = useNavigate();

	const onFinish = (values: any) => {
		navigate("/signup/login");
	};

	return (
		<StyledCard
			title={
				<Typography.Title level={4} className="text-center">
					رمز عبور
				</Typography.Title>
			}
			bordered={false}
		>
			<Form
				name="SetPassword"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				onFinish={onFinish}
				autoComplete="off"
			>
				<Row>
					<Col xs={16}>
						<Form.Item
							label="رمز عبور را وارد کنید"
							name="password"
							// rules={[
							// 	{ required: true, message: "رمز عبور نمی تواند خالی باشد" },
							// ]}
						>
							<Input type="number" />
						</Form.Item>
					</Col>
					<Col xs={16}>
						<Form.Item
							label="تکرار رمز عبور را وارد کنید"
							name="re_password"
							// rules={[
							// 	{
							// 		required: true,
							// 		message: "تکرار رمز عبور نمی تواند خالی باشد",
							// 	},
							// ]}
						>
							<Input type="number" />
						</Form.Item>
					</Col>
				</Row>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						ثبت
					</Button>
				</Form.Item>
			</Form>
		</StyledCard>
	);
};

export default SetPassword;
