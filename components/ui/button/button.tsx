import styles from './styles.module.css'

type SubmitButtonProps = {
  label: string;
  loading: React.ReactNode,
  disabled: boolean
  type?: 'button' | 'submit'
}

export default function GenericButton({
  label,
  loading,
  disabled,
  type='submit'
}: SubmitButtonProps) {
  return (
    <button disabled={disabled} type={type} className={styles.button}>
      {disabled ? loading : label}
    </button>
  );
}
