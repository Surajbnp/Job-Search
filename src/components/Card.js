import React from "react";
import styles from "../styles/card.module.css";
import { Box, Text } from "@chakra-ui/react";
import { ImOffice } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const Card = ({
  date,
  job_title,
  company_name,
  location,
  salary,
  summary,
  url,
}) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/apply", {
      state: {
        date,
        job_title,
        company_name,
        location,
        salary,
        summary,
        url,
      },
    });
  };

  return (
    <Box className={styles.cardContainer}>
      <Box className={styles.officeIcon}>
        <ImOffice size={"30px"} color="grey" />
      </Box>
      <Box className={styles.info}>
        <Text className={styles.dateTxt}>{date}</Text>
        <Text className={styles.jobTitle}>
          {job_title.length > 8
            ? `${job_title.slice(0, 30)}...`
            : job_title}
        </Text>
        <Text className={styles.companyName}>{company_name}</Text>
        {/* <Text className={styles.salaryTxt}>{salary}</Text> */}
        <Box className={styles.detailsDiv}>
          <Text className={styles.locationTxt}>{location}</Text>
          <button className={styles.viewBtn} onClick={handleViewDetails}>
            View Details
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
