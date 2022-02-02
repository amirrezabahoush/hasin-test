import React from "react";
import { Typography, Form, Button, Input } from "antd";
import { StyledCard } from "../Profile/profile.styled";
import { useDispatch } from "react-redux";
import { changePassword } from "redux/slices/user/slice";
import { ChangePasswordFormValues } from "./types";
import { Notification } from "components/container";

const Profile: React.FC = () => {
	const dispatch = useDispatch();

	const onChangePassword = (values: ChangePasswordFormValues) => {
    const { renewPassword, ...rest } = values;
    if(values.renewPassword !== values.newPasswoord) {
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
					{ required: true, message: "ورود رمز عبور قبلی الزامی است" }
				]}
			>
				<Input.Password />
			</Form.Item>
			<Form.Item
				label="رمز عبور جدید"
				name="newPassword"
				rules={[
					{ required: true, message: "ورود رمز عبور جدید الزامی است" }
				]}
			>
				<Input.Password />
			</Form.Item>
			<Form.Item
				label="تکرار رمز عبور جدید"
				name="renewPassword"
				rules={[
					{ required: true, message: "ورود تکرار رمز عبور جدید الزامی است" }
				]}
			>
				<Input.Password />
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

export default Profile;
