// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract HealthInsure{

    address private owner;
    mapping (address => bool) private authorized;

    struct User {
        bool isUidGenerated;
        string name;
        uint amountInsured;
    }

    mapping (address => User) public user;
    mapping (address => bool) public doctor;
    
    constructor() {
        owner = msg.sender;
        authorized[msg.sender] = true;
    }

    modifier onlyAuthorized() {
        require(authorized[msg.sender], "Not authorized");
        _;
    }

    function setDoctor(address _address) public onlyAuthorized {
        require(!doctor[_address], "Doctor already authorized");
        doctor[_address] = true; 
    }

    function setUser(address uniqueId, string memory _name, uint _amountInsured) public returns (address) {
        bytes32 hash = sha256(abi.encodePacked(_name));
        address uniqueId = address(uint160(uint256(hash)));
        
        user[uniqueId].name = _name;
        user[uniqueId].amountInsured = _amountInsured;
        return uniqueId;
    }

    function useInsurance(address _uniqueId, uint _amountUsed) public onlyAuthorized returns (string memory) {
        require(doctor[msg.sender], "Only doctor can use the insurance");
        require(user[_uniqueId].amountInsured >= _amountUsed, "Insufficient insurance amount");

        user[_uniqueId].amountInsured -= _amountUsed;
        return "Insurance has been successfully used.";
    }

    function authorize(address _address) public onlyAuthorized {
        authorized[_address] = true;
    }

    function revokeAuthorization(address _address) public onlyAuthorized {
        authorized[_address] = false;
    }
}
