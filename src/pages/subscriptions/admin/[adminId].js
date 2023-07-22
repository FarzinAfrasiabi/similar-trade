import SubscribePage from "@/components/subscribe/page";
import { useRouter } from "next/router";

const SubscribeAdminId = () => {
  return <SubscribePage isAdmin={true} />;
};

export default SubscribeAdminId;
