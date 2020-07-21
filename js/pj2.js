function ageInDays(){
    var birthYear = prompt('what year were u born');
    var presentYear = prompt('the present year we are');
    var ageInDayss = (presentYear- birthYear)*365;
    var h1= document.createElement('h1');
    var textAnswer = document.createTextNode('you are' + ageInDayss + 'days old');
    
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}