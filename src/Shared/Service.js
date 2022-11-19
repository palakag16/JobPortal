export const adminInfoGetterService = (key) => {
    return localStorage.getItem(key);
  };
  
  export const getToken = () => {
    return localStorage.getItem("My-job");
  };
  
  export const adminInfoStorageService = (key,data) => {
    localStorage.setItem(key, data);
  };
  
  export const adminInfoRemovalService = (key) => {
    localStorage.removeItem(key);
  };