import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import type { Meta, StoryObj } from '@storybook/react'

import { useForm, FormProvider, Form } from '@redwoodjs/forms'

import {
  IDropdownOption,
  SimpleOptionRendererWithLeftCheckmark,
  SimpleOptionRendererWithRightCheckmark,
} from 'src/ui/formFields/dropdownFieldCommon'

import Select from './Select'

const meta: Meta<typeof Select> = {
  component: Select,
  argTypes: {
    multiple: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    optional: {
      control: { type: 'boolean' },
    },
    buttonIcon: {
      name: 'button icon',
      control: { type: 'radio' },
      options: ['undefined', 'magnifying glass'],
      mapping: {
        undefined: undefined,
        'magnifying glass': (
          <MagnifyingGlassIcon
            className="h-5 w-5 text-neutral-400"
            aria-hidden="true"
          />
        ),
      },
    },
    // @ts-expect-error - this is not a direct prop on the component, but is used in the render function
    renderOption: {
      name: 'render option',
      control: { type: 'radio' },
      options: [
        'simple option renderer with left checkmark',
        'simple option renderer with right checkmark',
      ],
      mapping: {
        'simple option renderer with left checkmark':
          SimpleOptionRendererWithLeftCheckmark,
        'simple option renderer with right checkmark':
          SimpleOptionRendererWithRightCheckmark,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
    form: {
      table: {
        disable: true,
      },
    },
    defaultValue: {
      table: {
        disable: true,
      },
    },
    horizontal: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
    refName: {
      table: {
        disable: true,
      },
    },
    by: {
      table: {
        disable: true,
      },
    },
    inline: {
      table: {
        disable: true,
      },
    },
    maxLength: {
      table: {
        disable: true,
      },
    },
    currentLength: {
      table: {
        disable: true,
      },
    },
    options: {
      table: {
        disable: true,
      },
    },
    initSelectedValueUncontrolled: {
      table: {
        disable: true,
      },
    },
    selectedValue: {
      table: {
        disable: true,
      },
    },
    setSelectedValue: {
      table: {
        disable: true,
      },
    },
    onValueChange: {
      table: {
        disable: true,
      },
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
    placeholder: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Select>

export const Primary: Story = {
  args: {
    multiple: false,
    disabled: false,
    // @ts-expect-error - putting `undefined` here will cause no default to be selected. We need to put the string `'undefined'`, which corresponds with the option key defined in argTypes.
    buttonIcon: 'undefined',
    optional: false,
    hideErrorMessage: false,
    renderOption: 'simple option renderer with left checkmark',
  },
  render: ({
    multiple,
    disabled,
    buttonIcon,
    optional,
    hideErrorMessage,
    // @ts-expect-error - this is not a direct prop on the component, but is used in the render function
    renderOption,
  }) => {
    // renderOption is added below
    const options: Omit<IDropdownOption, 'renderOption'>[] = [
      { value: 'Durward Reynolds' },
      { value: 'Kenton Towne' },
      { value: 'Therese Wunsch', disabled: true },
      { value: 'Benedict Kessler' },
      { value: 'Katelyn Rohan' },
      { value: 'Gavin Rohan' },
      { value: 'Keshaun McCullough' },
      { value: 'Virginia Tromp' },
      { value: 'Luigi Herman' },
      { value: 'Gina Abernathy' },
      { value: 'Maybelle Lehner' },
      { value: 'Arlo Bartoletti' },
      { value: 'Alvera An' },
      { value: 'Orville Dibbert' },
      { value: 'Laverna Denesik' },
      { value: 'Ferne Franecki' },
      { value: 'Parker Stiedemann' },
    ]

    return (
      <Select
        name="person"
        options={options.map(({ value, displayValue, disabled }) => ({
          value,
          displayValue,
          disabled,
          renderOption,
        }))}
        multiple={multiple}
        disabled={disabled}
        label="Person"
        description="Select a person from the list."
        placeholder="Select person..."
        buttonIcon={buttonIcon}
        optional={optional}
        hideErrorMessage={hideErrorMessage}
      />
    )
  },
  decorators: [
    (Story) => {
      interface ISampleForm {
        person: string
      }

      const methods = useForm<ISampleForm>()
      const onSubmit = (data: ISampleForm) => {
        console.log(data)
      }

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
