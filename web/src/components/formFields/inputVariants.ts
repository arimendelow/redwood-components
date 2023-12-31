import { VariantProps, cva } from 'class-variance-authority'

/**
 * This is a list of all the variants that is applied to all input fields
 */
export const inputFieldVariants = cva(
  'flex w-full rounded-md border bg-default px-3 py-2 placeholder:text-color-tertiary disabled:disabled-classes focus-ring transition-colors min-h-[42px]',
  {
    variants: {
      colorTreatment: {
        default: ['border-neutral-300', 'text-color-primary'],
        error: [
          'border-red-700',
          'placeholder:text-color-tertiary-error',
          'text-color-primary-error',
        ],
      },
      /**
       * Using the `grow` variant will cause the input text to grow on larger screens.
       */
      inputTextSize: {
        base: ['text-base'],
        grow: ['text-base', 'md:text-lg'],
      },
    },
    defaultVariants: {
      colorTreatment: 'default',
      inputTextSize: 'base',
    },
  }
)

/**
 * We omit the `colorTreatment` variant because it's meant for internal use,
 * as it's used to apply the error color treatment, which the field handles automatically.
 */
export type InputFieldVariantsPropsType = Omit<
  VariantProps<typeof inputFieldVariants>,
  'colorTreatment'
>
