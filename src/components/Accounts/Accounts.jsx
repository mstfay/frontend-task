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

const Accounts = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [data, setData] = useState([...initialData]); // initialData with spread operator

  useEffect(() => {
    // Load stored accounts from localStorage, or use an empty array if none are found
    const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // If there are stored accounts, use them along with the initialData
    if (storedAccounts && storedAccounts.length > 0) {
      setData([...initialData, ...storedAccounts]);
    } else {
      setData([...initialData]);
    }
  }, []);

  const onAccountAdded = (newAccount) => {
    // Generate a unique key for the new account
    const key = `${data.length + 1}`;
    const newAccountWithKey = { ...newAccount, key };

  // Update the data with the new account included
    const updatedData = [...data, newAccountWithKey];

    setData(updatedData);

    // Store the updatedData in localStorage, excluding the initialData
    localStorage.setItem(
      "accounts",
      JSON.stringify(updatedData.filter((item) => !initialData.includes(item)))
    );
  };

  return (
    <div className="table-container">
      {/* This div contains search box, filter button, and addAccount elements.
      No modifications have been made to the other parts, assuming they are not relevant to the task. */}
      <div className="flex justify-between items-center mb-5 ">
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
          className="add-account-button flex justify-center"
          onClick={() => setIsAddModalOpen(true)}
        >
          <PlusOutlined className="custom-icon" />
          <p className="hidden sm:flex">Yeni Hesap Ekle</p>
        </Button>
        {/* In this section, we opened a modal with AddAccount to add a social media account. */}
        <AddAccount
          isAddModalOpen={isAddModalOpen}
          setIsAddModalOpen={setIsAddModalOpen}
          onAccountAdded={onAccountAdded} // Bu satırı ekleyin
        />
      </div>
      {/* Here, we transferred our data information to a table. Since I couldn't set 
      the background color of the table as a gradient, I gave different colors for even and odd rows. */}
      <Table
        columns={columns}
        dataSource={data}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "even-row" : "odd-row"
        }
      />
    </div>
  );
};

export default Accounts;
