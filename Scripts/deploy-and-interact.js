const hre = require("hardhat");

async function main() {
  // define your testnet_account in hardhat.config.js
  const testnetAccount = await hre.reef.getSignerByName("tests");

  const NFTMarket = await hre.reef.getContractFactory(
    "NFTMarketPlace",
    testnetAccount
  );
  const nftMarketPlace = await NFTMarket.deploy();

  const NFTToken = await hre.reef.getContractFactory(
    "CinemaNFT",
    testnetAccount
  );
  const nftContract = await NFTToken.deploy();

  console.log("Deploy done");
  console.log({
    token: nft.address,
  });
  console.log({
    name: await nft.name(),
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
