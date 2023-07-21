require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const GOERLI_API_KEY = "ae3OzmpM1JasPX0iaecGfwYKQoUXw9q0";
const MUMBAI_API_KEY = "hpcXKkqJChVko41pgHgC0Ke7Q2FnObPX";
const SETPOL_API_KEY = "g7kof-D1M_Xd9EPO6Y2-O3I4rePI-BVJ";

module.exports = {
  solidity: "0.8.17",

  networks: {
    goerli:{
      url: `https://eth-goerli.g.alchemy.com/v2/${GOERLI_API_KEY}`,
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 5
    },
    mumbai:{
      url: `https://eth-mainnet.g.alchemy.com/v2/${MUMBAI_API_KEY}`,
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 80001
    },
    setpol:{
      url: `https://eth-sepolia.g.alchemy.com/v2/${SETPOL_API_KEY}`,
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 11155111
    }
  },
  etherscan: {
    apiKey: "QK6B5GSTFJXAFPSVWH3CVRIBFIE6YMSJDQ"
  },
};