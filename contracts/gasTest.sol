// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

error errorA();
error emptyErrorButSuperLongNameDidITellYouAboutThatOneTimeITrippedAndFell();
error errorB(uint256 firstArg);
error errorC(uint256);
error errorD(uint256 firstArg, uint256 secondArg);
error errorE(uint256 firstArg, uint256 secondArg, uint256 thirdArg);
error errorF(string reason);

contract requireWithString {
    uint256 mockVariable;

    function set(bool _pass) public {
        require(_pass, "failed");
        mockVariable = 69420;
    }
}

contract requireWithoutStringS {
    uint256 mockVariable;

    function set(bool _pass) public {
        require(_pass);
        mockVariable = 69420;
    }
}

contract requireWithoutStringF {
    uint256 mockVariable;

    function set(bool _pass) public {
        require(_pass);
        mockVariable = 69420;
    }
}

contract errorWithoutArgs {
    uint256 mockVariable;

    function set(bool _pass) public {
        if (!_pass) revert errorA();
        mockVariable = 69420;
    }
}

contract errorLongName {
    uint256 mockVariable;

    function set(bool _pass) public {
        if (!_pass) revert emptyErrorButSuperLongNameDidITellYouAboutThatOneTimeITrippedAndFell();
        mockVariable = 69420;
    }
}

contract errorOneNamedArg {
    uint256 mockVariable;

    function set(bool _pass) public {
        if (!_pass) revert errorB(42069);
        mockVariable = 69420;
    }
}

contract errorOneArg {
    uint256 mockVariable;

    function set(bool _pass) public {
        if (!_pass) revert errorC(42069);
        mockVariable = 69420;
    }
}

contract errorTwoArgs {
    uint256 mockVariable;

    function set(bool _pass) public {
        if (!_pass) revert errorD(42069, 69);
        mockVariable = 69420;
    }
}

contract errorThreeArgs {
    uint256 mockVariable;

    function set(bool _pass) public {
        if (!_pass) revert errorE(69420, 69, 420);
        mockVariable = 69420;
    }
}

contract errorOneString {
    uint256 mockVariable;

    function set(bool _pass) public {
        if (!_pass) revert errorF("this is bytes 21 long");
        mockVariable = 69420;
    }
}
