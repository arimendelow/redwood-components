// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import { RedwoodJSLogo } from 'src/components/logos/RedwoodJSLogo'
import { ChildrenPlaceholder } from 'src/lib/StorybookUtils'

import { Accordion } from './Accordion'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  argTypes: {
    type: {
      options: ['single', 'multiple'],
      control: { type: 'radio' },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    sections: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Primary: Story = {
  args: {
    type: 'single',
  },
  render: ({ type }) => (
    <Accordion
      type={type}
      collapsible
      sections={[
        {
          trigger: 'Is it accessible?',
          content:
            "Yes. It adheres to the WAI-ARIA design pattern, as it's built with Radix UI.",
        },
        {
          trigger: 'Is it styled?',
          content:
            'Yes! It matches all other components, including built-in dark mode support 😉',
        },
        {
          trigger: 'Is it animated?',
          content:
            "Yes, with CSS - but you can disable it if you prefer. If you're interested in instead animating with Framer Motion, refer to the docs for why we didn't do that.",
        },
        {
          trigger: (
            <div className="text-left">
              Can I use a component as the trigger and/or content?{' '}
              <RedwoodJSLogo className="inline h-5 w-5" />
            </div>
          ),
          content: (
            <div>
              Yes! You can use either a string or component for either of these.
              <div className="h-32">
                <ChildrenPlaceholder />
              </div>
            </div>
          ),
        },
      ]}
    />
  ),
}
