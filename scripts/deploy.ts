import { ethers } from "hardhat";

async function main() {
  const nft_name = "InkWork_Collection";
  const nft_symbol = "IWC";

  const InkWNFTMint = await ethers.getContractFactory("InkWNFT");
  const inkWNFTMint = await InkWNFTMint.deploy(nft_name, nft_symbol);

  await inkWNFTMint.deployed();

  console.log(`Tank Contract is deployed to: ${inkWNFTMint.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
