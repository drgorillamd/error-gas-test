import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { expect } from "chai";

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

describe("Unit tests", function () {
  before(async function () {
    this.signers = {};
    const signers = await ethers.getSigners();
    this.signers.admin = signers[0];
  });

  it("Require without string:success", async function () {
    const _artifact: Artifact = await artifacts.readArtifact("requireWithoutString");
    this.gasTest = await waffle.deployContract(this.signers.admin, _artifact);
    expect(await this.gasTest.set(true)).to.be.not.reverted;
  });
});
