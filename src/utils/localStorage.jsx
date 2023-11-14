export const addUsertoLocalStorage =(user)=>{
    localStorage.setItem('user', JSON.stringify(user));
}

export const removeUsertoLocalstorage =()=>{
    localStorage.removeItem('user')
}

export const getUserFormLocalstorage =()=>{

    const result = localStorage.getItem('user');
    const user = result ? JSON.parse(result):null;
    return user;
}