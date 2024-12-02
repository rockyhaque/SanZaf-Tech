import { useState } from "react";
import orderCoverImg from "../../../assets/order/order-bg.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel  } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useService from "../../../hooks/useService";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = [
    "paper",
    "plastic",
    "metal",
    "glass",
    "textile",
    "electronic",
  ];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [service] = useService();

  const paper = service.filter((item) => item.category === "paper");
  const plastic = service.filter((item) => item.category === "plastic");
  const metal = service.filter((item) => item.category === "metal");
  const glass = service.filter((item) => item.category === "glass");
  const textile = service.filter((item) => item.category === "textile");
  const electronic = service.filter((item) => item.category === "electronic");
  //   const offered = service.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Recyclo | Order Item</title>
      </Helmet>
      <Cover img={orderCoverImg} title="Order Item"></Cover>
      <div className="mt-6"></div>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Paper</Tab>
          <Tab>Plastic</Tab>
          <Tab>Metal</Tab>
          <Tab>Glass</Tab>
          <Tab>Textile</Tab>
          <Tab>Electronic</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={paper}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={plastic}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={metal}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={glass}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={textile}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={electronic}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;


