import { artifacts, ethers, waffle } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Contract } from "ethers";
import * as fs from "fs";

describe("Gas consumptions:", function () {
  let signers: SignerWithAddress[];

  fs.readdirSync("./contracts/").forEach(file => {
    it("", async function () {
      console.log("\n----" + file.split(".")[0] + "----");
      signers = await ethers.getSigners();
      const _artifact = await artifacts.readArtifact(file.split(".")[0]);
      const gasTest = await waffle.deployContract(signers[0], _artifact);
      console.log(
        "gas used for deployment:    " + (await waffle.provider.getBlock(waffle.provider.getBlockNumber())).gasUsed,
      );

      await expect(gasTest.connect(signers[0]).set(false, { gasLimit: 100000 })).to.be.reverted; //gasLimit to avoid ethers gas_estimate
      console.log(
        "gas used for a failed tx:   " + (await waffle.provider.getBlock(waffle.provider.getBlockNumber())).gasUsed,
      );

      await expect(gasTest.connect(signers[0]).set(true, { gasLimit: 100000 })).to.be.not.reverted; //gasLimit to avoid ethers gas_estimate
      console.log(
        "gas used for succesfull tx: " + (await waffle.provider.getBlock(waffle.provider.getBlockNumber())).gasUsed,
      );
    });
  });
});
