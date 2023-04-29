
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
        // const item = this.items[0];
        // return {
        //     id: "4dasdad45",
        //     tittle: "tittle",
        //     price: 111,
        //     mainImage: ""
        // };
        return {
            id: item?.id || "",
            tittle: item?.tittle || "",
            price: item?.price || 0,
            mainImage: item?.images[0] || ""
        };
    }

}

export default new DB();
