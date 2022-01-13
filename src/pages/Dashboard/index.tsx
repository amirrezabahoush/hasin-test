import React from "react";
import { Typography, Table } from "antd";
import { StyledCard } from "./dashboard.styled";
import { NavLink, useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {

	const columns = [
		{
			title: 'ردیف',
			dataIndex: 'row',
			key: 'row',
		},
		{
			title: 'نوع کاربر',
			dataIndex: 'userType',
			key: 'userType',
		},
		{
			title: 'کد ملی',
			dataIndex: 'nationalId',
			key: 'nationalId',
		},
		{
			title: 'شماره همراه',
			dataIndex: 'mobile',
			key: 'mobile',
		},
		{
			title: 'ایمیل',
			dataIndex: 'email',
			key: 'email',
		},
	];
	
	const dataSource = [
		{
			row: '1',
			userType: 'ایرانی',
			nationalId: '0014202077',
			mobile: '09121234567',
			email: 's.k@gmail.com'
		}
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
			<Table
				dataSource={dataSource}
				columns={columns}
				pagination={false}
				scroll={{ x: 240 }}
			/>
		</StyledCard>
	);
};

export default Dashboard;