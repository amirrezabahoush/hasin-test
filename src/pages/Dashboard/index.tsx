import React, { useEffect, useCallback } from "react";
import { Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { getUser } from "redux/slices/user/slice";
import { useAppSelector } from "redux/store";

const Dashboard: React.FC = () => {
	const dispatch = useDispatch();
	const user = useAppSelector((state) => state.user.details);

	const getUserDetails = useCallback(
		() => {
			dispatch(getUser());
		},
		[dispatch]);

	useEffect(() => {
		getUserDetails();
	}, [getUserDetails])

	return (
			<Row>
				<Col xs={12} className="bold mt-1">
					ملیت:
				</Col>
				<Col xs={12} className="mt-1">
					{user.userType ? user.userType === 1 ? 'ایرانی' : 'خارجی' : ''}
				</Col>
				<Col xs={12} className="bold my-1">
					کد ملی:
				</Col>
				<Col xs={12} className="my-1">
					{user.mrcCode}
				</Col>
				<Col xs={12} className="bold my-1">
					شماره همراه:
				</Col>
				<Col xs={12} className="my-1">
					{user.cellphone}
				</Col>
				<Col xs={12} className="bold my-1">
					ایمیل:
				</Col>
				<Col xs={12} className="my-1">
					{user.mail}
				</Col>
			</Row>
	);
};

export default Dashboard;
