import { TextField, TextFieldProps } from '@mui/material'

const CommonTextField = (
    props: {
        label: string
        valueSelector: () => string
        onChange: (value: string) => void
    } & Omit<TextFieldProps, 'onChange'>
) => {
    const {
        onChange,
        label,
        valueSelector,
        variant = 'filled',
        size = 'small',
        fullWidth = true,
        ...rest
    } = props
    const value = valueSelector()

    return (
        <TextField
            label={label}
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            {...rest}
        />
    )
}

export default CommonTextField
