const { ethers } = require("ethers");

// const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://matic-mumbai.chainstacklabs.com`)

const account1 = '0x4f401e3Cd7bF9293bEA676b4431352Caa876Dfda' // Your account address 1
const account2 = '0xEA1A4Fe1f376267D4Ed7C88D47891Bb1891e12B8' // Your account address 2

const privateKey1 = '3560fa0bfdcc27ea3e0a0d4bc41e1f2bc39f6aa330705afa1cf98e86e4e6f18a' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)

const COIN_ABI = [
    "function INC(uint val ,address a ) external",
    "function DEC(uint val , address a) external",
    "function VALUE(address a) view public returns(uint)"
];

const address = '0xd17221694ABd0768f9e9288700dEB97d65cf146a'
const contract = new ethers.Contract(address, COIN_ABI, provider)

const descrease = async (playerAcount,val) => {
    const value = await contract.VALUE(playerAcount)

    console.log(`\nContract : ${address}\n`)
    console.log(`Balance of player : ${value}\n`)

    const contractWithWallet = contract.connect(wallet)

    const tx = await contractWithWallet.DEC(val,playerAcount)
    await tx.wait()

    console.log(tx.hash)
    
    const value2 = await contract.VALUE(playerAcount)
    console.log(`Balance of player : ${value2}\n`)
}

// descrease(account2,10)
export default descrease