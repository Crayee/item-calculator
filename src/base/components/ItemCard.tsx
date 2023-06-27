import { Box, Card, CardActions, CardContent, Typography } from '@mui/material'
import CommonButton from './mui/CommonButton'
import { Item } from '../types/types'
import CommonChip from './mui/CommonChip'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol'
import { formatPrice } from '../utils/format'
import { Dispatch } from 'react'

type Props = {
    id: string
    editable: boolean
    item: Item
    count: number
    handleDelete: Dispatch<string>
    onClick: Dispatch<string>
}

const ItemCard = (props: Props) => {
    return (
        <Card
            sx={{ width: '100%' }}
            onClick={
                !props.editable ? () => props.onClick(props.id) : undefined
            }
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box display={'flex'} sx={{ pb: 1 }}>
                    <Typography>x{props.count}</Typography>
                    <span style={{ flex: 1 }} />
                    <CommonChip
                        variant={'filled'}
                        color={props.item.price < 0 ? 'error' : 'success'}
                        label={formatPrice(props.item.price)}
                        icon={<EuroSymbolIcon />}
                    />
                </Box>
                <Typography
                    sx={{
                        fontSize: 14,
                        lineBreak: 'auto',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {props.item.title}
                </Typography>
            </CardContent>
            {props.editable && (
                <CardActions sx={{ display: 'flex', flexDirection: 'right' }}>
                    <CommonButton
                        label={'Delete'}
                        color={'error'}
                        onClick={() => props.handleDelete(props.id)}
                    />
                </CardActions>
            )}
        </Card>
    )
}

export default ItemCard
