import { OutlinedInput, SxProps, styled } from '@mui/material';
import { useRef } from 'react';

interface Props {
  // value: string;
  defaultValue?: string;
  sx?: SxProps;
  onChange: (value: string) => void;
}

const TargetInputStyled = styled(OutlinedInput)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
    cursor: 'pointer',
  },
  '& .MuiOutlinedInput-input': {
    color: theme.palette.text.secondary,
    padding: '4px 8px',
    cursor: 'pointer',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '&.Mui-focused:hover > .MuiOutlinedInput-notchedOutline': {
    borderColor: '#388bff',
    transition: theme.transitions.create(['border-color', 'background-color']),
  },
}));

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
