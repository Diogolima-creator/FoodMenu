import { storage } from '../libs/firebase.js'
import { ref, listAll, getDownloadURL} from 'firebase/storage';

export const getAll = async () => {
    let list = [];
    
    const imagesFolder = ref(storage, "images");
    const foodList = await listAll(imagesFolder);

    for(let i in foodList.items){
        let foodUrl = await getDownloadURL(foodList.items[i]);

        list.push({
            name: foodList.items[i].name,
            url: foodUrl
        });
    }
    return list;
}