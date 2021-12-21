import { artifacts, ethers, waffle } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Contract } from "ethers";
import * as fs from "fs";

let data: any[] = [];

describe("Gas consumptions:", function () {
  let signers: SignerWithAddress[];

  fs.readdirSync("./contracts/").forEach(file => {
    it("", async function () {
      const name = file.split(".")[0];

      console.log("\n----" + name + "----");

      signers = await ethers.getSigners();
      const _artifact = await artifacts.readArtifact(name);
      const gasTest = await waffle.deployContract(signers[0], _artifact);

      const deploymentCost = (await waffle.provider.getBlock(waffle.provider.getBlockNumber())).gasUsed;
      console.log("gas used for deployment:    " + deploymentCost);

      await expect(gasTest.connect(signers[0]).set(false, { gasLimit: 100000 })).to.be.reverted; //gasLimit to avoid ethers gas_estimate
      const failedCost = (await waffle.provider.getBlock(waffle.provider.getBlockNumber())).gasUsed;
      console.log("gas used for a failed tx:   " + failedCost);

      await expect(gasTest.connect(signers[0]).set(true, { gasLimit: 100000 })).to.be.not.reverted; //gasLimit to avoid ethers gas_estimate
      const successCost = (await waffle.provider.getBlock(waffle.provider.getBlockNumber())).gasUsed;
      console.log("gas used for succesfull tx: " + successCost);

      data.push({
        id: name,
        deployment: deploymentCost.toString(),
        failed: failedCost.toString(),
        success: successCost.toString(),
      });
    });
  });
});

describe("Summary:", function () {
  it("", function () {
    const transformed = data.reduce((acc, { id, ...x }) => {
      acc[id] = x;
      return acc;
    }, {});
    console.table(transformed);
  });
});
