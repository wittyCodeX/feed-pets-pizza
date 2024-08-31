import React from "react";
import Image from "next/image";
import Modal from "react-modal";

type WalletModalProps = {
  walletType: string;
  isOpen: boolean;
  onClose: (params: boolean) => void;
  disconnectWallet: () => void;
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

const WalletDisConnectMolal = ({
  walletType,
  isOpen,
  onClose,
  disconnectWallet,
}: WalletModalProps) => {
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
          onClick={() => disconnectWallet()}
          className="flex items-center justify-center gap-x-4 py-3 px-4 mx-auto my-5 text-white text-[15px] h-[48px] min-w-[250px] border-4 border-black ring-4 ring-white hover:scale-105 duration-200 cursor-pointer"
        >
          <Image
            src={
              walletType === "unisat"
                ? "/unisat-logo.svg"
                : `/${walletType}-logo.png`
            }
            alt="magiceden"
            width={20}
            height={20}
            priority
          />{" "}
          Disconnect
        </button>
      </Modal>
    </div>
  );
};

export default WalletDisConnectMolal;
