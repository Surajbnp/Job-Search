import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "../styles/homepage.module.css";
import { BiSearchAlt } from "react-icons/bi";

const HomePage = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.searchBox}>
        <Box className={styles.bar}>
          <input type="search" placeholder="Filter by job title..." />
          <Box>{<BiSearchAlt size={'25px'}/>}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
