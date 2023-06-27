import ItemList from './ItemList'
import { Box, Typography } from '@mui/material'
import CommonButton from './mui/CommonButton'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import { useEffect, useState } from 'react'
import BottomBar from './BottomBar'
import { Item, ItemMap } from '../types/types'
import { get, update } from 'idb-keyval'
import { v4 as uuidv4 } from 'uuid'
import { calculatePrice } from '../utils/calc'
import { formatPrice } from '../utils/format'
import AddItemDialog from './AddItemDialog'

const CalculatePage = () => {
    const [editMode, setEditMode] = useState(false)
    const [open, setOpen] = useState(false)
    const [itemMap, setItemMap] = useState<ItemMap>(new Map())
    const [itemCounts, setItemCounts] = useState<Map<string, number>>(new Map())

    useEffect(() => {
        fetchItems()
    }, [])

    const fetchItems = () => {
        get('items')
            .then((res) => {
                if (res) {
                    const itemMap = res as ItemMap
                    setItemMap(itemMap)
                }
            })
            .catch((err) => console.log(err))
    }

    const handleEditToggle = () => {
        setEditMode((edit) => !edit)
    }

    const handleClear = () => {
        setItemCounts(new Map())
    }

    const handleAddCount = (id: string) => {
        setItemCounts((i) => {
            const itemCount = new Map(i)
            const count = itemCount.get(id) ?? 0
            itemCount.set(id, count + 1)
            return itemCount
        })
    }

    const handleAddItem = (item: Item) => {
        update('items', (val) => {
            const map = (val || new Map()) as ItemMap
            map.set(uuidv4(), item)
            setItemMap(map)
            return map
        }).catch((err) => console.log(err))
    }

    const handleDeleteItem = (id: string) => {
        update('items', (val) => {
            const map = (val || new Map()) as ItemMap
            map.delete(id)
            setItemMap(map)
            return map
        }).catch((err) => console.log(err))
        itemCounts.delete(id)
    }

    return (
        <Box display="flex" flexDirection={'column'} sx={{ p: 0.5 }} gap={1}>
            <Box display="flex">
                <CommonButton
                    label={editMode ? 'Edit off' : 'Edit'}
                    endIcon={<EditIcon />}
                    onClick={handleEditToggle}
                />
                <span style={{ flex: 1 }} />
                <Typography
                    color={'text.primary'}
                    fontWeight={500}
                    fontSize={20}
                >
                    Total: {formatPrice(calculatePrice(itemMap, itemCounts))} €
                </Typography>
            </Box>
            {editMode && (
                <CommonButton
                    label={'New Item'}
                    endIcon={<AddIcon />}
                    onClick={() => setOpen(true)}
                />
            )}
            <ItemList
                itemMap={itemMap}
                itemCounts={itemCounts}
                editMode={editMode}
                handleDelete={handleDeleteItem}
                handleAddCount={handleAddCount}
            />
            <BottomBar onClear={handleClear} />
            <AddItemDialog
                open={open}
                onClose={() => setOpen(false)}
                onAddItem={handleAddItem}
            />
        </Box>
    )
}

export default CalculatePage
