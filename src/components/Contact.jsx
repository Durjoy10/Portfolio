/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto px-4 py-16 shadow-md" // Tailwind classes
        >
            <h1 className="text-3xl font-bold text-white mb-8">Contact</h1>
            <p className="text-gray-400 text-3xl mb-8">Don't be shy! Hit me up! 👇</p>
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center bg-blue-500 hover:bg-blue-700 px-4 py-3 rounded-lg shadow-md"
                >
                    <FaPhoneAlt className="mr-2 text-white" />
                    <p className="text-white">Phone:</p>
                    <p className="text-white ml-2">01874513939</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center bg-gray-700 hover:bg-gray-900 px-4 py-3 rounded-lg shadow-md"
                >
                    <FaEnvelope className="mr-2 text-white" />
                    <p className="text-white">Mail</p>
                    <a className="text-white underline ml-2" href="mailto:durjoydey10@gmail.com">
                        durjoydey10@gmail.com
                    </a>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Contact
