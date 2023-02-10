import AsyncStorage from "@react-native-async-storage/async-storage";

const { getItem, setItem, removeItem, mergeItem } = AsyncStorage;

export async function getValue(date_id) {
    return await getItem(date_id);
}

export async function postValue() {
    return await setItem();
}

export async function deleteValue(){
    return await removeItem();
}

export async function updateValue(){

}