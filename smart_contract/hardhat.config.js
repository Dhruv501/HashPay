//
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/VxIxfls6u4uQJ7eAGvyvUdneuGKZhTUa',
      accounts: ['082d792bdc65a10c8625c382e678964fc98b4b915b276543552360734db95bb0'],
    },
  },
};