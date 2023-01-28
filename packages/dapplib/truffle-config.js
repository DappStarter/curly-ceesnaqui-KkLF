require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture stomach razor noise horse gesture merry fog gesture'; 
let testAccounts = [
"0xdf0ebc3524c1e29ea26c9c00b80e9c99bd16c8c15d50f02de328c60a04f941e6",
"0x2f5a4104cd6dd6a346c96124e4d09665e54cfd75699f20d37d7be9be13dad920",
"0x8a15dc1ccefae280ab15900926e0ef0447b570b2934bd7627dba2921573d4c4c",
"0x0e40d2c06ba73f2e96acc01567d115d9c1de2ef611b8a4bbfb3d7d0fedf8231c",
"0x1ae50453085c9023f329e292a7f46b76bae1e020e68ac687a44d533cabd97bb9",
"0xe608b030356c97f105672d75c18871a6c93b0fdce4cbe7173298653cbff93ed0",
"0xa4d5323899e7d7c02df65e474657e33a83a287861f629a33a685f9adf93bb02f",
"0x33005837ce26e0470379f60b552d36e2df8044852ee1902e119a700f23f13b79",
"0x05cf089dfdc360743064262e5c362f2552216536abf04b2d08ba131cc6213507",
"0x1735161a98a5e5198c96334be7ea7243e7df3791b3f3584d6e779bf516b78c3d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

