// listeningin.js
 /*
 In this project, you'll be writing a short program 
 that checks a block of text for your name.

 Specifically, it will check the text for the first 
 letter of your name, then push the number of 
 characters equal to your name's length to an array. 
 By inspecting the array, you'll be able to see if 
 your name was mentioned!

 Once you've got the hang of loops, arrays, and if 
 statements, we'll talk about ways this project 
 could be improved.
 */
var text="knvaoen Santing knbo";
var myName="Santing";
var hits=[];
var i,j=0;

for(i=0;i<=text.length;i++){
    console.log("text[" + i +"]: " + text[i] +  " - myName[" + j + "]: " + myName[j]);
    if(text[i]==myName[j]){
        console.log(text[i] + " = " + myName[j]);
        hits.push(text[i]);
        console.log(hits);
        j=j+1;
    }else{
        j=0;
    }
}
