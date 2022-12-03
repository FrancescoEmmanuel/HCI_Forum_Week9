
const allBloodTypes =["A+","A-","B+","B-","AB+","AB-","O+","O-"] //an array containing all of the blood types

function canGiveBlood(donor, receiver){
    if(allBloodTypes.includes(donor)){  //checks if the donor bloodtype input is a valid blood type
        if(receiver=="A+"){
            if(donor=="A+"|| donor== "A-"|| donor == "O+"|| donor == "O-"){
                return true;
            }else{
                return false;
            }
        }else if(receiver =="A-"){
            if(donor =="A-"|| donor == "O-"){
                return true;
            }else{
                return false;
            }
        }
        else if (receiver == "B+"){
            if(donor == "B+"|| donor == "B-"|| donor == " O+"|| donor =="O-" ){
                return true;
            }
            else{
                return false;
            }
        }
        else if(receiver =="B-"){
            if(donor =="B-"|| donor =="O-"){
                return true;
            }else{
                return false;
            }
        }
        else if (receiver == "AB+"){
            if(allBloodTypes.includes(donor)){
                return true;
            }else{
                return false;
            }
        }
        else if (receiver == "AB-"){
            if(donor =="AB-"|| donor == "A-"||donor == "B-"||donor == "O-"){
                return true;
            }else{
                return false;
            }
        }
        else if(receiver == "O+"){
            if(donor =="O+"||donor=="O-"){
                return true;
            }
            else{
                return false;
            }
        }
        
        else if(receiver =="O-"){
            if(donor=="O-"){
                return true;
            }
            else{
                return false;
            }
            
        }
        else{
            return "The receiver blood type inputted is not a valid blood type."; //if the receiver blood type inputted is not any of the ones called above
        }
        
    }
    else{
        return "The donor blood type inputted is not a valid blood type."; //if the donator blood type inputted is not in the allBloodTypes array
    }
    
    
}

let test1 = canGiveBlood("O+", "A+")
let test2 = canGiveBlood("A-", "B-") 
let test3 = canGiveBlood('L+','O-')
let test4 = canGiveBlood("B-","Z-")

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)