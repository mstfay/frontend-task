import React, { useState, useEffect } from "react";
import AddAccount from "./AddAccount";
import { Input, Button, Table } from "antd";
import { PlusOutlined, SearchOutlined, FilterFilled } from "@ant-design/icons";
import initialData from "./initialData";
import "./style.css";

const { Search } = Input;

const columns = [
  {
    title: "Sosyal Medya Linki",
    dataIndex: "link",
    sorter: {
      compare: (a, b) => a.link.localeCompare(b.link),
      multiple: 3,
    },
  },
  {
    title: "Sosyal Medya Adı",
    dataIndex: "name",
    sorter: {
      compare: (a, b) => a.name.localeCompare(b.name),
      multiple: 3,
    },
  },
  {
    title: "Açıklama",
    dataIndex: "description",
    sorter: {
      compare: (a, b) => a.description.localeCompare(b.description),
      multiple: 2,
    },
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Accounts = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [data, setData] = useState([...initialData]); // initialData with spread operator

  useEffect(() => {
    const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // If there are stored accounts, use them along with the initialData
    if (storedAccounts && storedAccounts.length > 0) {
      setData([...initialData, ...storedAccounts]);
    } else {
      setData([...initialData]);
    }
  }, []);

  const onAccountAdded = (newAccount) => {
    const key = `${data.length + 1}`;
    const newAccountWithKey = { ...newAccount, key };

    const updatedData = [...data, newAccountWithKey];

    setData(updatedData);
    localStorage.setItem(
      "accounts",
      JSON.stringify(updatedData.filter((item) => !initialData.includes(item)))
    ); // filter out initialData
  };

  return (
    <div className="table-container">
      <div className="flex justify-between items-center mb-5">
        <div className="flex">
          <Search
            placeholder="Search objects..."
            size="large"
            className="custom-search"
            enterButton={
              <Button
                style={{
                  backgroundColor: "#744bfc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopRightRadius: "39px",
                  borderBottomRightRadius: "39px",
                }}
              >
                <SearchOutlined style={{ color: "#fff" }} />
              </Button>
            }
          />
          <Button className="filter-button ml-2">
            <FilterFilled style={{ color: "#744bfc", fontSize: "16px" }} />
          </Button>
        </div>
        <Button
          className="add-account-button"
          onClick={() => setIsAddModalOpen(true)}
        >
          <PlusOutlined className="custom-icon" />
          <span>Yeni Hesap Ekle</span>
        </Button>
        <AddAccount
          isAddModalOpen={isAddModalOpen}
          setIsAddModalOpen={setIsAddModalOpen}
          onAccountAdded={onAccountAdded} // Bu satırı ekleyin
        />
      </div>
      <Table columns={columns} dataSource={data} onChange={onChange} rowClassName={(record, index) => (index % 2 === 0 ? "even-row" : "odd-row")}/>
    </div>
  );
};

export default Accounts;
