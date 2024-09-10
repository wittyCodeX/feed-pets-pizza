"use client";
import React from "react";
import Image from "next/image";
import Modal from "react-modal";
import { AddressPurpose, request } from "sats-connect";

type WalletModalProps = {
  isOpen: boolean;
  onClose: (params: boolean) => void;
  connectWallet: (type: string, address: string) => void;
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

const WalletConnectMolal = ({
  isOpen,
  onClose,
  connectWallet,
}: WalletModalProps) => {
  const handleConnectUnisatWallet = async () => {
    try {
      if (typeof window.unisat !== "undefined") {
        let accounts = await window.unisat.requestAccounts();
        if (accounts) {
          onClose(false);
          connectWallet("unisat", accounts[0] || "");
          console.log("connect success", accounts);
        }
      } else {
        alert("UniSat Wallet is not installed! Please install now");
      }
    } catch (e) {
      console.log("connect failed");
    }
  };

  const handleConnectXverseWallet = async () => {
    try {
      const response = await request("getAccounts", {
        purposes: [
          AddressPurpose.Ordinals,
          AddressPurpose.Payment,
          AddressPurpose.Stacks,
        ],
        message: "SATS Connect Pizza Pets",
      });
      console.log(response);
      if (response.status === "success") {
        const address = response.result.find(
          (address) => address.purpose === AddressPurpose.Payment
        )?.address;
        onClose(false);
        connectWallet("xverse", address || "");
      }
    } catch (error) {
      alert("Xverse Wallet is not installed! Please install now");
      console.log("error: ", error);
    }
  };

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
          onClick={handleConnectXverseWallet}
          className="flex items-center justify-center gap-x-4 py-3 px-4 mx-auto mb-5 text-white text-[15px] h-[48px] min-w-[250px] border-4 border-black ring-4 ring-white hover:scale-105 duration-200 cursor-pointer"
        >
          <Image
            src="/xverse-logo.png"
            alt="xverse"
            width={20}
            height={20}
            priority
          />{" "}
          Xverse
        </button>
        <button
          onClick={handleConnectUnisatWallet}
          className="flex items-center justify-center gap-x-4 py-3 px-4 mx-auto text-white text-[15px] h-[48px] min-w-[250px] border-4 border-black ring-4 ring-white hover:scale-105 duration-200 cursor-pointer"
        >
          <Image
            src="/unisat-logo.svg"
            alt="unisat"
            width={20}
            height={20}
            priority
          />{" "}
          Unisat
        </button>
      </Modal>
    </div>
  );
};

export default WalletConnectMolal;
