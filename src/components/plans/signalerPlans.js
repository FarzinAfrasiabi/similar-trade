import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function SignalerPlans({ title, price, desc }) {
  return (
    <Card color="white" variant="filled" className="w-full  p-8 shadow-2xl">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography variant="small" className="font-normal uppercase">
          {title}
        </Typography>
        <Typography
          variant="h1"
          className="mt-6 flex justify-center gap-1 text-5xl font-normal text-[#0062FF]"
        >
          {price !== 0 ? (
            <>
              <span className="mt-2 text-4xl">$</span>
              {price}
              <span className="self-end text-4xl">/mo</span>
            </>
          ) : (
            <>
              <span className="mt-2 text-4xl">Free</span>
            </>
          )}
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          {desc.map((desc , i) => (
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
        <Button
          size="lg"
          className="text-white bg-[#0062ff] hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
/**
 * <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon strokeWidth={2} className="h-3 w-3" />
            </span>
            <Typography className="font-normal">5 team members</Typography>
          </li>
 */
