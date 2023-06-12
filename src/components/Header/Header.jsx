import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Drawer } from "antd";
import {
  YoutubeFilled,
  InstagramFilled,
  BehanceOutlined,
  LinkedinFilled,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./style.css";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="md:px-12 xs: px-6">
      <div className="py-4 lg:px-10 flex justify-between items-center">
        <div className="logo-container">
          <Link to="/">
            <img src="/images/rast-mobile-logo.PNG" alt="logo" />
          </Link>
        </div>
        <div className="flex-grow md:text-sm lg:text-lg flex justify-center">
          <ul className="flex justify-center nav-links">
            <li className="mx-6">
              <Link to="/" className="hover-underline">
                Hakkımızda
              </Link>
            </li>
            <li className="mx-6">
              <Link to="/" className="hover-underline">
                Jüri - Yarışma Yazılımı
              </Link>
            </li>
            <li className="mx-6">
              <Link to="/" className="hover-underline">
                Word Ninja
              </Link>
            </li>
            <li className="mx-6">
              <Link to="/" className="hover-underline">
                Word Pyramids
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="md:flex social-buttons xs:hidden">
            <Button>
              <YoutubeFilled />
            </Button>
            <Button>
              <InstagramFilled />
            </Button>
            <Button>
              <BehanceOutlined />
            </Button>
            <Button>
              <LinkedinFilled />
            </Button>
          </div>
          <div className="menu-icon md:hidden canvas-menu">
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Drawer
              placement="left"
              closable={false}
              onClose={onClose}
              visible={visible}
              width={350}
            >
              <div className="flex justify-between mb-3">
                <Link to="/" className="pl-0">
                  <img src="/images/rast-mobile-logo.PNG" alt="logo" />
                </Link>
                <Button className="mt-2 border-0" onClick={onClose}>
                  <CloseOutlined className="flex justify-center align-middle"/>
                </Button>
              </div>
              <ul className="text-drawer">
                <li>
                  <Link to="/">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Jüri - Yarışma Yazılımı
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex justify-center align-middle">
                    Word Ninja
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Word Pyramids
                  </Link>
                </li>
              </ul>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
