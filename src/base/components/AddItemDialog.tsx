import CommonDialog from './mui/CommonDialog'
import { Box, TextField } from '@mui/material'
import { ChangeEvent, Dispatch, useState } from 'react'
import { Item } from '../types/types'

const AddItemDialog = (props: {
    open: boolean
    onClose: () => void
    onAddItem: Dispatch<Item>
}) => {
    const [price, setPrice] = useState('')
    const [title, setTitle] = useState('')

    const handleSubmit = () => {
        props.onAddItem({ title: title, price: Number(price) })
        setPrice('')
        setTitle('')
        props.onClose()
    }

    return (
        <CommonDialog
            title={'Add Item'}
            open={props.open}
            onClose={props.onClose}
            onClick={handleSubmit}
            buttonLabel={'Add'}
        >
            <Box
                sx={{
                    width: '100%',
                    gap: 1,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <TextField
                    fullWidth
                    size={'small'}
                    label="Name"
                    variant="filled"
                    value={title}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setTitle(event.target.value)
                    }}
                />
                <TextField
                    fullWidth
                    size={'small'}
                    type={'number'}
                    label="Price"
                    variant="filled"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </Box>
        </CommonDialog>
    )
}

export default AddItemDialog
