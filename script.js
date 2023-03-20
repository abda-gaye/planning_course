// recuperation des donnees
let select = document.querySelector("select")
let hours = document.querySelector(".hours")
let title = document.querySelector(".title")
let search = document.querySelector(".container #search")
let desc1 = document.querySelector(".child:nth-child(1)>:nth-child(1)")
let desc2 = document.querySelector(".child:nth-child(2)>:nth-child(1)")
let desc3 = document.querySelector(".child:nth-child(3)>:nth-child(1)")
let desc4 = document.querySelector(".child:nth-child(4)>:nth-child(1)")
let desc5 = document.querySelector(".child:nth-child(5)>:nth-child(1)")
let desc6 = document.querySelector(".child:nth-child(6)>:nth-child(1)")
let descbis1 = document.querySelector(".child:nth-child(1)>:nth-child(2)")
let descbis2 = document.querySelector(".child:nth-child(2)>:nth-child(2)")
let descbis3 = document.querySelector(".child:nth-child(3)>:nth-child(2)")
let descbis4 = document.querySelector(".child:nth-child(4)>:nth-child(2)")
let descbis5 = document.querySelector(".child:nth-child(5)>:nth-child(2)")
let descbis6 = document.querySelector(".child:nth-child(6)>:nth-child(2)")
let leftcontent = document.querySelector(".container .main .leftContent")
let description = document.querySelectorAll(".leftContent .descriptions .description")
let container = document.querySelector(".container")
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
        select.addEventListener("click",function(){
            let valeur =select.options[this.selectedIndex].value
            if (valeur==1) {
                let div1 = document.createElement('div')
                let div2 = document.createElement('div')
                let div3 = document.createElement('div')
                div1.innerHTML = `
                    <p>l2</p>
                    <p>javascript</p>
                    <p>2</p>
                `
                div2.innerHTML = `
                    <p>l2</p>
                    <p>CSS</p>
                    <p>3</p>
                `
                div3.innerHTML = `
                    <p>l1</p>
                    <p>web design</p>
                    <p>5</p>
                `
                div1.style.backgroundColor = "red"
                div1.classList.toggle("c1")
                descbis2.appendChild(div1)
                div2.style.backgroundColor = "green"
                div2.classList.toggle("c2")
                descbis3.appendChild(div2)
                div3.style.backgroundColor = "yellow"
                div3.classList.toggle("c3")
                descbis6.appendChild(div3)
            }
            else if (valeur==2) {
                let div1 = document.createElement('div')
                let div2 = document.createElement('div')
                div1.innerHTML = `
                    <p>l2</p>
                    <p>PHP</p>
                    <p>2</p>
                `
                div2.innerHTML = `
                    <p>l2</p>
                    <p>Java</p>
                    <p>3</p>
                `
                div1.style.backgroundColor = "red"
                div1.classList.toggle("c1")
                descbis2.appendChild(div1)
                div2.style.backgroundColor = "green"
                div2.classList.toggle("c2")
                descbis3.appendChild(div2)
                descbis6.appendChild(div3)
            }
            else if (valeur==3) {
                let div1 = document.createElement('div')
                div1.innerHTML = `
                    <p>l2</p>
                    <p>laravel</p>
                    <p>5</p>
                `
               
                div1.style.backgroundColor = "violet"
                div1.classList.toggle("c1")
                descbis5.appendChild(div1)
            }
            else if (valeur==4) {
                let div2 = document.createElement('div')
               
                div2.innerHTML = `
                    <p>l3</p>
                    <p>scrum</p>
                    <p>2</p>
                `
                div2.style.backgroundColor = "green"
                div2.classList.toggle("c2")
                descbis3.appendChild(div2)
                
            }
            else if (valeur==5) {
                let div1 = document.createElement('div')
                let div2 = document.createElement('div')
                div1.innerHTML = `
                    <p>l2</p>
                    <p>PHP</p>
                    <p>2</p>
                `
                div2.innerHTML = `
                    <p>l2</p>
                    <p>Java</p>
                    <p>3</p>
                `
                div1.style.backgroundColor = "green"
                div1.classList.toggle("c1")
                descbis2.appendChild(div1)
                div2.style.backgroundColor = "yellow"
                div2.classList.add("c2")
                descbis3.appendChild(div2)
                descbis6.appendChild(div3)
            }
        })
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


// effet dark light
let darkParent = document.querySelector(".darkParent")
let dark = document.querySelector(".dark")
darkParent.addEventListener("click",function(){
    darkParent.classList.toggle('active');
    container.classList.toggle('active')
    title.classList.toggle('active')
    desc1.classList.toggle('active')
    desc2.classList.toggle('active')
    desc3.classList.toggle('active')
    desc4.classList.toggle('active')
    desc5.classList.toggle('active')
    desc6.classList.toggle('active')
    leftcontent.classList.toggle('active')
    search.classList.toggle('active')
    for(let i=0;i<description.length;i++){
    description[i].classList.toggle('active')
    }
    descbis1.classList.toggle('active')
    descbis2.classList.toggle('active')
    descbis3.classList.toggle('active')
    descbis4.classList.toggle('active')
    descbis5.classList.toggle('active')
    descbis6.classList.toggle('active')
    hours.classList.toggle('active')
})
// on manipule la balise select
 