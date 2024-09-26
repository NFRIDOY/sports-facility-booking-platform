import React, { useState } from "react";
import { Button, Drawer, Menu, Space } from "antd";
import { NavItems } from "../../utils/NavItems/NavItems";
import { CiMenuBurger } from "react-icons/ci";

const SidebarDrawer: React.FC = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const items = NavItems.map((item, index) => ({
        key: index + 1,
        label: `${item.name}`,
    }));

    return (
        <>
            <Space>
                <Button type="primary" onClick={showDrawer}>
                    <CiMenuBurger />
                </Button>
            </Space>
            <Drawer
                
                placement={"left"}
                closable={false}
                onClose={onClose}
                open={open}>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={items}
                    style={{
                        /* border: 1px solid red; */
                        margin: 0,
                        padding: 0,
                    }}
                />
            </Drawer>
        </>
    );
};

export default SidebarDrawer;
