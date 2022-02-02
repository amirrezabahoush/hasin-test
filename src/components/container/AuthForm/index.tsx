import React from "react";
import { Form, Button, Typography } from "antd";
import { StyledCard } from "./AuthForm.styled";

const AuthForm: React.FC<{
	title: string;
	onFinish(values: any): void;
	submitText: string;
}> = (props) => {
	return (
		<StyledCard
			title={
				<Typography.Title level={4} className="text-center">
					{props.title}
				</Typography.Title>
			}
			bordered={false}
		>
			<Form
				name="basic"
				labelCol={{ span: 24 }}
				wrapperCol={{ span: 24 }}
				onFinish={props.onFinish}
				autoComplete="off"
				className="form-wrapper"
			>
				{props.children}
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						{props.submitText}
					</Button>
				</Form.Item>
			</Form>
		</StyledCard>
	);
};

export default AuthForm;
