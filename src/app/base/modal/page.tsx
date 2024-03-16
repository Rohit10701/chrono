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
      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} href="/base/infinitescroll">
        hello world
      </Modal>
      <Button onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default Page;
