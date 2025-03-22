'use client'

import { useState } from "react"
import { useAccount, useSignMessage } from "wagmi"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "./animated-modal"
import { HoverBorderGradient } from "./hover-border-gradient"

interface ContactFormData {
    name: string
    email: string
    message: string
}

export const ContactMe = () => {
    const { address } = useAccount()
    const { signMessageAsync } = useSignMessage()
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Only send message if address is connected
            if (!address) {
                throw new Error('Please connect your wallet')
            }

            // Create message to sign
            const messageToSign = JSON.stringify({
                ...formData,
                timestamp: new Date().toISOString(),
                walletAddress: address
            })

            // Get signature
            const signature = await signMessageAsync({ message: messageToSign })

            // Send to backend
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    signature,
                    message: messageToSign,
                    formData
                })
            })

            if (!response.ok) throw new Error('Failed to submit')

            setSubmitStatus('success')
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error(error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Modal>
            <ModalTrigger className="flex justify-center group/modal-btn">
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex justify-center items-center text-xs sm:text-sm h-10 sm:h-12 px-2 sm:px-3 sm:min-w-44 space-x-2"
                >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                    </svg>
                    <span>Contact Me</span>
                </HoverBorderGradient>
            </ModalTrigger>
            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <ModalContent>
                        <div className="flex flex-col gap-4">

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                required
                                className="p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Your Email"
                                required
                                className="p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Your Message"
                                required
                                className="p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 min-h-[100px]"
                            />
                            {/*<button
                                type="submit"
                                disabled={isSubmitting}
                                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                            >
                                {isSubmitting ? 'Signing...' : 'Send Message'}
                            </button>*/}

                            {submitStatus === 'success' && (
                                <p className="text-green-500">Message sent successfully!</p>
                            )}
                            {submitStatus === 'error' && !address && (
                                <p className="text-red-500">Please connect your wallet to send a message.</p>
                            )}
                            {submitStatus === 'error' && address && (
                                <p className="text-red-500">Failed to send message. Please try again.</p>
                            )}
                        </div>
                    </ModalContent>
                    <ModalFooter className="gap-4">
                        {/*<button onClick={handleCancel} className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                            Cancel
                        </button>*/}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        >
                            {isSubmitting ? 'Signing...' : 'Send Message'}
                        </button>
                        {/*<button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                        Cancel
                        </button>
                        <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black"
                        >
                        {isSubmitting ? 'Signing...' : 'Send Message'}
                        </button>*/}
                    </ModalFooter>
                </form>
            </ModalBody>
        </Modal>
    )
}