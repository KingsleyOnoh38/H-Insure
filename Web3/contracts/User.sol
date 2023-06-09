// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Role.sol";

contract User {
    address public userAddress;

    struct UserStruct {
        string name;
        string role;
        // address roleAddress;
    }

    mapping(address => UserStruct) public users;
    address[] public userAddresses;

    event UserCreated(address indexed userAddress, string role, string name);
    event UserRemoved(address indexed userAddress);

    constructor() {
        userAddress = msg.sender;
    }

    function createUser(address _user, string memory _role, string memory _name) public {
        require(_user != address(0), "User address can't be zero");
        require(bytes(_role).length > 0, "Role can't be empty");
        require(bytes(_name).length > 0, "Name can't be empty");

        Role role = new Role();
        users[_user] = UserStruct(_name, _role);
        role.setRole(_user, _role);
        userAddresses.push(_user);

        emit UserCreated(_user, _role, _name);
    }

    function removeUser(address _user) public {
        require(_user != address(0), "User address can't be zero");

        Role role = new Role();
        delete users[_user];
        role.setRole(_user, "");

        for (uint i = 0; i < userAddresses.length; i++) {
            if (userAddresses[i] == _user) {
                userAddresses[i] = userAddresses[userAddresses.length - 1];
                userAddresses.pop();
                break;
            }
        }

        emit UserRemoved(_user);
    }

    function getName(address _user) public view returns (string memory) {
        return users[_user].name;
    }

    function getRole(address _user) public view returns (string memory) {
        return users[_user].role;
    }

    function userExists(address _user) public view returns (bool) {
        return bytes(users[_user].name).length != 0;
    }

    function getAllUsers() public view returns (address[] memory) {
        return userAddresses;
    }
}
