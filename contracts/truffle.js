const fs = require('fs')
const ethers = require('ethers')
const HDWalletProvider = require('@truffle/hdwallet-provider')

// const mnemonic = fs
//     .readFileSync(__dirname + '/../../../private-keys/.privkey-metamask.txt')
//     .toString()
//     .trim()
// const mainnetProvider = `https://mainnet.infura.io/v3/${fs
//     .readFileSync(__dirname + '/../../../private-keys/.infurakey.txt')
//     .toString()
//     .trim()}`
// const ropstenProvider = `https://ropsten.infura.io/v3/${fs
//     .readFileSync(__dirname + '/../../../private-keys/.infurakey.txt')
//     .toString()
//     .trim()}`

module.exports = {
    networks: {
        development: {
            network_id: '9545',
            host: '127.0.0.1',
            port: '8545',
            gas: 9900000, // Current gas limit on mainnet (Jan 2020)
            gasPrice: 20000000000,
            skipDryRun: true
        },
        ropsten: {
            // Note, this must use the syntax () => new... otherwise it hangs forever on tests.
            // 4 is for 4 addresses for mock dai
            provider: () => new HDWalletProvider('036f58b0db28789f5bc801cdda0680799b1a65c57c4e6a5f3934893f6ff6a19c', 'https://ropsten.infura.io/v3/90d8e94bae3643b89664fca0d2b05259', 0, 4),
            network_id: 3,
            gasPrice: ethers.utils.parseUnits('110', 'gwei'),
            skipDryRun: true
        },
        mainnet: {
            // one need one address in HD wallet
            provider: () => new HDWalletProvider('036f58b0db28789f5bc801cdda0680799b1a65c57c4e6a5f3934893f6ff6a19c', 'https://mainnet.infura.io/v3/90d8e94bae3643b89664fca0d2b05259', 0, 1),
            network_id: 1,
            gasPrice: ethers.utils.parseUnits('11', 'gwei')
        }
    },
    compilers: {
        solc: {
            version: '0.5.8',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }
    }
}
