# Assessment Smart Contract

[![License](https://img.shields.io/badge/license-UNLICENSED-red)](#license)

## Description

Assessment is a Solidity smart contract that implements a simple bank-like system for depositing and withdrawing funds. The contract allows an owner (deployer) to manage the contract's balance and perform deposit and withdrawal operations.

## Smart Contract Details

The smart contract includes the following functionalities:

- `constructor(uint initBalance)`: Initializes the contract with an initial balance provided during deployment.

- `getBalance()`: Allows anyone to query the current balance of the contract.

- `deposit(uint256 _amount)`: Only the owner can call this function to deposit additional funds into the contract. It emits a `Deposit` event with the deposited amount.

- `withdraw(uint256 _withdrawAmount)`: Only the owner can call this function to withdraw funds from the contract. The contract checks if the owner has sufficient balance before allowing the withdrawal. It emits a `Withdraw` event with the withdrawn amount.

## Custom Error

The contract includes a custom error `InsufficientBalance`, which is used when attempting to withdraw more funds than the contract's balance.

## Usage

To use this smart contract, you can deploy it to an Ethereum network using Solidity compiler and development environment like Remix, Hardhat, or Truffle. The contract can be deployed with an initial balance, and the owner can interact with the contract to deposit and withdraw funds.

## License

This project is licensed under the UNLICENSED License - see the [LICENSE](LICENSE) file for details.

