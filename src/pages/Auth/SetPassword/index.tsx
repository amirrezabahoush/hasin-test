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
				labelCol={{ span: 24 }}
				wrapperCol={{ span: 24 }}
				onFinish={onFinish}
				autoComplete="off"
				className="form-wrapper"
			>
					<Form.Item
							label="رمز عبور را وارد کنید"
							name="password"
							// rules={[
							// 	{ required: true, message: "رمز عبور نمی تواند خالی باشد" },
							// ]}
						>
							<Input type="number" />
						</Form.Item>
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
