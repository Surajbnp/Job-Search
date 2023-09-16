import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "../styles/homepage.module.css";
import { BiSearchAlt } from "react-icons/bi";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../redux/data/action";

const HomePage = () => {
  const jobs = useSelector((state) => state?.jobs) || [];
  const isLoading = useSelector((state) => state?.isLoading);
  const [serachTerm, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getJobs(serachTerm));
  };

  useEffect(() => {
    dispatch(getJobs());
  }, []);

  return (
    <Box className={styles.container}>
      {/* Search bar started */}

      <Box className={styles.searchBox}>
        <Box className={styles.bar}>
          <input
            type="search"
            placeholder="Search by job title..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <Box onClick={handleSearch}>{<BiSearchAlt size={"25px"} />}</Box>
        </Box>
      </Box>

      {/* Search bar started */}

      {/* Job card started */}
      <Box>
        {isLoading ? (
          <h1 className={styles.loaders}>{"Loading..."}</h1>
        ) : (
          <Box className={styles.cards}>
            {jobs?.length === 0 && isLoading === false ? (
              <h1 className={styles.loaders}>{"No Jobs Found !"}</h1>
            ) : (
              jobs?.map((e, index) => {
                return <Card {...e} key={index} />;
              })
            )}
          </Box>
        )}
      </Box>

      {/* Job card ended */}
    </Box>
  );
};

export default HomePage;
