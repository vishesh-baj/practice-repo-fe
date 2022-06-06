import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      //   sx={{ position: "absolute", bottom: 16, reight: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction
        icon={<ContentCopyIcon />}
        tooltipTitle="copy"
        tooltipOpen
      />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="share" />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
 