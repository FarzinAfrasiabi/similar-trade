import { Card, Typography, CardBody } from "@material-tailwind/react";
import MainTable from "../@section/table";
import { ClOSED_TABLE_ROWS } from "@/utils/fakeTabsApi";
import TableRow from "../common/tableRow";
import OrderMobileTable from "../@section/OrderMobileTable";

const TABLE_HEAD = [
  "Order",
  "Time",
  "Type",
  "Size",
  "symbol",
  "Price",
  "S/L",
  "T/P",
  "Time",
  "Price",
  "profit",
];

export default function HistoryTable({ TABLE_ROWS, isScroll = false }) {
  return (
    <>
      {/* desktop */}
      <div className="hidden xl:block">
        <Card className="w-full">
          <CardBody
            className={`h-full ${
              isScroll ? "max-h-[500px]" : "max-h-[82vh]"
            }  overflow-y-auto px-0`}
          >
            <MainTable header={TABLE_HEAD}>
              {TABLE_ROWS.map((row, index) => {
                return (
                  <tr key={index} className="border-b relative">
                    <TableRow>
                      <span
                        className={`absolute left-0 w-1 rounded-full h-full  top-0 ${
                          row.type === "Sell" ? "bg-red-500" : "bg-blue-500"
                        }`}
                      ></span>
                      <div className="flex flex-col w-full  px-2 ">
                        <span>{row.order.id}</span>
                        <span>{row.order.signal}</span>
                      </div>
                    </TableRow>
                    <TableRow>
                      <div className="flex flex-col">
                        <span>{row.time.date}</span>
                        <span>{row.time.time}</span>
                      </div>
                    </TableRow>
                    <TableRow>
                      <span className="text-sm">{row.type}</span>
                    </TableRow>
                    <TableRow>
                      <span className="text-sm">{row.size}</span>
                    </TableRow>
                    <TableRow>
                      <span className="text-sm">{row.symbol}</span>
                    </TableRow>
                    <TableRow>
                      <span className="text-sm">{row.price}</span>
                    </TableRow>
                    <TableRow>
                      <span className="text-sm">{row.sl}</span>
                    </TableRow>
                    <TableRow>
                      <span className="text-sm">{row.tp}</span>
                    </TableRow>
                    <TableRow>
                      <div className="flex flex-col">
                        <span>{row.time2.date}</span>
                        <span>{row.time2.time}</span>
                      </div>
                    </TableRow>
                    <TableRow>
                      <span className="text-sm">{row.price2}</span>
                    </TableRow>

                    <TableRow>
                      <div
                        className={`flex flex-col ${
                          row.type === "Sell"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        <span>{row.profit.up}</span>
                        <span>{row.profit.down}</span>
                      </div>
                    </TableRow>
                  </tr>
                );
              })}
            </MainTable>
          </CardBody>
        </Card>
      </div>
      {/* mobile */}
      <div className="block xl:hidden py-6">
        <OrderMobileTable data={TABLE_ROWS} />
      </div>
    </>
  );
}
