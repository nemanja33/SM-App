"use client"

import GenericButton from '@/components/ui/button/button';
import styles from './styles.module.css';
import ActionCreatePost from './actions';
import { useActionState, useEffect } from 'react';
import FieldError from "../fieldError/fieldError";
import { FormState } from '@/lib/constants';
import InputField from '../input/input';
import toast from 'react-hot-toast';

const EMPTY_FORM_STATE: FormState = {
  status: 'UNSET' as const,
  message: '',
  fieldErrors: {},
};

export default function CreatePost({
  userName
}: {
  userName: string
}) {
  const [ state, action, pending ] = useActionState(ActionCreatePost, EMPTY_FORM_STATE);

  useEffect(() => {
    if (state.status === 'ERROR' && !state.fieldErrors) {
      toast.error(state.message)
    } else if (state.message) {
      toast.success(state.message)
    }
  }, [state])

  return (
    <form className={styles.form} action={action}>
      <input type="hidden" name="username" value={userName} />
      <InputField label="post" type="textarea" placeholder="Type something..." />
      <FieldError formState={state} name="post" />
      <GenericButton label='Submit' disabled={pending} loading='Loading...' />
    </form>
  )
}