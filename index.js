 
function introduction(name){
    console.log(`Hi,my name is ${name}.`);
}
function introductionWithLanguage(name, language){
    console.log(`Hi, my name is ${name} and i am learning to code ${language}.`);
}
function helloToSay(name, language = "javascript"){
    console.log(`hello, my name is ${name} and i am learning to codeing ${language}`);
}
introduction("barry")
introductionWithLanguage("barry", "javascript")
helloToSay("barry")

 



