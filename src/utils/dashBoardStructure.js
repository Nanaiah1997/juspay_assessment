import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import ImportContactsTwoToneIcon from "@mui/icons-material/ImportContactsTwoTone";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import ContactMailTwoToneIcon from "@mui/icons-material/ContactMailTwoTone";
import GroupsTwoToneIcon from "@mui/icons-material/GroupsTwoTone";
import LocalMallTwoToneIcon from "@mui/icons-material/LocalMallTwoTone";

export const sidebar = {
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
};
