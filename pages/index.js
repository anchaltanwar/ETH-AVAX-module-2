import {useState, useEffect} from "react";
import {ethers} from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  const getWallet = async() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({method: "eth_accounts"});
      handleAccount(account);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log ("Account connected: ", account);
      setAccount(account);
    }
    else {
      console.log("No account found");
    }
  }

  const connectAccount = async() => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    // once wallet is set we can get a reference to our deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);
 
    setATM(atmContract);
  }

  // const getBalance = async() => {
  //   if (atm) {
  //     setBalance((await atm.getBalance()).toNumber());
  //   }
  // }
  const getBalance = async () => {
    if (atm && account) {
      try {
        const balance = await atm.getBalance();
        const balanceAsString = ethers.utils.formatUnits(balance, 18); // Assuming 18 decimals for ETH
        setBalance(balanceAsString);
      } catch (error) {
        console.error("Error fetching balance:", error);
        alert("Failed to fetch balance. Please try again later.");
      }
    }
  }
  




  const deposit = async() => {
    if (atm) {
      let tx = await atm.deposit(100);
      await tx.wait()
      getBalance();
    }
  }

  const withdraw = async() => {
    if (atm) {
      let tx = await atm.withdraw(100);
      await tx.wait()
      getBalance();
    }
  }

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>
    }

    if (balance == undefined) {
      getBalance();
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <p>Your Balance: {balance}</p>
        <button onClick={deposit}>Deposit 100 ETH</button>
        <button onClick={withdraw}>Withdraw 100 ETH</button>
      </div>
    )
  }

  useEffect(() => {getWallet();}, []);

  return (
    <main className="container">
      <header>
        <h1>Welcome to the Metacrafters ATM!</h1>
      </header>
      {initUser()}
      <style jsx>{`
        body {
          background-color: gray;
          margin: 0;
        }

        .container {
          text-align: center;
          background-color: pink;
          height: 50vh;
          width: 50vw;
          margin: auto;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
          border: 2px solid black;
        }

        .container p {
          margin: 0;
        }

        .container input {
          width: 100%;
          padding: 5px;
          margin-bottom: 10px;
        }

        .container button {
          background-color: #4caf50;
          border: none;
          color: white;
          padding: 10px 20px;
          text-align: center;
          text-decoration: none;
          font-size: 16px;
          margin: 5px;
          cursor: pointer;
          border-radius: 50px;
        }

        .container button:hover {
          background-color: #45a049;
        }
      `}
      </style>
    </main>
  );
}