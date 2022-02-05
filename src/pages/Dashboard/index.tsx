import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getTickets } from "redux/slices/tickets/slice";
import { useAppSelector } from "redux/store";
import { StyledCard } from "pages/User/Profile/profile.styled";
import { Table } from "antd";

const Dashboard: React.FC = () => {
	const dispatch = useDispatch();
	const tickets = useAppSelector((state) => state.ticket.tickets);

	const onGetTickets = useCallback(
		() => {
			dispatch(getTickets());
		},
		[dispatch]);

	useEffect(() => {
		onGetTickets();
	}, [onGetTickets]);

	const columns = [
		{
			key: 'row',
			dataIndex: 'row',
			title: 'ردیف'
		},
		{
			key: 'messageStatus',
			dataIndex: 'messageStatus',
			title: 'وضعیت'
		},
		{
			key: 'message',
			dataIndex: 'message',
			title: 'پیام'
		},
		{
			key: 'creationDate',
			dataIndex: 'creationDate',
			title: 'تاریخ ایجاد'
		},
		{
			key: 'lastUpdate',
			dataIndex: 'lastUpdate',
			title: 'آخرین به روز رسانی'
		},
		{
			key: 'addressLink',
			dataIndex: 'addressLink',
			title: 'لینک'
		},
	]

	return (
		<StyledCard>
			<Table
				columns={columns}
				dataSource={tickets.map((item, index) => ({ ...item, row: index + 1 }))}
				scroll={{ x: 500 }}
			/>
		</StyledCard>
	);
};

export default Dashboard;
