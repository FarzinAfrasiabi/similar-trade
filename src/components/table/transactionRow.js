const { IconButton } = require("@material-tailwind/react");
const {
  TableRow,
  TableCell,
  Collapse,
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
} = require("@mui/material");
const { Fragment, useState } = require("react");
const { HiChevronUp, HiChevronDown } = require("react-icons/hi");

function TransaxtionRow(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <TableRow
        className="relative transition-all ease-in-out duration-150"
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        <th
          className={`absolute left-0 w-2 h-full ${
            row.status === "unpaid"
              ? "bg-orange-500"
              : row.status === "progressing"
              ? "bg-blue-500"
              : row.status === "Decliend"
              ? "bg-red-500"
              : "bg-green-500"
          }`}
        ></th>
        <TableCell>
          <button
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiChevronUp /> : <HiChevronDown />}
          </button>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.paymentId}
        </TableCell>
        <TableCell className="text-red-600  text-sm" align="right">
          {row.type}
        </TableCell>
        <TableCell align="right">{row.ammount}</TableCell>
        <TableCell align="right" className="text-red-600  text-sm">
          {row.method}
        </TableCell>
        <TableCell align="right">
          <button
            type="button"
            className={`p-2 w-24 rounded-md font-semibold ${
              row.status === "unpaid"
                ? "bg-orange-100 text-orange-700"
                : row.status === "progressing"
                ? "bg-blue-100 text-blue-600 "
                : row.status === "Decliend"
                ? "bg-red-100 text-red-600 "
                : "bg-green-100 text-green-600"
            }`}
          >
            {row.status}
          </button>
          {/* {showPassword ? (
              <CopyToClipboard
                text={"A12154ar234wef"}
                onCopy={() => {
                  toast.success("Copied to clipBoard");
                  setTimeout(() => {
                    setShowPassword(false);
                  }, 2000);
                }}
              >
                <button className="p-2 px-6 rounded-lg shadow-md text-sm bg-gray-300 ">
                  <span className="flex items-center gap-x-2 ">
                    A12154ar234wef{" "}
                    <HiOutlineClipboardDocument className="text-2xl text-gray-700" />
                  </span>
                </button>
              </CopyToClipboard>
            ) : (
              <button
                type="button"
                className="p-2 px-6 rounded-lg shadow-md text-sm bg-gray-300 "
                onClick={() => setShowPassword(true)}
              >
                Password
              </button>
            )} */}
        </TableCell>
      </TableRow>
      <TableRow className="relative">
        <th
          className={`absolute left-0 w-2 h-full ${
            row.status === "unpaid"
              ? "bg-orange-500"
              : row.status === "progressing"
              ? "bg-blue-500"
              : row.status === "Decliend"
              ? "bg-red-500"
              : "bg-green-500"
          }`}
        ></th>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>start</TableCell>
                    <TableCell>expiredTime</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {row.startTime}
                    </TableCell>
                    <TableCell>{row.expireTime}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}
export default TransaxtionRow;
