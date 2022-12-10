import React, { ReactNode } from "react";
import { Button, Dropdown, DropDownProps, Menu, MenuProps } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { ItemType } from "antd/es/menu/hooks/useItems";

export type CoffeeMenuProps = {
  items: ItemType[];
  children: ReactNode;
};


const CoffeesMenu = ({ children, items }: CoffeeMenuProps) => (
  <>
    <Dropdown menu={{ items }}>
      <Button className='w-100'>{children}</Button>
    </Dropdown>
  </>
);

export default CoffeesMenu;
