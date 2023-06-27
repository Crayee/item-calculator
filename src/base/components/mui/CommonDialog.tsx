import {
    Breakpoint,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
} from '@mui/material'
import CommonButton from './CommonButton'
import { ReactNode } from 'react'
import CloseIcon from '@mui/icons-material/Close'

const CommonDialog = (props: {
    title: string
    children?: ReactNode
    open: boolean
    onClose: () => void
    buttonLabel?: string
    onClick?: () => void
    maxWidth?: Breakpoint
}) => (
    <Dialog
        open={props.open}
        onClose={props.onClose}
        maxWidth={props.maxWidth ?? 'xs'}
        sx={{
            '& .MuiDialog-container .MuiDialog-paper': {
                margin: '10px',
            },
        }}
    >
        <DialogTitle sx={{ padding: { xs: 1, md: 1.5 }, pb: 1 }}>
            <Typography fontSize={18} sx={{ mr: 4.5 }}>
                {props.title}
            </Typography>
            <IconButton
                aria-label="close"
                onClick={props.onClose}
                size={'small'}
                sx={{
                    position: 'absolute',
                    right: 5,
                    top: 5,
                }}
            >
                <CloseIcon />
            </IconButton>
        </DialogTitle>

        <DialogContent sx={{ padding: { xs: 1, md: 1.5 }, pt: 1 }}>
            {props.children}
        </DialogContent>

        {props.buttonLabel && props.onClick && (
            <DialogActions>
                <CommonButton
                    label={props.buttonLabel}
                    onClick={props.onClick}
                />
            </DialogActions>
        )}
    </Dialog>
)

export default CommonDialog
