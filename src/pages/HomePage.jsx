import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "../styles/homepage.module.css";
import { BiSearchAlt } from "react-icons/bi";
import data from "../components/data";
import Card from "../components/Card";

const HomePage = () => {
  return (
    <Box className={styles.container}>
      {/* Search bar started */}

      <Box className={styles.searchBox}>
        <Box className={styles.bar}>
          <input type="search" placeholder="Filter by job title..." />
          <Box>{<BiSearchAlt size={"25px"} />}</Box>
        </Box>
      </Box>

      {/* Search bar started */}

      {/* Job card started */}
      <Box className={styles.cards}>
        {data.length &&
          data.map((e, index) => {
            return <Card {...e} key={index} />;
          })}
      </Box>

      {/* Job card ended */}
    </Box>
  );
};

export default HomePage;
