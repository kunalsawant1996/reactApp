
export function setLocalStorageItem(key, value, isPersistant) {
    if (typeof (Storage) !== "undefined") {
        if (isPersistant) {
            localStorage.setItem(key, value);
        }
        else {
            sessionStorage.setItem(key, value);
        }
    }
}

export function getLocalStorageItem(key, isPersistant) {
    if (typeof (Storage) !== "undefined") {
        if (isPersistant) {
            return localStorage.getItem(key);
        }
        else {
            return sessionStorage.getItem(key);
        }
    }

    return null;
}

export function deleteLocalStorageItem(key, isPersistant) {
    if (typeof (Storage) !== "undefined") {
        if (isPersistant) {
            localStorage.removeItem(key);
        }
        else {
            sessionStorage.removeItem(key);
        }
    }
}

