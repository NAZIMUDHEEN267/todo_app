import AsyncStorage from "@react-native-async-storage/async-storage";
import { currentDate } from "../helper/Date";

const { getItem, setItem, removeItem, mergeItem } = AsyncStorage;


export async function postValue(key) {

    const json = await setItem(JSON.stringify(helo), {
        message: "something...",
        start_time: 8,
        end_time: "8:30",
        color: "pink",
        day: true,
        reminder: true
    });
    
    return await JSON.parse(json);
}

export async function getValue(date_id) {
    const item = await getItem(date_id);
    const keys = await getItem("helo")
    console.log(keys);
    return JSON.parse(item);
}

async function deleteValue() {
    return await removeItem('persist:root');
}

export async function updateValue() {

}