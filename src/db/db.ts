
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
        // const item = this.items.find(item => item.id === id);
        const item = this.items[0];
        return {
            id: "4dasdad45",
            tittle: "tittle",
            price: 111,
            mainImage: ""
        };
    }

}

export default new DB();
