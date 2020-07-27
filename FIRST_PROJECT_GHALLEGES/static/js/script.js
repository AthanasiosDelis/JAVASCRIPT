//alert("Let's commense");]
function ageInDays(){
//how do i initiallize eveything?    
    if(document.getElementById('ageInDays')!=null){
    document.getElementById('ageInDays').remove();
    }
    //main fuctionality
    var birthYear=prompt('What is the year of your birth?');
    var oldest=false;
    console.log(oldest);
    if(birthYear<=1900){
        oldest=true;
        console.log(oldest);
    }
    var ageInDayss=(2020-birthYear)*365;
    h1=document.createElement('h1');
    var textAnswer;
    if(oldest){
        textAnswer=document.createTextNode('You are '+ ageInDayss+' days old, dude! Oldest person alive!! Why are you still alive?');
    }
    else{
        textAnswer=document.createTextNode('You are '+ ageInDayss+' days old');
    }
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);    //console.log(ageInDayss)
}
function reset(){
    document.getElementById('ageInDays').remove();
}