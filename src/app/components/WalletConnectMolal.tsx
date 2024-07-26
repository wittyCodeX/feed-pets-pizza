import React, { useState, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import Modal from "react-modal";

type WalletModalProps = {
  isOpen: boolean;
  onClose: (params: boolean) => void;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FF5400",
  },
};

const WalletConnectMolal = ({ isOpen, onClose }: WalletModalProps) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => onClose(false)}
        style={customStyles}
        ariaHideApp={false}
        className="relative transform overflow-hidden bg-[#FF5400] border-4 border-black ring-4 ring-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
        contentLabel="Example Modal"
      >
        <button
          //   onClick={}
          className="flex items-center justify-center gap-x-4 py-3 px-4 mx-auto mb-5 text-white text-[15px] h-[48px] min-w-[250px] border-4 border-black ring-4 ring-white hover:scale-105 duration-200 cursor-pointer"
        >
          <Image
            src="/magic-eden-logo.png"
            alt="magiceden"
            width={20}
            height={20}
            priority
          />{" "}
          magiceden
        </button>
        <button
          //   onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center gap-x-4 py-3 px-4 mx-auto mb-5 text-white text-[15px] h-[48px] min-w-[250px] border-4 border-black ring-4 ring-white hover:scale-105 duration-200 cursor-pointer"
        >
          <Image
            src="/xverse-logo.png"
            alt="xverse"
            width={20}
            height={20}
            priority
          />{" "}
          xverse
        </button>
        <button
          //   onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center gap-x-4 py-3 px-4 mx-auto text-white text-[15px] h-[48px] min-w-[250px] border-4 border-black ring-4 ring-white hover:scale-105 duration-200 cursor-pointer"
        >
          <Image
            src="/unisat.svg"
            alt="unisat"
            width={20}
            height={20}
            priority
          />{" "}
          unisat
        </button>
      </Modal>
    </div>
  );
};

export default WalletConnectMolal;
