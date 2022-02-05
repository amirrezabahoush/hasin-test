import React from "react";
import { Row, Col, Typography, Form, Button, Input } from "antd";
import { StyledCard } from "../Profile/profile.styled";
import { useDispatch } from "react-redux";
import { changePassword } from "redux/slices/user/slice";
import { ChangePasswordFormValues } from "./types";
import { Notification } from "components/container";
import Regex from "utils/regex";

const Profile: React.FC = () => {
	const dispatch = useDispatch();

	const onChangePassword = (values: ChangePasswordFormValues) => {
		const { renewPassword, ...rest } = values;
		if (values.renewPassword !== values.newPasswoord) {
			const notificationProps = {
				type: "error",
				description: 'رمز عبور جدید با تکرار آن یکسان نیست',
				key: "message"
			};
			Notification(notificationProps);
		}
		dispatch(changePassword(rest));
	};

	return (
		<StyledCard
			title={
				<Typography.Title level={4} className="text-center">
					تغییر رمز عبور
				</Typography.Title>
			}
			bordered={false}
		>
			<Form
				name="changePassword"
				labelCol={{ span: 24 }}
				wrapperCol={{ span: 24 }}
				onFinish={onChangePassword}
				autoComplete="off"
				className="form-wrapper"
			>
				<Form.Item
					label="رمز عبور قبلی"
					name="oldPassword"
					rules={[
						{ required: true, message: "ورود رمز عبور قبلی الزامی است" },
						{
							pattern: Regex.password,
							message: 'رمز عبور باید شامل 6 کاراکتر عددی باشد',
						},
					]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item
					label="رمز عبور جدید"
					name="newPassword"
					rules={[
						{ required: true, message: "ورود رمز عبور جدید الزامی است" },
						{
							pattern: Regex.password,
							message: 'رمز عبور باید شامل 6 کاراکتر عددی باشد',
						},
					]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item
					label="تکرار رمز عبور جدید"
					name="renewPassword"
					rules={[
						{ required: true, message: "ورود تکرار رمز عبور جدید الزامی است" },
						{
							pattern: Regex.password,
							message: 'رمز عبور باید شامل 6 کاراکتر عددی باشد',
						},
					]}
				>
					<Input.Password />
				</Form.Item>
				<Row className="text-center">
					<Col xs={24} xl={12} className="mt-2 mx-auto">
						<Button type="primary" htmlType="submit" className="w-100">
							ثبت
						</Button>
					</Col>
				</Row>
			</Form>
		</StyledCard>
	);
};

export default Profile;
