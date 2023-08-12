import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Page500 = () => {
  return (
    <div className="w-full  h-screen flex items-center justify-center">
      {/* image */}
      <div className="flex flex-col items-center gap-y-4 w-full">
        <div className="h-full w-full max-w-3xl p-2 ">
          <Image
            src={"/images/pages/500.svg"}
            alt="404 page"
            className="h-full w-full "
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <h1 className="text-6xl font-bold text-center">Error 500 :(</h1>
          <Typography variant="h3" paragraph>
            500 Internal Server Error
          </Typography>
          <Typography align="center" sx={{ color: "text.secondary" }}>
            There was an error, please try again later.
          </Typography>

          <h3 className="text-sm text-center text-blue-gray-300">
            Go to Home Page
          </h3>
          <div className="mx-auto">
            <Link
              href="/"
              className="p-2 px-10 bg-blue-500 text-gray-100 rounded-lg"
            >
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page500;
