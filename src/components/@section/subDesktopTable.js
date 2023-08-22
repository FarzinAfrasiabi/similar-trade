// import { TableRow } from "@mui/material";
import SubScribeAction from "../actions/subAction";
import TableRow from "../common/tableRow";

const SubDescTable = ({ row, onClick, active = false }) => {
  return (
    <tr className="border-b relative">
      <TableRow>
        <span
          className={`absolute left-0 w-1 rounded-full h-full  top-0 ${
            active ? "bg-yellow-600" : "bg-red-500"
          } `}
        ></span>
        <div className="flex flex-col w-full  px-2 ">
          <span>{row.userName.user}</span>
          <span>{row.userName.id}</span>
        </div>
      </TableRow>

      <TableRow>
        <span className="text-sm">{row.botMode}</span>
      </TableRow>
      <TableRow>
        <div className="flex flex-col">
          <span>{row.startTime.date}</span>
          <span>{row.startTime.time}</span>
        </div>
      </TableRow>
      <TableRow>
        <div className="flex flex-col">
          <span>{row.endTime.date}</span>
          <span>{row.endTime.time}</span>
        </div>
      </TableRow>
      <TableRow>
        <span className="text-sm">{row.Broker}</span>
      </TableRow>
      <TableRow>
        <span className="text-sm">{row.BrokerId}</span>
      </TableRow>
      <TableRow>
        <span className="text-sm">{row.order}</span>
      </TableRow>
      <TableRow>
        <span className="text-sm">{row.earnedProfit}</span>
      </TableRow>
      <TableRow>
        <SubScribeAction onClick={onClick} />
      </TableRow>
    </tr>
  );
};

export default SubDescTable;
