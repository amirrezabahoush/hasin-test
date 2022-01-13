import React from "react";
import { Typography, Table, Row, Col } from "antd";
import { StyledCard } from "./dashboard.styled";

const Dashboard: React.FC = () => {
	const columns = [
		{
			title: "ردیف",
			dataIndex: "row",
			key: "row",
		},
		{
			title: "نوع کاربر",
			dataIndex: "userType",
			key: "userType",
		},
		{
			title: "کد ملی",
			dataIndex: "nationalId",
			key: "nationalId",
		},
		{
			title: "شماره همراه",
			dataIndex: "mobile",
			key: "mobile",
		},
		{
			title: "ایمیل",
			dataIndex: "email",
			key: "email",
		},
	];

	const dataSource = [
		{
			row: "1",
			userType: "ایرانی",
			nationalId: "0014202077",
			mobile: "091212345127",
			email: "s.k@gmail.com",
		},
	];

	return (
		<StyledCard
			title={
				<Typography.Title level={4} className="text-center">
					اطلاعات کاربر
				</Typography.Title>
			}
			bordered={false}
		>
			<Row>
				<Col xs={12} className="bold mt-1">
					ملیت:
				</Col>
				<Col xs={12} className="mt-1">
					ایرانی
				</Col>
				<Col xs={12} className="bold my-1">
					کد ملی:
				</Col>
				<Col xs={12} className="my-1">
					0014202077
				</Col>
				<Col xs={12} className="bold my-1">
					شماره همراه:
				</Col>
				<Col xs={12} className="my-1">
					091212345127
				</Col>
				<Col xs={12} className="bold my-1">
					ایمیل:
				</Col>
				<Col xs={12} className="my-1">
					s.k@gmail.com
				</Col>
			</Row>
			{/* <Table
				dataSource={dataSource}
				columns={columns}
				pagination={false}
				scroll={{ x: 240 }}
			/> */}
		</StyledCard>
	);
};

export default Dashboard;
