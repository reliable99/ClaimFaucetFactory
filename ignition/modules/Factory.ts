import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ClaimFaucetFactorymodule = buildModule("ClaimFaucetFactoryModule", (m) => {

  const claimFaucetFactory = m.contract("ClaimFaucetFactory");

  return { claimFaucetFactory };
});

export default ClaimFaucetFactorymodule;