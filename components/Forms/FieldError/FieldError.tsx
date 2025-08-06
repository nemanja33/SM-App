import { FormState } from '@/zod/schema'
import React from 'react'
import styles from './styles.module.css'

type FieldErrorPros = {
  formState: FormState | undefined;
  name: string;
}

export default function FieldError({
  formState,
  name
}: FieldErrorPros) {
  return (
    <strong className={styles.errorMessage}>
      {formState?.fieldErrors[name]?.[0]}
    </strong>
  )
}
