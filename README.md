# PROJECT TITLE

H-INSURE

Smart Contacts' Links:

HealthInsurance.sol:
https://thirdweb.com/mumbai/0x0b69bf6E9CdE35a5524bdee7e40F5008F69a0Eb2/explorer

User.sol:
https://thirdweb.com/mumbai/0x9353C6a49470aa9cC585F2e5F84bA8dd7e16704D/explorer


Role.sol:
https://thirdweb.com/mumbai/0x2c1906d8d0832a302Fa05c2d74b61398C015d216/explorer

Live link:
https://healthinsurance-lilac.vercel.app/

# PROJECT DESCRIPTION

HealthInsure uses the Ethereum blockchain and the Solidity programming language to provide a decentralized
health insurance platform. The smart contract code is publicly available and can be audited by anyone, 
ensuring that it is secure and free from vulnerabilities.To use HealthInsure, simply create a new user account by providing your name and the amount of insurance 
coverage you need. Your account will be assigned a unique ID that is derived from your name using a secure 
hashing algorithm. Once your account is created, authorized doctors can use your insurance coverage to pay for your 
medical expenses. You can monitor your insurance balance and track your healthcare expenses through 
our easy-to-use web interface.

# FUNCTIONALITIES

Owner: The contract has an owner, which is the address that deployed the contract. 
The owner has the authority to authorize other addresses to perform certain actions in the contract.

Authorized addresses: The contract maintains a mapping of authorized addresses, which are
addresses that have been authorized by the owner to perform certain actions in the contract.

Doctor mapping: The contract maintains a mapping of doctor addresses, which are addresses 
that have been authorized to use the insurance of a user.

User mapping: The contract maintains a mapping of user addresses, which are addresses that have 
been generated based on the user's name using SHA-256 hashing algorithm. Each user has a name and 
an amount of insurance they are eligible for.

setDoctor(): This function allows the owner to authorize a doctor by adding their address to the doctor mapping.

setUser(): This function allows the owner to create a new user by generating a unique user address 
based on the user's name, and setting their name and amount of insurance.

useInsurance(): This function can only be called by an authorized doctor and allows them to use 
the insurance of a user. The function checks if the doctor is authorized and if the user has sufficient insurance before deducting the used amount from the user's insurance.

authorize(): This function allows the owner to authorize a new address by adding it to the authorized mapping.

revokeAuthorization(): This function allows the owner to revoke the authorization of an address by 
removing it from the authorized mapping.

# NOTE: Use Mumbai Testnet to Test Smart Contract

# To Deploy Contracts, Run:

npm run deploy

# To Install Dependencies, Run: 

npm install

# To Start Development Server, Run:

npm run start

# STACK:

React.js

Thirdweb

Tailwind CSS

# REFFERENCE

kitwind.io

# PS: As at the time of pushing this project here, there are a few more functionalities that are yet to be implemented on the frontend. So it is still work in progress. Please see the thirdweb links above for more clarification. Thank you for understanding and stay blessed! 



