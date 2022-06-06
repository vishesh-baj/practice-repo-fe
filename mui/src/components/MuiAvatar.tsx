import { Stack, Avatar, AvatarGroup } from "@mui/material";
const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ backgroundColor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ backgroundColor: "success.light" }}>CD</Avatar>
        <Avatar sx={{ backgroundColor: "warning.light" }}>WW</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/women/55.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/women/16.jpg" />
        <Avatar
          src="https://randomuser.me/api/portraits/women/4.jpg"
          alt="Jane Doe"
        />
        <Avatar />
      </Stack>
      {/* Avatar group */}
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={2}>
          <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/women/55.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/women/16.jpg" />
          <Avatar
            src="https://randomuser.me/api/portraits/women/4.jpg"
            alt="Jane Doe"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar
          sx={{ backgroundColor: "primary.light", width: 48, height: 48 }}
        >
          BW
        </Avatar>
        <Avatar
          sx={{ backgroundColor: "success.light", width: 48, height: 48 }}
        >
          CD
        </Avatar>
        <Avatar
          variant="square"
          sx={{ backgroundColor: "warning.light", width: 48, height: 48 }}
        >
          WW
        </Avatar>
      </Stack>
    </Stack>
  );
};
export default MuiAvatar;


