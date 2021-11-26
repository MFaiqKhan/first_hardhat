// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0;

contract MyFirstContract {
    uint number;

    constructor() {
        number = 0;
    }

    function setNumber(uint _num) public {
        number = _num;
    }

    function getNumber() public view returns (uint) {
        return number;
    }
}
