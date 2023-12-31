import Layout from "@/container/layout";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="w-full  h-screen flex items-center justify-center">
      {/* image */}
      <div className="flex flex-col w-full items-center gap-y-4">
        <div className="h-full w-full max-w-2xl p-2 ">
          <Image
            src={"/images/pages/404.svg"}
            alt="404 page"
            className="h-full w-full "
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <h1 className="text-6xl font-bold text-center">Error 404 :(</h1>
          <h2 className="text-center text-3xl font-bold">
            Opp &#39;s This page Not Found
          </h2>
          <h3 className="text-sm text-center text-blue-gray-300">
            Go to Dashboard Page
          </h3>
          <div className="mx-auto">
            <Link
              href="/dashboard"
              className="p-2 px-10 bg-blue-500 text-gray-100 rounded-lg"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
