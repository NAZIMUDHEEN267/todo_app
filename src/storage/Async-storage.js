import AsyncStorage from "@react-native-async-storage/async-storage";

const { getItem, setItem, removeItem, mergeItem } = AsyncStorage;


export async function postValue() {

    const json = await setItem('10/02/2023', {
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
    return JSON.parse(item);
}

async function deleteValue() {
    return await removeItem('10/02/2023');
}

export async function updateValue() {

}