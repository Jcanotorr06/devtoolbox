import { AnimatePresence, motion } from 'framer-motion'
import React, { lazy } from 'react'
import { FaTimes } from "react-icons/fa"
import useModalStore from '../../state/modalStore'
import LazyLoading from '../utils/LazyLoading'

const SearchModal = lazy(() => import('./SearchModal'))

export type ModalTypes = "search" | "alert" | ""

const ModalManager = () => {

  const { isModalOpen, modalId, closeModal } = useModalStore()

  if (!isModalOpen || !modalId) return null

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
  }

  return (
    <AnimatePresence>
      <motion.div variants={variants} initial="closed" animate="open" exit="closed" className="fixed top-0 left-0 w-full h-full z-50">
        <div className="bg-gray-300 bg-opacity-50 w-full h-full flex items-center justify-center">
          <div className="bg-base-100 rounded shadow-lg p-4">
            <button className="btn btn-link btn-square" onClick={closeModal}>
              <FaTimes />
            </button>
            <LazyLoading>
              {modalId === "search" && <SearchModal />}
            </LazyLoading>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ModalManager