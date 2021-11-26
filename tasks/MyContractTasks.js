task("read-number", "Reads the Number from the output") //what is task all about
  .addParam("contract", "The contract") //what parameter does task take
  .setAction(async (taskArgs) => {
    //put the logic of task in here
    const contractAddr = taskArgs.contract;
    const MyFirstContract = await ethers.getContractFactory("MyFirstContract");

    //contract deployment and signing information/account details
    const accounts = await ethers.getSigners();
    const signer = accounts[0]; //first acc
    const myFirstContract = await new ethers.Contract(
      contractAddr,
      MyFirstContract.interface,
      signer
    );

    let result = BigInt(await myFirstContract.getNumber()).toString();

    console.log("Value Stored is: " + result);
  });

task("write-number", "Writing the Number from the Input") //what is task all about
  .addParam("contract", "The contract") //what parameter does task take
  .addParam("value", "Input Value")
  .setAction(async (taskArgs) => {
    //put the logic of task in here
    const contractAddr = taskArgs.contract;
    const value = taskArgs.value;

    const MyFirstContract = await ethers.getContractFactory("MyFirstContract");

    //contract deployment and signing information/account details
    const accounts = await ethers.getSigners();
    const signer = accounts[0]; //first acc
    const myFirstContract = await new ethers.Contract(
      contractAddr,
      MyFirstContract.interface,
      signer
    );

    let result = await myFirstContract.setNumber(value)

    console.log("Value Input is: " + value);
  });

module.exports = {};


//run task as : npx hardhat <task from available task> --<contractparam1> <contract deployed to param1value> --<param2> <param2 value>