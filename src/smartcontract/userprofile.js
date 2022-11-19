const { ethers } = require("ethers");

// const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://matic-mumbai.chainstacklabs.com`)

const account1 = '0x4f401e3Cd7bF9293bEA676b4431352Caa876Dfda' // Your account address 1
const account2 = '0xEA1A4Fe1f376267D4Ed7C88D47891Bb1891e12B8' // Your account address 2

const privateKey1 = '3560fa0bfdcc27ea3e0a0d4bc41e1f2bc39f6aa330705afa1cf98e86e4e6f18a' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)

const COIN_ABI = [
    "function safeMint(address to, string memory uri) public"
];

const address = '0xc6772336b7221Dc4166694d56200FF0F0f57b014'
const contract = new ethers.Contract(address, COIN_ABI, provider)

const createUser = async (playerAcount) => {
    
    const contractWithWallet = contract.connect(wallet)

    const tx = await contractWithWallet.safeMint(playerAcount,'https://gateway.pinata.cloud/ipfs/QmdHWS2NsgYE4xPKfUwa4zq9nENgwSKr42Tsgme2moJeoJ')
    await tx.wait()

    console.log(tx.hash)
    
}

// createUser('0xC24fF1aa6838dfbbaB70a25E08D59c73bA3294c9')
export default createUser