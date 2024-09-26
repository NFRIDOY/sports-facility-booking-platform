import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import SidebarDrawer from "./SidebarDrawer";
import { NavItems } from "../../utils/NavItems/NavItems";

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
            <Header style={{ display: "flex", alignItems: "center" }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <SidebarDrawer />
            <Content style={{ padding: "0 48px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}>
                    Content
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
