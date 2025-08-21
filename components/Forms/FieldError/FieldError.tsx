import React from 'react'
import styles from './styles.module.css'
import { FormState } from '@/lib/constants';

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
