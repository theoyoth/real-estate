import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Houses - Real Estate</title>
    </Head>
    <Box maxW="1280px" m="auto">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Box>
  </>
);
export default Layout;
