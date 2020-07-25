//alert("Let's commense");]
function ageInDays(){
    if(document.getElementById('ageInDays')!=null){
    document.getElementById('ageInDays').remove();
    }
    var birthYear=prompt('What is the year of your birth?');
    var ageInDayss=(2020-birthYear)*365;
    h1=document.createElement('h1');
    var textAnswer=document.createTextNode('You are '+ ageInDayss+' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);    //console.log(ageInDayss)
//how do i initiallize eveything?
    h1=null;
    textAnswer=null;
}
function reset(){
    document.getElementById('ageInDays').remove();
}