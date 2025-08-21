"use client"

import GenericButton from '@/components/ui/button/button';
import styles from './styles.module.css';
import ActionCreatePost from './actions';
import { useActionState } from 'react';
import FieldError from "../fieldError/fieldError";
import { FormState } from '@/lib/constants';
import InputField from '../input/input';

const EMPTY_FORM_STATE: FormState = {
  status: 'UNSET' as const,
  message: '',
  fieldErrors: {},
};
// kada budes pravio da dodaje ili edituje post proveri i tamo da li je to taj user za svaki slucaj

export default function CreatePost() {
  const [ state, action, pending ] = useActionState(ActionCreatePost, EMPTY_FORM_STATE)

  return (
    <form className={styles.form} action={action}>
      <InputField label="post" type="textarea" placeholder="Type something..." />
      <FieldError formState={state} name="post" />
      <GenericButton label='Submit' disabled={pending} loading='Loading...' />
    </form>
  )
}