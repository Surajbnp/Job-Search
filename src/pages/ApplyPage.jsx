import React from "react";
import styles from "../styles/apply.module.css";
import { Box, Text, Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { ImOffice } from "react-icons/im";
import { ImLocation2 } from "react-icons/im";
import ApplyModel from "../components/ApplyModel";

const ApplyPage = () => {
  const details = useLocation();
  // const navigate = useNavigate();
  const { date, job_title, company_name, location, salary, url, summary } =
    details?.state;

  return (
    <Box className={styles.container}>
      <Box className={styles.design}>
        <Box className={styles.companyName}>
          <Box className={styles.logo}>
            <ImOffice size={"30px"} />
          </Box>
          <Box className={styles.mainDetails}>
            <Box>
              <Text className={styles.name}>
                {company_name.length > 20
                  ? `${company_name.slice(0, 20)}...`
                  : company_name}
              </Text>
              <Text className={styles.locationtxt}>
                <ImLocation2 size={"22px"} />
                <Text>{location}</Text>
              </Text>
            </Box>
            <Box>
              <Button h={"50px"} className={styles.siteBtn} bg={"#F652A0"}>
                <a href={url}>Company Site</a>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.summaryCont}>
        <Box className={styles.summaryDiv}>
          <Text className={styles.summarydate}>{date}</Text>
          <Text className={styles.summaryTitle}>{job_title}</Text>
          <Text className={styles.heading}>Summary</Text>
          <Text className={styles.summaryTxt}>{summary}</Text>
          <Text className={styles.heading}>Salary range</Text>
          <Text
            color={"#F652A0"}
            fontWeight={600}
            className={styles.summaryTxt}
          >
            {salary}
          </Text>
        </Box>
        <Box className={styles.applyDiv}>
          <Box>
            <Text className={styles.applyName}>
              {company_name.length > 20
                ? `${company_name.slice(0, 20)}...`
                : company_name}
            </Text>
          </Box>
          <Box>
            <ApplyModel companyName={company_name} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ApplyPage;
