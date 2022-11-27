let string ='';
document.querySelector('.input').value ='0.0';

function insert(num){

string=string+num;
document.querySelector('.input').value =string;

}


function equals(){
    string = eval(string);
    document.querySelector('.input').value =string; 
}



function clean(){

string ='';
document.querySelector('.input').value =string; 

}


function back(){
string =string.substring(0,string.length-1);
document.querySelector('.input').value = string;

}