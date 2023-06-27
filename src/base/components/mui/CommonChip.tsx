import { Chip, ChipProps, Tooltip } from '@mui/material'

const CommonChip = (
    props: {
        tooltip?: string
    } & ChipProps
) => {
    const { variant = 'outlined', tooltip, label, ...rest } = props

    const chip = (
        <Chip label={label} size={'small'} variant={variant} {...rest} />
    )

    return tooltip ? (
        <Tooltip title={props.tooltip} placement={'top'}>
            {chip}
        </Tooltip>
    ) : (
        chip
    )
}

export default CommonChip
