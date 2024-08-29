# HashPay
![alt text](https://github.com/Dhruv501/HashPay/blob/main/client/images/logo.png?raw=true)

## Table of Contents
1. [Introduction](#introduction)
2. [Motivation](#motivation)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Features](#features)
6. [Technologies Used](#technologies-used)


## Introduction
HashPay is a blockchain-based payment system that allows users to securely transfer funds and send messages in the form of GIFs. The application is built using React for the frontend, Solidity for smart contracts, and the Giphy API for GIF messaging. It is deployed on the Goerli testnet, with Metamask as the wallet for storing and managing funds.

## Motivation
HashPay was created to explore the integration of blockchain technology with modern web development. The goal is to provide a decentralized and secure way to transfer funds, with a fun twist of sending GIFs along with payments.

## Installation

### Prerequisites
- Node.js and npm installed on your machine
- Metamask extension installed in your browser
- A Metamask account connected to the Goerli testnet

### Setup
To set up HashPay locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Dhruv501/HashPay.git
   cd HashPay
2. Install the dependencies:
   ```bash
   cd client
   npm install
   npm run dev
   
Smart Contract Deployment with Hardhat

1. Setup Hardhat
   ```bash
   cd smart_contract
   npm install
   npx hardhat compile
Deploying to Goerli Testnet

1. In the hardhat.config.js, add your Goerli RPC URL and Metamask account key:
    ```bash
    url: 'https://eth-goerli.g.alchemy.com/your-api-key',
    accounts: ['account key']
2. Deploy the contract to the Goerli testnet:
    ```bash
    npx hardhat run scripts/deploy.js --network goerli

## Usage
Logging In
- Ensure your Metamask extension is installed and set to the Goerli testnet.
- Open the application in your browser.
- When prompted, log in using your Metamask account. Your account number will automatically sync with the application.

Transferring Funds
1. Enter the recipient's Metamask account number.
2. Specify the amount of ETH you want to transfer.
3. Optionally, select a GIF to send along with your payment using the Giphy API.
4. Confirm the transaction in Metamask.

## Features
- Blockchain-Based Payments: Securely transfer ETH on the Goerli testnet.
- Metamask Integration: Log in and manage transactions using your Metamask wallet.
- Smart Contract Interaction: Interact with Ethereum smart contracts directly from the web interface.

## Technologies Used
- React: Frontend framework for building the single-page application.
- Solidity: Smart contract language for blockchain transactions.
- Web3.js: JavaScript library to interact with the Ethereum blockchain.
- Tailwind CSS: Utility-first CSS framework for styling.
- Hardhat: Development environment for compiling, deploying, and testing smart contracts.



   

