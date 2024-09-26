import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import SidebarDrawer from "./SidebarDrawer";
import { NavItems } from "../../utils/NavItems/NavItems";
import Navbar from "../ui/Navbar";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const items = NavItems.map((item, index) => ({
    key: index + 1,
    label: `${item.name}`,
}));

const App: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Navbar />
            {/* <Header style={{ display: "flex", alignItems: "center" }}>
                <div className="demo-logo" />
                 <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header> */}    
            <Content style={{ padding: "0 48px" }}>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default function MainLayout() {
    return (
        <div>
            <App />
        </div>
    );
}
