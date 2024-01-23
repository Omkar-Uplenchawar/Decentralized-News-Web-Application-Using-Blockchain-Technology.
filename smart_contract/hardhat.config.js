require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/qt5CHa7RjG7q-LmAkoaDeHMg6L2xuhPi',
      accounts: ['4c1a181e9fe6496df8faa7fb785b323d56876a28297263040a263fba2047fcc8'],
    },
  },
};