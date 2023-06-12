import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import {
  YoutubeFilled,
  InstagramFilled,
  BehanceOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import "./style.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="py-4 px-10 flex justify-between items-center">
        <div>
          <Link to="/">
            <img src="/images/rast-mobile-logo.PNG" alt="logo" />
          </Link>
        </div>
        <div className="flex-grow text-lg flex justify-center">
          <ul className="flex justify-center">
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
        <div>
          <div className="flex social-buttons">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
