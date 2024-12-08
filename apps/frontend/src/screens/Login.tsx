import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { userAtom } from '@repo/store/userAtom';
import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useAppKit } from '@reown/appkit/react';

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';

declare global {
  interface Window {
    ethereum?: any;
  }
}

const Login = () => {
  const { open, close } = useAppKit();
  const navigate = useNavigate();
  const guestName = useRef<HTMLInputElement>(null);
  const [_, setUser] = useRecoilState(userAtom);
  //const [account, setAccount] = useState<string>('')

  const account = useAccount();

  console.log(account.address);

  useEffect(() => {
    const loginAsGuest = async () => {
      try {
        // const walletAccount = await connectWallet();
        if (!account.address) {
          //alert("Failed to connect wallet");
          return;
        }

        const response = await fetch(`${BACKEND_URL}/auth/guest`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            wallet: account.address,
            name: (guestName.current && guestName.current.value) || '',
          }),
        });

        const user = await response.json();
        console.log(user);
        setUser(user);
        navigate('/game/random');
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please try again.');
      }
    };

    loginAsGuest();
  }),
    [account.address];

  // const connectWallet = async (): Promise<string | null> => {
  //   try {
  //     if (window.ethereum) {
  //       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //       console.log(accounts[0]);
  //       setAccount(accounts[0]);
  //       return accounts[0];
  //     } else {
  //       alert("Install Metamask");
  //       return null;
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-textMain">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#b7722d] drop-shadow-lg">Enter Username</h1>
        <div className="bg-bgAuxiliary2 rounded-lg shadow-lg p-8 flex flex-col md:flex-row">
          <div className="flex flex-col items-center md:ml-8">
            <input
              type="text"
              ref={guestName}
              placeholder="Username"
              className="border px-4 py-2 text-black rounded-md mb-4 w-full md:w-64"
            />

            <button
              className="bg-[#b7722d] text-white px-4 py-2 rounded-md hover:bg-[#99622a] transition-colors duration-300"
              // onClick={() => open()}
            >
              Jump In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
