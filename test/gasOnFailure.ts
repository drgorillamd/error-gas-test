import { artifacts, ethers, waffle } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import * as fs from "fs";

describe("Transaction failure (error/revert):", function () {
  let signers: SignerWithAddress[];

  before(async function () {
    signers = await ethers.getSigners();
  });

  fs.readdirSync("./contracts/").forEach(file => {
    it(file, async function () {
      const _artifact = await artifacts.readArtifact(file.split(".")[0]);
      const gasTest = await waffle.deployContract(signers[0], _artifact);
      await expect(gasTest.connect(signers[0]).set(false)).to.be.reverted;
    });
  });
});
