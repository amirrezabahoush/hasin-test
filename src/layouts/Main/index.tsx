import React from "react";
import { Layout, Menu } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { StyledContent, StyledDiv } from "./Main.styled";

const { Header, Footer } = Layout;

const MainLayout: React.FC = () => {
	return (
		<Layout className="layout">
			<Header>
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
					<Menu.Item key="1">
						<NavLink to={"/dashboard"}>داشبورد</NavLink>
					</Menu.Item>
					<Menu.Item key="2">
						<NavLink to={"/profile"}>پروفایل</NavLink>
					</Menu.Item>
					<Menu.Item key="3">
						<NavLink to={"/change-password"}>تغییر رمز عبور</NavLink>
					</Menu.Item>
				</Menu>
			</Header>
			<StyledContent style={{ padding: "50px" }}>
				<Outlet />
			</StyledContent>
			<Footer className="text-center">Created by Amirreza Bahoush, 2022</Footer>
		</Layout>
	);
};

export default MainLayout;
