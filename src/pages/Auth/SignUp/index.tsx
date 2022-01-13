import React from "react";
import { Form, Select, InputNumber, Input, Button, Typography } from "antd";
import { StyledCard } from "./login.styled";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
	const navigate = useNavigate();

	const onFinish = (values: any) => {
		navigate("/signup/check-phone");
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
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				onFinish={onFinish}
				autoComplete="off"
			>
				<Form.Item
					label="نوع کاربر"
					name="user_type"
					// rules={[{ required: true, message: "لطفا یک مورد را انتخاب کنید" }]}
				>
					<Select>
						<Select.Option value="iranian">ایرانی</Select.Option>
						<Select.Option value="foreiner">خارجی</Select.Option>
					</Select>
				</Form.Item>

				<Form.Item
					label="کد ملی"
					name="national_code"
					// rules={[{ required: true, message: "Please input your password!" }]}
				>
					<Input type="number" />
				</Form.Item>

				<Form.Item
					label="شماره همراه"
					name="phone_number"
					// rules={[{ required: true, message: "Please input your password!" }]}
				>
					<InputNumber />
				</Form.Item>

				<Form.Item
					label="ایمیل"
					name="email"
					// rules={[{ required: true, message: "Please input your password!" }]}
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
