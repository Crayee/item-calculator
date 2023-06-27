import CommonButton from './mui/CommonButton'
import { Box } from '@mui/material'

const BottomBar = (props: { onClear: () => void }) => {
    return (
        <Box
            sx={{
                position: 'fixed',
                overflow: 'hidden',
                zIndex: 1,
                height: '42px',
                bottom: 0,
                display: 'flex',
                width: 'calc(100% - 8px)',
            }}
        >
            <CommonButton
                label={'Clear'}
                size={'medium'}
                color={'error'}
                onClick={props.onClear}
                sx={{ flex: 1, mb: 'auto' }}
            />
        </Box>
    )
}

export default BottomBar
