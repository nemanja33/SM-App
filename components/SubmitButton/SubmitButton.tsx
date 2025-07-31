type SubmitButtonProps = {
  label: string;
  loading: React.ReactNode,
  disabled: boolean
}

export default function SubmitButton({
  label,
  loading,
  disabled
}: SubmitButtonProps) {
  return (
    <button disabled={disabled} type="submit" className="border-2">
      {disabled ? loading : label}
    </button>
  );
}
