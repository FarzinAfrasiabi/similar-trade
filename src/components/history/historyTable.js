import { Card, Typography, CardBody } from "@material-tailwind/react";
import MainTable from "../@section/table";
import { ClOSED_TABLE_ROWS } from "@/utils/fakeTabsApi";
import TableRow from "../common/tableRow";
import { BiEdit, BiTrash } from "react-icons/bi";

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
  "swap",
  "commission",
  "profit",
  "Modify",
];

export default function HistoryTable({ TABLE_ROWS, isScroll = false }) {
  return (
    <Card className="w-full">
      <CardBody
        className={`h-full ${
          isScroll ? "max-h-[500px]" : "max-h-[82vh]"
        }  overflow-y-auto px-0`}
      >
        <MainTable header={TABLE_HEAD}>
          {ClOSED_TABLE_ROWS.map((row, index) => {
            return (
              <tr key={index} className="py-2 border-b">
                <TableRow>
                  <div className="flex flex-col">
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
                    <span>{row.time2.data}</span>
                    <span>{row.time2.time}</span>
                  </div>
                </TableRow>
                <TableRow>
                  <span className="text-sm">{row.price2}</span>
                </TableRow>
                <TableRow>
                  <span className="text-sm">{row.swap}</span>
                </TableRow>
                <TableRow>
                  <span className="text-sm">{row.commission}</span>
                </TableRow>
                <TableRow>
                  <div className="flex flex-col">
                    <span>{row.profit.up}</span>
                    <span>{row.profit.down}</span>
                  </div>
                </TableRow>
                <TableRow>
                  <div className="flex gap-x-2 justify-center">
                    <button className=" text-center hover:text-blue-500">
                      <BiEdit className="text-2xl" />
                    </button>
                    <button className="text-2xl text-center hover:text-red-500">
                      <BiTrash className="text-2xl" />
                    </button>
                  </div>
                </TableRow>
              </tr>
            );
          })}
        </MainTable>
      </CardBody>
    </Card>
  );
}
