import { forwardRef } from 'react'
import { TextField } from '@mui/material'

const Input = forwardRef((props, ref) => {
  return (
    <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        type='text'
        {...props}
    >
    </TextField>
  )
});

export default Input
