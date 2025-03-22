'use client'

import Image from 'next/image'
import { normalize } from 'viem/ens'
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import Resume from './resume'

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({
    name: normalize(ensName!),
  })

  console.log('ensAvatar', ensAvatar)

  return (
    <div className="flex flex-col gap-8">
      <div className="absolute top-4 right-4 flex items-center justify-end gap-2">
        {ensAvatar && <Image className="rounded-full" width={40} height={40} alt="ENS Avatar" src={ensAvatar} />}
        {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
        <button 
          onClick={() => disconnect()} 
          className="rounded-full border border-solid border-rose-200 dark:border-rose-800 transition-colors flex items-center justify-center hover:bg-rose-50 dark:hover:bg-rose-950 hover:border-transparent text-xs sm:text-sm h-10 sm:h-12 px-2 sm:px-3 sm:min-w-44"
        >
          Disconnect
        </button>
      </div>

      <Resume />
    </div>
  )
}