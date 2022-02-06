import React, { useEffect, useCallback, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { getTickets } from "redux/slices/tickets/slice";
import { useAppSelector } from "redux/store";
import { StyledCard } from "pages/User/Profile/profile.styled";
import {
	Button,
	Col,
	Form,
	FormInstance,
	Input,
	Modal,
	Row,
	Table,
	Typography,
} from "antd";
import { FormValues } from "./Ticket.types";
import { addTicket, removeTicket } from "services/Tickets";
import { Notification } from "components/container";
import { DeleteOutlined } from "@ant-design/icons";
import { TicketTypes } from "types";

const Dashboard: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isRemoveModalVisible, setIsRemoveModalVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [selected, setSelected] = useState<TicketTypes>();
	const dispatch = useDispatch();
	const tickets = useAppSelector((state) => state.ticket.tickets);
	const form = useRef<FormInstance<FormValues> | any>();

	const onGetTickets = useCallback(() => {
		dispatch(getTickets());
	}, [dispatch]);

	useEffect(() => {
		onGetTickets();
	}, [onGetTickets]);

	const onRemove = async () => {
		if (selected) {
			setIsLoading(true);
			try {
				const response = await removeTicket(selected.appUserSuggestionId);
				const notificationProps = {
					type: "success",
					description: response.data.message,
					key: "message",
				};
				response.status === 200 && Notification(notificationProps);
				onGetTickets();
			} finally {
				setIsLoading(false);
			}
		}
	};

	const columns = [
		{
			key: "row",
			dataIndex: "row",
			title: "ردیف",
		},
		{
			key: "messageStatus",
			dataIndex: "messageStatus",
			title: "وضعیت",
		},
		{
			key: "message",
			dataIndex: "message",
			title: "پیام",
		},
		{
			key: "creationDate",
			dataIndex: "creationDate",
			title: "تاریخ ایجاد",
		},
		{
			key: "lastUpdate",
			dataIndex: "lastUpdate",
			title: "آخرین به روز رسانی",
		},
		{
			key: "addressLink",
			dataIndex: "addressLink",
			title: "لینک",
		},
		{
			key: "action",
			title: "عملیات",
			render: (item: TicketTypes[], record: TicketTypes) => {
				return (
					<>
						<Row justify="center" gutter={4}>
							<Col xs={24}>
								<DeleteOutlined
									onClick={() => {
										setSelected(record);
										setIsRemoveModalVisible(true);
									}}
								/>
							</Col>
						</Row>
					</>
				);
			},
		},
	];

	const onSubmit = async (values: FormValues) => {
		setIsLoading(true);
		try {
			const response = await addTicket(values);
			const notificationProps = {
				type: "success",
				description: response.data.message,
				key: "message",
			};
			response.status === 200 && Notification(notificationProps);
			onGetTickets();
		} finally {
			setIsLoading(false);
			setIsVisible(false);
			form.current?.resetFields()();
		}
	};

	const handleCancel = () => {
		setIsVisible(false);
	};

	return (
		<StyledCard>
			<Row justify="start" className="mb-1">
				<Col xs={24}>
					<Typography.Title className="page-title">
						لیست تیکت های ثبت شده
					</Typography.Title>
				</Col>
			</Row>

			<Row justify="end" className="mb-1">
				<Col>
					‌‌
					<Button type="primary" onClick={() => setIsVisible(true)}>
						ثبت تیکت جدید
					</Button>
				</Col>
			</Row>

			<Table
				columns={columns}
				dataSource={tickets.map((item, index) => ({ ...item, row: index + 1 }))}
				scroll={{ x: 500 }}
			/>
			<Modal
				visible={isVisible}
				title="افزودن تیکت جدید"
				closable
				onCancel={handleCancel}
				footer={null}
			>
				<Form
					className="form-wrapper"
					onFinish={onSubmit}
					labelCol={{ span: 24 }}
					wrapperCol={{ span: 24 }}
					ref={form}
				>
					<Form.Item name="addressLink" label="آدرس لینک">
						<Input />
					</Form.Item>
					<Form.Item name="message" label="پیام">
						<Input.TextArea rows={4} />
					</Form.Item>
					<Row justify="end">
						<Button type="primary" htmlType="submit" loading={isLoading}>
							ثبت تیکت
						</Button>
					</Row>
				</Form>
			</Modal>

			<Modal
				visible={isRemoveModalVisible}
				onCancel={() => setIsRemoveModalVisible(false)}
				title="حذف تیکت"
				closable
				footer={null}
			>
				<Row className="mb-1">
					<Col xs={25}>
						آیا از حذف تیکت با id {selected?.appUserSuggestionId} مطمئن هستید؟
					</Col>
				</Row>
				<Row justify="end">
					<Button
						type="primary"
						htmlType="submit"
						loading={isLoading}
						onClick={onRemove}
						className="ml-1"
					>
						حذف تیکت
					</Button>
					<Button
						type="primary"
						htmlType="submit"
						danger
						onClick={() => setIsRemoveModalVisible(false)}
						className="mr-1"
					>
						انصراف
					</Button>
				</Row>
			</Modal>
		</StyledCard>
	);
};

export default Dashboard;
