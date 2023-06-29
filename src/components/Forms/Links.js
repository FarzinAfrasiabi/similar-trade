import Link from "next/link";

const Links = ({ href, text }) => {
  return (
    <Link
      href={`${href}`}
      className="text-blue-600 text-sm hover:underline hover:underline-offset-2"
    >
      {text}
    </Link>
  );
};

export default Links;
