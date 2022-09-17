import WaterMark from './index.vue'

import { Meta, StoryFn } from '@storybook/vue3'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/WaterMark',
  component: WaterMark,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   onClick: {},
  //   size: {
  //     control: { type: 'select' },
  //     options: ['small', 'medium', 'large'],
  //   },
  // },
} as Meta<typeof WaterMark>

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: StoryFn<typeof WaterMark> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { WaterMark },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { ...args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<water-mark :title="title" />',
})

export const Title = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Title.args = {
  title: 'Title',
}
