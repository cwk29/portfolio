'use client'

import { useConnect, useAccount } from 'wagmi'
import Resume from '../resume'
import Link from 'next/link'

export const WalletOptions = () => {
  const { connectors, connect } = useConnect()
  const { isConnected } = useAccount()

  // Filter out duplicate connectors based on their ID
  const uniqueConnectors = connectors.filter(
    (connector, index) =>
      connectors.findIndex((c) => c.id === connector.id) === index
  )

  return (
    <div className="flex flex-col gap-4">
      {!isConnected ? (
        <>
          <p className="text-base text-neutral-500 dark:text-neutral-300">
            Connect your wallet to view my full experience.
          </p>

          {uniqueConnectors.map((connector) => (
            <button
              key={connector.id}
              onClick={() => connect({ connector })}
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 mb-2"
            >
              {connector.name}
            </button>
          ))}

          <div className="flex flex-row justify-center gap-2 text-sm sm:text-base">
            <p>❌ 💳 Not a crypto person?</p>
            <Link
              className="font-bold text-blue-500 underline hover:text-blue-600"
              href="/profile"
            >
              View my XP
            </Link>
          </div>
        </>
      ) : (
        <Resume />
      )}
    </div>
  )
}