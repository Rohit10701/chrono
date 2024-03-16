"use client";
import Button from "@/components/base/Button";
import Modal, {
  ModalContent,
  ModalTitle,
  ModalWrapper,
} from "@/components/base/Modal";
import Pill from "@/components/base/Pill";
import React, { useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} >
        <ModalWrapper>
          <ModalTitle>This is my modal title</ModalTitle>
          <ModalContent className="flex flex-col">
            {/* Some element like form input text anything */}
            <Pill className="bg-pink-400 w-4"/>
            <Pill className="bg-pink-400"/>
            <Pill className="bg-pink-400"/>

          </ModalContent>
        </ModalWrapper>
      </Modal>
      <Button onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default Page;
