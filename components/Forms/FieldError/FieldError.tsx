import { FormState } from '@/zod/schema'
import React from 'react'

type FieldErrorPros = {
  formState: FormState | undefined;
  name: string;
}

export default function FieldError({
  formState,
  name
}: FieldErrorPros) {
  return (
    <strong style={{display: 'block'}}>
      {formState?.fieldErrors[name]?.[0]}
    </strong>
  )
}
