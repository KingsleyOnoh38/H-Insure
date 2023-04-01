// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Role {
    mapping(address => string) private roles;

    event RoleSet(address indexed user, string role);

    function setRole(address _user, string memory _role) public {
        require(_user != address(0), "User address can't be zero");
        require(bytes(_role).length > 0, "Role can't be empty");
        roles[_user] = _role;
        emit RoleSet(_user, _role);
    }

    function getRole(address _user) public view returns (string memory) {
        return roles[_user];
    }
}
