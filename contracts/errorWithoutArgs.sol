// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

error errorA();
error emptyErrorButSuperLongNameDidITellYouAboutThatOneTimeITrippedAndFell();
error errorB(uint256 firstArg);
error errorC(uint256);
error errorD(uint256 firstArg, uint256 secondArg);
error errorE(uint256 firstArg, uint256 secondArg, uint256 thirdArg);
error errorF(string reason);

contract errorWithoutArgs {
    uint256 mockVariable;

    function set(bool _pass) public {
        if (!_pass) revert errorA();
        mockVariable = 69420;
    }
}
