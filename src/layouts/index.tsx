import Wrapper from "./Wrapper";

import Stack from "@mui/material/Stack";
import Header from "components/Header";
import Footer from "components/Footer";

const MainLayout = () => (
  <Stack>
    <Header />
    <Wrapper />
    <Footer />
  </Stack>
);

export default MainLayout;
