import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
const data = [
  {
    label: "Active Order",
    value: "activeOrder",
  },
  {
    label: "Closed Order",
    value: "closeOrder",
  },
  {
    label: "All Orders",
    value: "allOrder",
  },
];
const OrderTab = ({ children }) => {
  return (
    <Tabs value="activeOrder">
      <TabsHeader className="max-w-lg">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="text-sm">
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>{children}</TabsBody>
    </Tabs>
  );
};

export default OrderTab;
