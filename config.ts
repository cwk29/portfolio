import { http, createConfig } from 'wagmi'
import { mainnet, linea, lineaSepolia, sepolia } from 'wagmi/chains'
import { metaMask, walletConnect } from 'wagmi/connectors'

declare module 'wagmi' {
    interface Register {
      config: typeof config
    }
}

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!

export const config = createConfig({
    ssr: true, // Make sure to enable this for server-side rendering (SSR) applications.
    chains: [mainnet, linea, lineaSepolia, sepolia],
    connectors: [
        walletConnect({ projectId }),
        metaMask(),
    ],
    transports: {
      [mainnet.id]: http(),
      [linea.id]: http(),
      [lineaSepolia.id]: http(),
      [sepolia.id]: http(),
    },
});