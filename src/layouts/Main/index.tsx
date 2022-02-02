import React from "react";
import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { StyledContent, StyledDiv } from "./Main.styled";

const { Header, Footer } = Layout;

const MainLayout: React.FC = () => {
	return (
		<Layout className="layout">
			<Header>
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
					<Menu.Item key="1">داشبورد</Menu.Item>
					<Menu.Item key="2">پروفایل</Menu.Item>
					<Menu.Item key="3">تغییر رمز عبور</Menu.Item>
				</Menu>
			</Header>
			<StyledContent style={{ padding: "50px" }}>
				<StyledDiv>
					<Outlet />
				</StyledDiv>
			</StyledContent>
			<Footer className="text-center">Created by Amirreza Bahoush, 2022</Footer>
		</Layout>
	);
};

export default MainLayout;
