
import { items } from "./items"

class DB {
    items: ItemData[]

    constructor() {
        this.items = items;
    }

    async getItems(categoryName: string, limit: number = 20): Promise<ItemData[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.items)
            }, 100);
        })
    }

}

export default new DB();
