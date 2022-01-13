import React, { useEffect,useCallback } from "react";
import { Typography } from "antd";
import { StyledCard } from "./dashboard.styled";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "redux/slices/user/slice";
import { useAppSelector } from "redux/store";

const Dashboard: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const notification = useAppSelector((state) => state.notification);
	const userDetails = useAppSelector((state) => state.user.details);

	console.log(userDetails);
	
	const getUserDetails = useCallback(
		() => {
			dispatch(getUser());
		},
		[dispatch, getUser],
	)

	useEffect(() => {
		getUserDetails();
	}, [getUserDetails]);


	return (
		<StyledCard
			title={
				<Typography.Title level={4} className="text-center">
					اطلاعات کاربر
				</Typography.Title>
			}
			bordered={false}
		>

		</StyledCard>
	);
};

export default Dashboard;
