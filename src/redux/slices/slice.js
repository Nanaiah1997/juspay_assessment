import { createSlice } from "@reduxjs/toolkit";
import Dashboard from "../../page/Dashboard";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import ImportContactsTwoToneIcon from "@mui/icons-material/ImportContactsTwoTone";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import ContactMailTwoToneIcon from "@mui/icons-material/ContactMailTwoTone";
import GroupsTwoToneIcon from "@mui/icons-material/GroupsTwoTone";
import LocalMallTwoToneIcon from "@mui/icons-material/LocalMallTwoTone";

const initialState = {
  text: "name",
  sidebar: {
    Favorites: [
      {
        id: 1,
        title: "Overiew",
      },
      {
        id: 2,
        title: "Projects",
      },
    ],
    Dashboard: [
      {
        id: 1,
        title: "Default",
        url: "/dashboard/default",
        key: "default",
      },
      {
        id: 2,
        title: "eCommerce",
        url: "/dashboard/order",
        key: "order",
        icon: <LocalMallTwoToneIcon />,
      },
      {
        id: 3,
        title: "Projects",
        url: "",
        icon: <FolderOpenOutlinedIcon />,
      },
      {
        id: 4,
        title: "Online Couse",
        url: "",

        icon: <ImportContactsTwoToneIcon />,
      },
    ],
    pages: [
      {
        id: 1,
        title: "Overiew",
        icon: <AccountBoxTwoToneIcon />,
        submenu: [
          {
            id: 1,
            title: "OverView",
            url: "",
          },
          {
            id: 2,
            title: "projects",
            url: "",
          },
          {
            id: 3,
            title: "documnents",
            url: "",
          },
          {
            id: 4,
            title: "follwers",
            url: "",
          },
          {
            id: 5,
            title: "Couse",
            url: "",
          },
        ],
      },
      {
        id: 2,
        title: "Account",
        icon: <ContactMailTwoToneIcon />,
      },
      {
        id: 3,
        title: "Corporate",
        icon: <GroupsTwoToneIcon />,
      },
      {
        id: 4,
        title: "Blog",
        icon: <AccountBoxTwoToneIcon />,
      },
      {
        id: 5,
        title: "Social",
        icon: <AccountBoxTwoToneIcon />,
      },
    ],
  },
  showNotificationBar: false,
  notifications: [
    {
      title: "You have a bug that needs to be fixed in your code. ",
      time: "Just now",
      type: "BUG",
    },
    {
      title: "New user registered",
      time: "59 minutes ago",
      type: "NEW_REGISTER",
    },
    {
      title: "You have a bug that needs to be fixed in your code.",
      time: "12 hours ago",
      type: "BUG",
    },
    {
      title: "Andi lane subcribed to you",
      time: "Today, 11.59 AM",
      type: "SUBCRIBED",
    },
  ],
  activities: [
    {
      title: "You have a bug that needs to be fixed in your code. ",
      time: "Just now",
      profile_image: "/static/images/avatar/1.jpg",
    },
    {
      title: "Release a new version",
      time: "59 minutes ago",
      profile_image: "/static/images/avatar/2.jpg",
    },
    {
      title: "Submitted a bug",
      time: "12 hours ago",
      profile_image: "/static/images/avatar/3.jpg",
    },
    {
      title: "Modified A data in page X",
      time: "Today, 11.59 AM",
      profile_image: "/static/images/avatar/4.jpg",
    },
    {
      title: "Deleted A page in Project X",
      time: "Feb 2, 2023",
      profile_image: "/static/images/avatar/5.jpg",
    },
  ],
  contacts: [
    {
      name: "Notali Craig",

      profile_image: "/static/images/avatar/1.jpg",
    },
    {
      name: "Drew Cano",

      profile_image: "/static/images/avatar/2.jpg",
    },
    {
      name: "Orlando Diigs",

      profile_image: "/static/images/avatar/3.jpg",
    },
    {
      name: "Andi Lane",

      profile_image: "/static/images/avatar/4.jpg",
    },
    {
      name: "Kate Marrison",

      profile_image: "/static/images/avatar/5.jpg",
    },
    {
      name: "Karay Okumus",

      profile_image: "/static/images/avatar/6.jpg",
    },
  ],
  ecommercedata: [
    {
      category: "Customers",
      totalCount: 3781,
      changeRatePercentage: 11.05,
      type: "customer",
    },
    {
      category: "Orders",
      totalCount: 1219,
      changeRatePercentage: -0.03,
      type: "order",
    },
    {
      category: "Revenue",
      totalAmount: 695,
      changeRatePercentage: 15.03,
      type: "revenue",
    },
    {
      category: "Performance",
      changeRate: 30.1,
      changeRatePercentage: 6.08,
      type: "performance",
    },
  ],
};

const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  reducers: {
    setShowNotificationBar: (state, { payload }) => {
      state.showNotificationBar = !state.showNotificationBar;
    },
  },
});

export default dashboardSlice;
export const { setShowNotificationBar } = dashboardSlice?.actions;
