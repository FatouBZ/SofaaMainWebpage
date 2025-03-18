import React, { useState, useEffect } from 'react'
import MidButton from './MidButton'
import { sliderData } from '../DataForPage/DummyData'
import MidChild from './MidChild'
import { motion } from 'framer-motion'

const MidFilterSection = () => {
  const buttons = [
    { id: '1', name: 'Room1' },
    { id: '2', name: 'Room2' },
    { id: '3', name: 'Room3' },
  ]

  const [selected, setSelected] = useState('1')
  const [click, setClick] = useState(false)
  const [data, setData] = useState([])

  const filterData = (button) => {
    // Filter the data based on the selected button id
    const filter = sliderData.filter((item) => item.id === button)
    setData(filter)
    setSelected(button)
    setClick(true)
  }

  useEffect(() => {
    const putData = (data) => {
      // Default data setup
      setData(data.filter((item) => item.id === '1')) // Filter for "Room1" initially
    }
    putData(sliderData)
  }, [])

  return (
    <div className="mx-auto pt-72 pb-56" id="news">
      <div className="grid grid-cols-2 gap-10">
        <motion.div
          className="w-full max-w-lg mx-auto pl-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <h2 className="text-6xl font-bold font-inter no-underline tracking-wide normal-case leading-none text-dark">
            Check out some of the news
          </h2>
          <MidButton
            buttons={buttons}
            filter={filterData}
            selected={selected}
          />
        </motion.div>

        {/* Right section with MidChild */}
        <div className="w-full max-w-lg mx-auto">
          <MidChild data={data} click={click} />
        </div>
      </div>
    </div>
  )
}

export default MidFilterSection
