// Code your solutions in this file

const gifts= ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event)
{
    let messages= [];
    for (let i=0; i< names.length; i++)
    {
    messages.push("Thank you, "+names[i]+", for the wonderful surprise gift!")
    }
    return messages;
}

//console.log["Guadalupe", "Ollie", "Aki"];
//console.log(writeCards(names,));



function countDown(i)
{
    
    while(i>=0)
    {
        console.log(i);
        i--;
    }
 
}

