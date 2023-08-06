# Assessment Smart Contract



## Description

Assessment is a Solidity smart contract that implements a simple bank-like system for depositing and withdrawing funds. The contract allows an owner (deployer) to manage the contract's balance and perform deposit, withdrawal, and currency conversion operations

## Smart Contract Details

The smart contract includes the following functionalities:

- `constructor(uint initBalance)`: Initializes the contract with an initial balance provided during deployment.

- `getBalance()`: Allows anyone to query the current balance of the contract.

- `deposit(uint256 _amount)`: Only the owner can call this function to deposit additional funds into the contract. It emits a `Deposit` event with the deposited amount.

- `withdraw(uint256 _withdrawAmount)`: Only the owner can call this function to withdraw funds from the contract. The contract checks if the owner has sufficient balance before allowing the withdrawal. It emits a `Withdraw` event with the withdrawn amount.
  
- `convertDollarsToRupees`: This is going to convert Dolar into Rupees

## Custom Error

The contract includes a custom error `InsufficientBalance`, which is used when attempting to withdraw more funds than the contract's balance.

## Usage

To use this smart contract, you can deploy it to an Ethereum network using the Solidity compiler and development environment like Remix, Hardhat, or Truffle. The contract can be deployed with an initial balance, and the owner can interact with the contract to deposit and withdraw funds.

## Outputs

Home Page
![image](https://github.com/anchaltanwar/ETH-AVAX-module-2/assets/86921001/5dc40f30-8d7d-4617-9536-695edc140c0c)



After this deposit and withdrawal page
![image](https://github.com/anchaltanwar/ETH-AVAX-module-2/assets/86921001/3e2ddaeb-bee2-43e1-9874-74c836e78779)



Asking for approval from Metamask wallet
![image](https://github.com/anchaltanwar/ETH-AVAX-module-2/assets/86921001/e5cc7001-48f9-49a4-ba9b-7045f2b80812)


Dollar to Rupees conversion
![image](https://github.com/anchaltanwar/ETH-AVAX-module-2/assets/86921001/d2e3b786-6228-40c8-a85f-75d43400796a)



## Video Explanation

https://www.loom.com/share/cceec4644ee046d084c11769e8ca7c66?sid=e348af81-2889-4b34-9344-3a673ef60e4f


