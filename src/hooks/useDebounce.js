function useDebounce(callback,delay=1000){
    let timerId;
    return (...args) =>{
        console.log("var args",args);
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            callback(...args);

        },delay);
    }
}


export default useDebounce;
