async function main() {
  const MyFirstContract = await ethers.getContractFactory("MyFirstContract");
  const MyfirstContract = await MyFirstContract.deploy();

  console.log("Contract deployed to:", MyfirstContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
