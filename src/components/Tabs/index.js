import dynamic from "next/dynamic";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const PieChart = dynamic(() => import("./../chart/pieChart"), { ssr: false });

export default function CustomTabs() {
  const label = [
    { label: "Dayli", value: "daily", series: [65, 35] },
    { label: "Monthly", value: "monthly", series: [45, 55] },
    { label: "Yearly", value: "yearly", series: [20, 80] },
  ];
  return (
    <Tabs className="w-full px-4" value="daily">
      <TabsHeader className="text-sm font-semibold">
        {label.map(({ label, value }) => (
          <Tab className="rounded-full" key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {label.map(({ value, series }) => (
          <TabPanel key={value} value={value}>
            <PieChart series={series} />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
