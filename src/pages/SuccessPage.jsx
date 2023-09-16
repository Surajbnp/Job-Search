import React from "react";
import styles from "../styles/success.module.css";
import { Box, Text } from "@chakra-ui/react";
import { useLocation , useNavigate} from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let { companyName, name, email } = location?.state;

  return (
    <Box className={styles.successContainer}>
      <Box className={styles.successPage}>
        <Box className={styles.gifCont}>
          <img
            width={"50%"}
            src="https://cdnl.iconscout.com/lottie/premium/thumb/successfully-done-5627021-4699001.gif"
            alt="success-avatar"
          />
        </Box>
        <Text
          className={styles.successTxt}
        >{`Dear ${name}, Thanks for applying in ${companyName}`}</Text>
        <ul className={styles.points}>
          <li>You will get an email confirmation at</li>
          <Text className={styles.mailTxt}>{email}</Text>
          <li>
            This employer typically responds to applications within 3 days
          </li>
          <li>Keep track of your applications</li>
        </ul>
        <Box className={styles.returnBtn}>
          <button onClick={() => navigate('/')}>Return to Job search</button>
        </Box>
      </Box>
    </Box>
  );
};

export default SuccessPage;
