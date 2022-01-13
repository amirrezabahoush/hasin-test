import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { StyledCard } from "./setpassword.styled";
import { useNavigate } from "react-router-dom";
import { setPassword } from "redux/slices/user/slice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "redux/store";

const SetPassword: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useAppSelector((state) => state.user);

	const onFinish = (values: any) => {
		const { password, repeatPassword } = values;
		if(password === repeatPassword) {
			dispatch(setPassword({id: user.id, password: password}));
		}
		navigate("/login");
	};

	return (
		<StyledCard
			title={
				<Typography.Title level={4} className="text-center">
					انتخاب رمز عبور
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
					rules={[{ required: true, message: "رمز عبور نمی تواند خالی باشد" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="تکرار رمز عبور را وارد کنید"
					name="repeatPassword"
					rules={[{required: true, message: "تکرار رمز عبور نمی تواند خالی باشد"}]}
				>
					<Input />
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
