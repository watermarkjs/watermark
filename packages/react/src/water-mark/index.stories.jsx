import React from 'react'

import { WaterMark } from '.'
import './style'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/WaterMark',
  component: WaterMark,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <WaterMark {...args} />

export const Comp = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Comp.args = {
  platformName: 'Loading',
}
