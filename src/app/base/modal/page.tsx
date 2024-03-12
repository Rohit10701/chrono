"use client";
import Button from "@/components/base/Button";
import Input from "@/components/base/Input";
import Modal, {
  ModalContent,
  ModalTitle,
  ModalWrapper,
} from "@/components/base/Modal/Modal";
import Pill from "@/components/base/Pill";
import React, { useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <ModalWrapper>
          <ModalTitle>This is my modal title</ModalTitle>
          <ModalContent>
            {/* Some element like form input text anything */}
            <Pill />
          </ModalContent>
        </ModalWrapper>
      </Modal>
      <Button onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default Page;
