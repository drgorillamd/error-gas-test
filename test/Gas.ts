import { artifacts, ethers, waffle } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("Unit tests", function () {
  let signers: SignerWithAddress[];

  before(async function () {
    signers = await ethers.getSigners();
  });

  it("Require without string:success", async function () {
    const _artifact = await artifacts.readArtifact("requireWithoutStringS");
    const gasTest = await waffle.deployContract(signers[0], _artifact);

    await expect(gasTest.connect(signers[0]).set(true)).to.be.not.reverted;
  });

  it("Require without string:failure", async function () {
    const _artifact = await artifacts.readArtifact("requireWithoutStringF");
    const gasTest = await waffle.deployContract(signers[0], _artifact);

    await expect(gasTest.connect(signers[0]).set(false)).to.be.reverted;
  });
});
