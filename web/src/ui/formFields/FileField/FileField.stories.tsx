import type { Meta, StoryObj } from '@storybook/react'

import { FormProvider, Form, useForm } from '@redwoodjs/forms'

import Button from 'src/ui/Button/Button'
import { RedwoodJSLogo } from 'src/ui/storyUtils/RedwoodJSLogo'

import FileField from './FileField'

const meta: Meta<typeof FileField> = {
  component: FileField,
  argTypes: {
    optional: {
      control: { type: 'boolean' },
    },
    hideErrorMessage: {
      control: { type: 'boolean' },
    },
    inputTextSize: {
      name: 'input text size',
      options: ['base', 'grow'],
      control: { type: 'radio' },
    },
    endComponent: {
      name: 'end component',
      options: ['undefined', 'Icon', 'Button'],
      mapping: {
        undefined: undefined,
        Icon: <RedwoodJSLogo className="h-5 w-5" />,
        Button: (
          <Button
            size="xs"
            onClick={(e) => {
              e.preventDefault()
              alert('Hello Redwood!')
            }}
          >
            Click me!
          </Button>
        ),
      },
    },
    multiple: {
      control: { type: 'boolean' },
    },
    accept: {
      control: { type: 'text' },
    },
    wrapperClassName: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    description: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof FileField>

export const Primary: Story = {
  args: {
    optional: false,
    hideErrorMessage: false,
    inputTextSize: 'base',
    endComponent: undefined,
    multiple: false,
    accept: undefined,
  },
  render: ({
    optional,
    hideErrorMessage,
    inputTextSize,
    endComponent,
    multiple,
    accept,
  }) => {
    return (
      <FileField
        label="File"
        description="Choose a file, any file."
        name="file"
        placeholder="Choose a file..."
        optional={optional}
        hideErrorMessage={hideErrorMessage}
        inputTextSize={inputTextSize}
        endComponent={endComponent}
        multiple={multiple}
        accept={accept}
      />
    )
  },
  decorators: [
    (Story) => {
      interface ISampleForm {
        file: FileList
      }

      const methods = useForm<ISampleForm>()
      const onSubmit = (data: ISampleForm) => console.log(data)

      return (
        <FormProvider {...methods}>
          <Form<ISampleForm>
            className="mx-auto w-full max-w-xs"
            onSubmit={onSubmit}
          >
            <Story />
          </Form>
        </FormProvider>
      )
    },
  ],
}
