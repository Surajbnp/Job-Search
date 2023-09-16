import React, { useState } from "react";
import styles from "../styles/applymodal.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ApplyModel({ companyName }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleApply = (e) => {
    e.preventDefault();
    console.log("first");
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      navigate("/apply/success", {
        state: {
          companyName,
          name,
          email,
        },
      });
    }, 2000);
  };

  return (
    <>
      <Button bg={"#F652A0"} className={styles.applyBtn} onClick={onOpen}>
        Apply Now
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Your Information</ModalHeader>
          <ModalCloseButton />
          <form  onSubmit={handleApply}>
            <ModalBody pb={6}>
              <div className={styles.inputBox}>
                <label>Name</label>
                <input
                  placeholder="enter name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.inputBox}>
                <label>Email</label>
                <input
                  type="email"
                  required
                  placeholder="enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.inputBox}>
                <label>Cover Letter</label>
                <textarea className={styles.textArea}></textarea>
              </div>
              <div className={styles.inputBox}>
                <label>Upload resume</label>
                <input type="file" />
              </div>
            </ModalBody>

            <ModalFooter>
              <Button
                isLoading={loader}
                loadingText="Applying"
                variant="outline"
                bg="#F652A0"
                mr={3}
               type="submit"
              >
                Apply
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
