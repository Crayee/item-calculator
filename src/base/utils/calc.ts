import { ItemMap } from '../types/types'

export const calculatePrice = (
    items: ItemMap,
    itemCount: Map<string, number>
) => {
    return Array.from(itemCount.entries())
        .map((count) => {
            return count[1] * (items.get(count[0])?.price ?? 0)
        })
        .reduce((p1, p2) => p1 + p2, 0)
}
