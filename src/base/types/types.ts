//export const categories = ['refund', 'food', 'drink'] as const

//export type Category = (typeof categories)[number]

export type Item = {
    //category: Category
    title: string
    price: number
}
export type ItemMap = Map<string, Item>
