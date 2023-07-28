import { SxProps } from '@mui/material';
import { useRef } from 'react';
import { TargetInputStyled } from '~/theme/styled';

interface Props {
  // value: string;
  defaultValue?: string;
  sx?: SxProps;
  onChange: (value: string) => void;
}

function TargetInput({ defaultValue, sx, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>();

  const onConfirm = () => {
    if (inputRef.current) onChange(inputRef.current.value);
  };

  return (
    <TargetInputStyled
      inputRef={inputRef}
      fullWidth
      type="text"
      defaultValue={defaultValue}
      onKeyDown={(e) => e.key === 'Enter' && onConfirm()}
      onFocus={() => inputRef.current?.select()}
      sx={sx}
    />
  );
}

export default TargetInput;
