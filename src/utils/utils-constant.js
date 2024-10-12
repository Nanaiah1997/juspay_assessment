import PestControlOutlinedIcon from "@mui/icons-material/PestControlOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import { theme } from "../themes/theme";

export const getNofiticationIcon = (type) => {
  switch (type) {
    case "BUG":
      return <PestControlOutlinedIcon />;
    case "NEW_REGISTER":
      return <Person2OutlinedIcon />;
    case "SUBCRIBED":
      return <SensorsOutlinedIcon />;
    default:
      return <></>;
  }
};

export const getColor = (type) => {
  switch (type) {
    case "BUG":
      return theme.palette.primary.main;
    case "NEW_REGISTER":
    case "SUBCRIBED":
      return theme.palette.secondary.main;
    default:
      return theme.palette.primary.main;
  }
};
