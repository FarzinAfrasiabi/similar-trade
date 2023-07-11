import { Card, Typography, CardBody } from "@material-tailwind/react";

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

const TABLE_ROWS = [
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "9999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    type: "Buy",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "9999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "9999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "9999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "999.999", down: "999" },
  },
];

export default function HistoryTable() {
  return (
    <Card className="w-full">
      <CardBody className=" h-full max-h-[550px] overflow-y-auto px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                { order, time, type, size, symbol, price, sl, tp, profit },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr
                    key={index}
                    className={` border-l-8 ${
                      type === "Sell" ? "border-red-700" : "border-blue-900"
                    } rounded-md`}
                  >
                    {/* order */}
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {order.id}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {order.signal}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      {/* time */}
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {time.date}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {time.time}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className={`${
                          type === "Sell" ? "text-red-600" : "text-blue-900"
                        }`}
                      >
                        {type}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className={`${
                          type === "Sell" ? "text-red-600" : "text-blue-900"
                        }`}
                      >
                        {size}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small">{symbol}</Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small">{price}</Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small">{sl}</Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small">{tp}</Typography>
                    </td>
                    <td className={classes}>
                      {/* time */}
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {time.date}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {time.time}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography variant="small">{price}</Typography>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className={`${
                            type === "Sell" ? "text-green-700" : "text-red-600"
                          }`}
                        >
                          {profit.up}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {profit.down}
                        </Typography>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
