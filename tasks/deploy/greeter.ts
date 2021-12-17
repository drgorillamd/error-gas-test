import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import type {
  ErrorLongName,
  ErrorOneArg,
  ErrorOneNamedArg,
  ErrorOneString,
  ErrorThreeArgs,
  ErrorTwoArgs,
  ErrorWithoutArgs,
  RequireWithString,
  RequireWithoutString,
} from "../../src/types/";

import type {
  ErrorLongName__factory,
  ErrorOneArg__factory,
  ErrorOneNamedArg__factory,
  ErrorOneString__factory,
  ErrorThreeArgs__factory,
  ErrorTwoArgs__factory,
  ErrorWithoutArgs__factory,
  RequireWithString__factory,
  RequireWithoutString__factory,
} from "../../src/types/";

task("deploy all").setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const ErrorLongNameFactory: ErrorLongName__factory = <ErrorLongName__factory>(
    await ethers.getContractFactory("ErrorLongName")
  );
  const ErrorOneArgFactory: ErrorOneArg__factory = <ErrorOneArg__factory>(
    await ethers.getContractFactory("ErrorOneArgy")
  );
  const ErrorOneNamedArgFactory: ErrorOneNamedArg__factory = <ErrorOneNamedArg__factory>(
    await ethers.getContractFactory("ErrorOneNamedArg")
  );
  const ErrorOneStringFactory: ErrorOneString__factory = <ErrorOneString__factory>(
    await ethers.getContractFactory("ErrorOneString")
  );
  const ErrorThreeArgsFactory: ErrorThreeArgs__factory = <ErrorThreeArgs__factory>(
    await ethers.getContractFactory("ErrorThreeArgs")
  );
  const ErrorTwoArgsFactory: ErrorTwoArgs__factory = <ErrorTwoArgs__factory>(
    await ethers.getContractFactory("ErrorTwoArgs")
  );
  const ErrorWithoutArgsFactory: ErrorWithoutArgs__factory = <ErrorWithoutArgs__factory>(
    await ethers.getContractFactory("ErrorWithoutArgs")
  );
  const RequireWithStringFactory: RequireWithString__factory = <RequireWithString__factory>(
    await ethers.getContractFactory("RequireWithString")
  );
  const RequireWithoutStringFactory: RequireWithoutString__factory = <RequireWithoutString__factory>(
    await ethers.getContractFactory("RequireWithoutString")
  );

  const ErrorLongName: ErrorLongName = <ErrorLongName>await ErrorLongNameFactory.deploy();
  const ErrorOneArg: ErrorOneArg = <ErrorOneArg>await ErrorOneArgFactory.deploy();
  const ErrorOneNamedArg: ErrorOneNamedArg = <ErrorOneNamedArg>await ErrorOneNamedArgFactory.deploy();
  const ErrorOneString: ErrorOneString = <ErrorOneString>await ErrorOneStringFactory.deploy();
  const ErrorThreeArgs: ErrorThreeArgs = <ErrorThreeArgs>await ErrorThreeArgsFactory.deploy();
  const ErrorTwoArgs: ErrorTwoArgs = <ErrorTwoArgs>await ErrorTwoArgsFactory.deploy();
  const ErrorWithoutArgs: ErrorWithoutArgs = <ErrorWithoutArgs>await ErrorWithoutArgsFactory.deploy();
  const RequireWithString: RequireWithString = <RequireWithString>await RequireWithStringFactory.deploy();
  const RequireWithoutString: RequireWithoutString = <RequireWithoutString>await RequireWithoutStringFactory.deploy();

  await ErrorLongName.deployed();
  console.log("ErrorLongName deployed to: ", ErrorLongName.address);
  await ErrorOneArg.deployed();
  console.log("ErrorOneArg deployed to: ", ErrorOneArg.address);
  await ErrorOneNamedArg.deployed();
  console.log("ErrorOneNamedArg deployed to: ", ErrorOneNamedArg.address);
  await ErrorOneString.deployed();
  console.log("ErrorOneString deployed to: ", ErrorOneString.address);
  await ErrorThreeArgs.deployed();
  console.log("ErrorThreeArgs deployed to: ", ErrorThreeArgs.address);
  await ErrorTwoArgs.deployed();
  console.log("ErrorTwoArgs deployed to: ", ErrorTwoArgs.address);
  await ErrorWithoutArgs.deployed();
  console.log("ErrorWithoutArgs deployed to: ", ErrorWithoutArgs.address);
  await RequireWithString.deployed();
  console.log("RequireWithString deployed to: ", RequireWithString.address);
  await RequireWithoutString.deployed();
  console.log("RequireWithoutString deployed to: ", RequireWithoutString.address);
});
