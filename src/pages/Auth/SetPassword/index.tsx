import React from "react";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { setPassword } from "redux/slices/user/slice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "redux/store";
import { AuthForm } from "components/container";
import { SetPasswordValues } from "./SetPassword.props";
import Regex from "utils/regex";

const SetPassword: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useAppSelector((state) => state.user);

	const onFinish = (values: SetPasswordValues) => {
		const { password, repeatPassword } = values;
		if (password === repeatPassword) {
			dispatch(setPassword({ id: user.id, password: password }));
		}
		navigate("/login");
	};

	return (
		<AuthForm submitText="ثبت" onFinish={onFinish} title="انتخاب رمز عبور">
			<Form.Item
				label="رمز عبور را وارد کنید"
				name="password"
				rules={[
					{ required: true, message: "رمز عبور نمی تواند خالی باشد" },
					{
						pattern: Regex.password,
						message: 'رمز عبور باید شامل 6 کاراکتر عددی باشد',
					},
				]}
			>
				<Input.Password />
			</Form.Item>
			<Form.Item
				label="تکرار رمز عبور را وارد کنید"
				name="repeatPassword"
				rules={[
					{ required: true, message: "تکرار رمز عبور نمی تواند خالی باشد" },
					{
						pattern: Regex.password,
						message: 'رمز عبور باید شامل 6 کاراکتر عددی باشد',
					},
				]}
			>
				<Input.Password />
			</Form.Item>
		</AuthForm>
	);
};

export default SetPassword;
