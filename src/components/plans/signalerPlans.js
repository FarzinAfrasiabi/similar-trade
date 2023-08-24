import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SignalerPlans({
  title,
  price,
  desc,
  id,
  offPrice,
  gift,
}) {
  return (
    <Card
      color="white"
      variant="filled"
      className="w-full h-full flex flex-col justify-between  p-8 shadow-2xl"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 flex flex-col h-full justify-between items-center rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography className=" uppercase flex text-center justify-center font-medium">
          {title}{" "}
        </Typography>
        {gift && (
          <span className="text-sm text-center font-medium pt-1 text-blue-500">
            {gift}
          </span>
        )}
        <Typography className="mt-6 flex  gap-1 text-4xl font-normal text-[#0062FF]">
          {price !== 0 ? (
            offPrice !== 0 ? (
              <>
                <span className="mt-2 text-3xl">$</span>
                {(price * (100 - offPrice)) / 100}
                <span className="self-end text-3xl">/mo</span>
              </>
            ) : (
              <></>
            )
          ) : (
            <>
              <span className="mt-2 self-start h-16 text-4xl">Free</span>
            </>
          )}
        </Typography>
        {price !== 0 ? (
          offPrice !== 0 ? (
            <span className=" text-sm text-blue-500">
              <b className="font-normal  line-through">{price}$</b>{" "}
              {`(${offPrice} % Off)`}
            </span>
          ) : null
        ) : null}
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          {desc.map((desc, i) => (
            <li key={i} className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-gray-100 p-1">
                <CheckIcon strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">{desc.value}</Typography>
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Link
          href={`/buyPlan/${id}?name=matin&planId=planId`}
          className="text-white text-center bg-[#0062ff] w-full block rounded-xl py-2 hover:scale-[1.02] focus:scale-[1.02] active:scale-100 transition-all ease-in-out duration-100"
        >
          Buy Now
        </Link>
      </CardFooter>
    </Card>
  );
}
