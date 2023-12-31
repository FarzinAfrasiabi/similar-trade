import GetSignalIcon from "@/components/icons/navigation/GetSignalIcon";
import TradeIcon from "@/components/icons/navigation/TradeIcon";
import DashboaradIcon from "@/components/icons/navigation/dashboardIcon";
import ProfileIcon from "@/components/icons/navigation/profileIcon";
import ServerIcon from "@/components/icons/navigation/serverIcon";
import SubScriptionIcon from "@/components/icons/navigation/subscrptionIcon";
import TransActionIcon from "@/components/icons/navigation/transActionIcon";
import ChatIcon from "@/components/icons/public/chatIcon";

export const navigation = [
  { name: "Dashboard", path: "/dashboard", icon: () => DashboaradIcon() },
  { name: "Get Signal", path: "/getsignal", icon: () => GetSignalIcon() },
  { name: "Order", path: "/order/123", icon: () => TradeIcon() },
  {
    name: "Subscriptions",
    path: "/subscriptions/admin/",
    icon: () => SubScriptionIcon(),
  },
  { name: "Servers", path: "/servers/user", icon: () => ServerIcon() },
  { name: "TransActions", path: "/transaction", icon: () => TransActionIcon() },
  { name: "Profile", path: "/Profile", icon: () => ProfileIcon() },
  { name: "Tickets", path: "/tickets", icon: () => ChatIcon() },
];

export const mobileNavigation = [
  { name: "Get Signal", path: "/getsignal", icon: () => GetSignalIcon() },
  { name: "Order", path: "/order/4235", icon: () => TradeIcon() },
  { name: "Dashboard", path: "/dashboard", icon: () => DashboaradIcon() },
  {
    name: "Subscriptions",
    path: "/subscriptions/admin",
    icon: () => SubScriptionIcon(),
  },
  { name: "TransActions", path: "/transaction", icon: () => TransActionIcon() },
];

export const quickAccessNavigation = [
  { name: "Get Signal", path: "/getsignal", icon: () => GetSignalIcon() },
  { name: "Order", path: "/order/4235", icon: () => TradeIcon() },
  { name: "Dashboard", path: "/dashboard", icon: () => DashboaradIcon() },
  {
    name: "Subscriptions",
    path: "/subscriptions/admin",
    icon: () => SubScriptionIcon(),
  },
  { name: "TransActions", path: "/transaction", icon: () => TransActionIcon() },
  { name: "Profile", path: "/Profile", icon: () => ProfileIcon() },
];
