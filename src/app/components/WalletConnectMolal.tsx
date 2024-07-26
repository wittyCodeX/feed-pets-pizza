import React, { useState, useEffect, useLayoutEffect } from "react";
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
        contentLabel="Example Modal"
      >
        this is modal
      </Modal>
    </div>
  );
};

export default WalletConnectMolal;
