import React from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  useTheme,
} from '@material-tailwind/react'
import { tabsData } from '../DataForPage/DummyData'

const TabComponent = () => {
  const { theme } = useTheme() // Destructure the theme

  return (
    <div id="features">
      <Tabs
        id="custom-animation"
        value="html"
        className="grid grid-cols-2 justify-items-center content-between w-full"
      >
        <div className="w-4/5 pl-24">
          <h1 className="text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading text-dark">
            Features
          </h1>
        </div>
        <TabsHeader>
          <Tab>Tab 1</Tab> {/* Make sure to add some tab names here */}
          <Tab>Tab 2</Tab>
        </TabsHeader>
        <TabsBody
          animate={{
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          <TabPanel>Content for Tab 1</TabPanel>
          <TabPanel>Content for Tab 2</TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  )
}

export default TabComponent
