import { Button, ButtonProps } from '@mui/material'

const CommonButton = (props: ButtonProps & { label?: string }) => {
    const {
        label,
        children,
        size = 'small',
        variant = 'contained',
        color = 'primary',
        disabled = false,
        onClick,
        ...rest
    } = props

    return (
        <Button
            size={size}
            variant={variant}
            onClick={onClick}
            disabled={disabled}
            color={color}
            sx={{ mt: 'auto' }}
            {...rest}
        >
            {label}
            {children}
        </Button>
    )
}

export default CommonButton
