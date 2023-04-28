
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

    async getItemById(id: string) {
        const item = this.items.find(item => item.id === id);
        console.log(item);
        return item;
    }

}

export default new DB();
