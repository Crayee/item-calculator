import { Box } from '@mui/material'
import ItemCard from './ItemCard'
import { Dispatch } from 'react'
import { ItemMap } from '../types/types'

const ItemList = (props: {
    itemMap: ItemMap
    itemCounts: Map<string, number>
    editMode: boolean
    handleDelete: Dispatch<string>
    handleAddCount: Dispatch<string>
}) => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                columnGap: 0.75,
                rowGap: 0.75,
            }}
        >
            {Array.from(props.itemMap.entries()).map((e) => (
                <ItemCard
                    key={e[0]}
                    id={e[0]}
                    count={props.itemCounts.get(e[0]) ?? 0}
                    item={e[1]}
                    handleDelete={props.handleDelete}
                    editable={props.editMode}
                    onClick={props.handleAddCount}
                />
            ))}
        </Box>
    )
}

export default ItemList
