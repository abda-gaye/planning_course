// recuperation des donnees
let select = document.querySelector("select")
let btnteacher = document.querySelector("#teacher")
let btnsalle = document.querySelector("#salle")
let btnclassroom = document.querySelector("#classroom")
let btnmodules = document.querySelector("#module")
let teachers = ["aly","wane","djiby","Niasse","mbaye"]
let salles = ["1","2","3","4","5"]
let modules = ["javascript","js","algo","php","agile srum"]
let classes = ["l1","l2","annexe1","a18","b20"]
let boutons = [btnteacher,btnclassroom,btnmodules,btnsalle]

btnteacher.addEventListener('click',function(){
        btnteacher.style.backgroundColor = "lightblue"
        for(let i=0;i<teachers.length;i++){
            select.innerHTML =  `
            <select name="" id="">
            <option value="1">${teachers[0]}</option>
            <option value="2">${teachers[1]}</option>
            <option value="3">${teachers[2]}</option>
            <option value="4">${teachers[3]}</option>
            <option value="5">${teachers[4]}</option>
            </select>
            `
          
        }
        
})
btnmodules.addEventListener('click',function(){
    select.innerHTML =  `
    <select name="" id="selection">
        <option value="1">${modules[0]}</option>
        <option value="2">${modules[1]}</option>
        <option value="3">${modules[2]}</option>
        <option value="4">${modules[3]}</option>
        <option value="5">${modules[4]}</option>
    </select>
    
    `  
})
btnclassroom.addEventListener('click',function(){
    
    select.innerHTML =  `
    <select name="" id="">
        <option value="1">${classes[0]}</option>
        <option value="2">${classes[1]}</option>
        <option value="3">${classes[2]}</option>
        <option value="4">${classes[3]}</option>
        <option value="5">${classes[4]}</option>
    </select>
    
    `  
})
for(let i=0;i<salles.length;i++){
    btnsalle.addEventListener('click',function(){
        let option = document.createElement('option')
        option.setAttribute("value",i)
        select.innerHTML =  `
        <select name="" id="">
            <option value="1">${salles[0]}</option>
            <option value="2">${salles[1]}</option>
            <option value="3">${salles[2]}</option>
            <option value="4">${salles[3]}</option>
            <option value="5">${salles[4]}</option>
        </select>
        
        ` 
       
    })
}
// on manipule la balise select
select.addEventListener("change",function(){
    if ((select.options[this.selectedIndex].value)==1) {
        let div = this.innerHTML = `
        
        `
    }
}) 