




import instance from '../config/axios';


export function cases(query=""){
    try {
        return instance.get("cases?country="+query)
    } catch (error) {
        console.error(error);
    }
}

