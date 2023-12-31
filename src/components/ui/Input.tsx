import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const inputVariants = cva(
  [
    // general styling
    'bg-input flex gap-3 rounded-full items-center justify-center self-stretch placeholder:text-muted/70 w-full border-border',
    //focus states
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:border-border focus-visible:ring-primary/50 focus-visible:ring-offset-2 ring-offset-background',
    //disabled states
    'disabled:cursor-not-allowed disabled:opacity-50',
    //animations
    'transition-all',
  ],
  {
    variants: {
      variant: {
        default: 'p-4 py-3 pl-6',
      },
      icon: {
        default: 'pl-14',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      icon: 'none',
    },
  }
)

export type InputVariant = VariantProps<typeof inputVariants>

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, variant, type, icon, ...props }, ref) => {
  return <input type={type} className={cn(inputVariants({ variant, icon, className }))} ref={ref} {...props} />
})
Input.displayName = 'Input'

export { Input }
