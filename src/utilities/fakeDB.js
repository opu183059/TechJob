const addToDB=id=>{
    let localSTR = {};
    const previousData = localStorage.getItem('jobID');
    if(previousData){
        localSTR = JSON.parse(previousData);
    }
    //add quantity
    const quantity= localSTR[id];
    if(quantity){
        const nQuantity= quantity + 1;
        localSTR[id]= nQuantity;
    }else{
        localSTR[id] = 1;
    }

    if(quantity>0){
        alert("You have applied for this Earlier");
    }
    else{
        alert("Applied for this job successful");
    }

    localStorage.setItem('jobID', JSON.stringify(localSTR));
}

const getData =()=>{
    let localSTR = {};
    const previousData = localStorage.getItem('jobID');
    if(previousData){
        localSTR = JSON.parse(previousData);
    }
    return localSTR
}

export {addToDB , getData}