"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { request } from "sats-connect";

import WalletConnectMolal from "@/app/components/WalletConnectMolal";
import WalletDisconnectModal from "@/app/components/WalletDisconnectModal";
import { formatAddress } from "@/app/utils/formatAddress";
import { setStorage } from "@/app/utils/setStorage";
import { removeStorage } from "@/app/utils/removeStorage";

function Header() {
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const connectWallet = (type: string, address: string) => {
    setType(type);
    setAddress(address);
    setStorage("address", address);
    setStorage("type", type);
  };

  const disconnectWallet = async () => {
    if (type === "unisat") {
      await window.unisat.disconnect();
    } else if (type === "xverse") {
      await request("wallet_renouncePermissions");
    }
    setIsOpen(false);
    removeStorage("address");
    removeStorage("type");
    setAddress("");
    setType("");
  };

  const onClose = (params: boolean) => {
    setIsOpen(params);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Pizza Pets Logo"
            width={150}
            height={150}
            priority
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center gap-x-4 py-3 px-4 text-white text-[18px] h-[48px] min-w-[178px] border-4 border-black ring-4 ring-white hover:scale-105 duration-200 cursor-pointer"
        >
          {formatAddress(address) || "connect wallet"}
        </button>
      </div>
      {address ? (
        <WalletDisconnectModal
          walletType={type}
          isOpen={isOpen}
          onClose={onClose}
          disconnectWallet={disconnectWallet}
        />
      ) : (
        <WalletConnectMolal
          isOpen={isOpen}
          onClose={onClose}
          connectWallet={connectWallet}
        />
      )}
    </div>
  );
}

export default Header;
