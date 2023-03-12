import Box from "@mui/material/Box";

import { Outlet } from "react-router-dom";

const Wrapper = () => (
  <Box>
    <Outlet />
  </Box>
);

export default Wrapper;
