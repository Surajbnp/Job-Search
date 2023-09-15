import { Box, Flex, HStack, Button, useColorModeValue } from "@chakra-ui/react";
import styles from "../styles/navbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  let token = localStorage.getItem("inventryToken");

  return (
    <>
      <Box
        width={"100%"}
        fontFamily={"Rubik, 'sans-serif'"}
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box className={styles.logo}>MYJOBS</Box>
          </HStack>

          <Box>
            <Button
              height={"40px"}
              fontSize={{ base: "12px", md: "14px" }}
              fontWeight={200}
              background={"#6E40FF"}
              color={"white"}
              onClick={() => {
                if (token) {
                  localStorage.clear();
                  navigate("/");
                } else {
                  navigate("/login");
                }
              }}
            >
              {token ? "Logout" : "Login"}
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
