require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth situate upper hunt beach swear gasp'; 
let testAccounts = [
"0x81ab5ab2dd975a93b0821b01d86adbee9f076cb02c58bcb05ad3813c5682f06f",
"0xd7ac9230c860c1272cb60ac42d43228954e72fdf09b1fbf9428becdc6f3f3ada",
"0xc341ecfe6ef7f91bf45205c72a61cc4a4d8ebda6dfde0629bc44d522c91d85d0",
"0x3b0b3439e5e9a9727fe77d8bdb5b4c91a9701511e74d94a324e46fc40a9bd25f",
"0x121d23f7491c5a3fbbfd2bc322363e68fb2d7794b686f7ce10e6daf392368719",
"0x9a96860992193b772af51239d6e9900f3d27b010b77349ed0343ae81bb88b062",
"0x7a0a99b762c27a0ef79cb6f0eea6ad4b44924685cf68e9b84f8f1215814fffb5",
"0xb77bd368090852d81b9784d50ecf4f2b518eee0167d05d2b752fdc37a473eb1f",
"0x91feaa7bb1aeb70f1cc34643c1a17443eb01eac4c09877b6605ac6814407c987",
"0x3e119d3c99028325eb14851af4a74ce7d9f237baea944d57b86666f0dfc7bb39"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

