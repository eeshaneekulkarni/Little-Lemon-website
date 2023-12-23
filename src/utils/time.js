export const initialize_time=()=>{
    let times=[];
    for (let i=8;i<=20;i++){
        times.push(String(i)+":00");
    }
    return times;
}
export const update_times=(state,date)=>{
    let temp;
    switch(date){
        case 0:
            return state;
        case 6:
            temp=state.slice(3,10);
            return temp;
        case 1:
        case 2:
        case 3:
            temp=state.slice(0,10)
            return temp;
        case 4:
        case 5:    
            temp=state.slice(6,12)
            return temp;
        default:
            return temp;
    }

}
