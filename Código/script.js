
let elem = document.getElementById('simulator');
let fullScreen = document.getElementsByClassName('full-screen');
let minScreen = document.getElementsByClassName('min-screen');

let oInput = document.getElementById('o-input')
let oValue = document.getElementById('o-value')

let lInput = document.getElementById('l-input')
let lValue = document.getElementById('l-value')

console.log(document.querySelectorAll('[class=block]'));


// Object density

function updateOInput(){

    oValue.innerHTML = `${oInput.value / 100} `
    objectUpdate()
    submergedUpdate()

    
}

// Fluid density

function updateLInput(){

    lValue.innerHTML = `${lInput.value / 100} `

    liquidUpdate()
    submergedUpdate()

    
}

//Object related updates

function objectUpdate(){
  
    // Mass of object
    let mass = Math.floor(1000*(oInput.value/100)) ;
    document.getElementById('mass-o-value').innerHTML = `${mass} g`
    
    //Weight of an Object
    
    let weight = Math.floor(mass*9.8) ;
    document.getElementById('weight-o-value').innerHTML= `${weight} N`
    
    
  }  

//Liquid related updates

function liquidUpdate(){
  
    //Buoyant Force
    
    let buoyant = Math.floor(1000*9.8*(lInput.value / 100))

    document.getElementById('buoyant-l-value').innerHTML = `${buoyant} N`


  }
  
//Submerged Update

  function submergedUpdate(){

    let objectDensity = Math.floor(1000*(oInput.value/100)) ;
    let liquidDensity = Math.floor(1000*(lInput.value/100)) ;
    let submergedValue =  Math.floor((objectDensity/liquidDensity) *100) ;
    let submergedDistance = Math.ceil((objectDensity/liquidDensity) *100*0.38) ;
   
 
 
   if(submergedValue < 100)
       document.getElementById('submerged-value').innerHTML = `${submergedValue} %`
   
   else 
    document.getElementById('submerged-value').innerHTML = `100 %`    


    console.log( document.getElementsByName('block') );

    document.getElementsByName('block')[0].style.transform = "translateY(-38px)"
    document.getElementsByName('block')[1].style.transform = "translateY(-38px)"
    document.getElementsByName('block')[2].style.transform = "translateY(-38px)"

    if(submergedDistance > 190){
    document.getElementsByName('block')[0].style.transform = "translateY(" + 190 + "px)"
    document.getElementsByName('block')[1].style.transform = "translateY(" + 190 + "px)"
    document.getElementsByName('block')[2].style.transform = "translateY(" + 190 + "px)"
    }
  
  
    else if (submergedDistance <25){
    document.getElementsByName('block')[0].style.transform = "translateY(" + -(25-submergedDistance) + "px)"
    document.getElementsByName('block')[1].style.transform = "translateY(" + -(25-submergedDistance) + "px)"
    document.getElementsByName('block')[2].style.transform = "translateY(" + -(25-submergedDistance) + "px)"
    }
  
    else {
    document.getElementsByName('block')[0].style.transform = "translateY(" + submergedDistance + "px)"
    document.getElementsByName('block')[1].style.transform = "translateY(" + submergedDistance + "px)"
    document.getElementsByName('block')[2].style.transform = "translateY(" + submergedDistance + "px)"
    }
 
  }
 
  // Object Density Dropdowns 

function oDropdown(){

    let oDensityDropdown = document.getElementsByClassName('o-density-dropdown')

    if(oDensityDropdown[0].style.display == 'none'){
        oDensityDropdown[0].style.display = 'inline-flex'
    }
    else{
        oDensityDropdown[0].style.display = 'none'
    }

}

// Fluid Density Dropdowns 

function lDropdown(){


    let lDensityDropdown = document.getElementsByClassName('l-density-dropdown')

    if(lDensityDropdown[0].style.display == 'none'){
        lDensityDropdown[0].style.display = 'inline-flex'
    }
    else{
        lDensityDropdown[0].style.display = 'none'
    }

}

 ///////////////////////////////////////////////Object Density all Dropdown Items///////////////////////////////

document.getElementById('o-drop1').addEventListener('click' , ()=>{
        
    let sodiumValue = 0.97

    oInput.value = Math.floor(sodiumValue*100)
    oValue.innerHTML = sodiumValue

    document.getElementsByName('block')[0].style.fill ="#c0c0c0"
    document.getElementsByName('block')[1].style.fill ="#c0c0c0"
    document.getElementsByName('block')[2].style.fill ="#c0c0c0"

    objectUpdate();
    submergedUpdate()


} ) 

document.getElementById('o-drop2').addEventListener('click' , ()=>{
        
    let aluValue = 2.7

    oInput.value = Math.floor(aluValue*100)
    oValue.innerHTML = aluValue

    document.getElementsByName('block')[0].style.fill ="#848789"
    document.getElementsByName('block')[1].style.fill ="#848789"
    document.getElementsByName('block')[2].style.fill ="#848789"

    objectUpdate();
    submergedUpdate()

    
} ) 

document.getElementById('o-drop3').addEventListener('click' , ()=>{
        
    let ironValue = 7.87

    oInput.value = Math.floor(ironValue*100)
    oValue.innerHTML = ironValue

    document.getElementsByName('block')[0].style.fill ="#434B4D"
    document.getElementsByName('block')[1].style.fill ="#434B4D"
    document.getElementsByName('block')[2].style.fill ="#434B4D"

    objectUpdate();
    submergedUpdate()

    
} ) 

document.getElementById('o-drop4').addEventListener('click' , ()=>{
        
    let goldValue = 19.32

    oInput.value = Math.floor(goldValue*100)
    oValue.innerHTML = goldValue

    document.getElementsByName('block')[0].style.fill ="rgb(255 237 139)"
    document.getElementsByName('block')[1].style.fill ="rgb(255 237 139)"
    document.getElementsByName('block')[2].style.fill ="rgb(255 237 139)"

    objectUpdate();
    submergedUpdate()

    
} ) 

////////////////////////////////////////////////Fluid Density all Dropdown Items/////////////////////////////////////

document.getElementById('l-drop1').addEventListener('click' , ()=>{
        
    let waterValue = 0.1

    lInput.value = Math.floor(waterValue*100)
    lValue.innerHTML = waterValue

    document.getElementsByName('water')[0].style.fill ="#A6E1FD"
    document.getElementsByName('water')[1].style.fill ="#A6E1FD"
    document.getElementsByName('water')[2].style.fill ="#A6E1FD"
    document.getElementsByName('water')[3].style.fill ="#A6E1FD"
    document.getElementsByName('water')[4].style.fill ="#A6E1FD"
    document.getElementsByName('water')[5].style.fill ="#A6E1FD"
    liquidUpdate();
    submergedUpdate()

    
} ) 

document.getElementById('l-drop2').addEventListener('click' , ()=>{
        
    let keroValue = 0.8

    lInput.value = Math.floor(keroValue*100)
    lValue.innerHTML = keroValue

    document.getElementsByName('water')[0].style.fill ="#13B0FF"
    document.getElementsByName('water')[1].style.fill ="#13B0FF"
    document.getElementsByName('water')[2].style.fill ="#13B0FF"
    document.getElementsByName('water')[3].style.fill ="#13B0FF"
    document.getElementsByName('water')[4].style.fill ="#13B0FF"
    document.getElementsByName('water')[5].style.fill ="#13B0FF"

    liquidUpdate();
    submergedUpdate()

    
} ) 

document.getElementById('l-drop3').addEventListener('click' , ()=>{
        
    let galistanValue = 6.44

    lInput.value = Math.floor(galistanValue*100)
    lValue.innerHTML = galistanValue

    document.getElementsByName('water')[0].style.fill ="rgb(201, 201, 201 )"
    document.getElementsByName('water')[1].style.fill ="rgb(201, 201, 201 )"
    document.getElementsByName('water')[2].style.fill ="rgb(201, 201, 201 )"
    document.getElementsByName('water')[3].style.fill ="rgb(201, 201, 201 )"
    document.getElementsByName('water')[4].style.fill ="rgb(201, 201, 201 )"
    document.getElementsByName('water')[5].style.fill ="rgb(201, 201, 201 )"

    liquidUpdate();
    submergedUpdate()

    
} ) 

document.getElementById('l-drop4').addEventListener('click' , ()=>{
        
    let mercuryValue = 13.6

    lInput.value = Math.floor(mercuryValue*100)
    lValue.innerHTML = mercuryValue

    document.getElementsByName('water')[0].style.fill ="rgb(103 102 102)"
    document.getElementsByName('water')[1].style.fill ="rgb(103 102 102)"
    document.getElementsByName('water')[2].style.fill ="rgb(103 102 102)"
    document.getElementsByName('water')[3].style.fill ="rgb(103 102 102)"
    document.getElementsByName('water')[4].style.fill ="rgb(103 102 102)"
    document.getElementsByName('water')[5].style.fill ="rgb(103 102 102)"

    liquidUpdate();
    submergedUpdate()

    
} ) 



//FullScreen

function Fullscreen(){

    fullScreen[0].style.display = "none"
    minScreen[0].style.display = "flex"


    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }

      if(elem.requestFullscreen){
        elem.style.padding = "30px"
      }

}


//Exit FullScreen 

function exitFullscreen(){

    minScreen[0].style.display = "none"
    minScreen[0].style.boxShadow = "none"
    fullScreen[0].style.display = "felx"

    if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    
}

//Reset 

function reset(){

    let intialValue = 100 ;


    oInput.value = intialValue
    oValue.innerHTML = `${oInput.value / 100}` 

    lInput.value = intialValue
    lValue.innerHTML = `${oInput.value / 100}` 

    document.getElementsByName('block')[0].style.fill ="white"
    document.getElementsByName('block')[1].style.fill ="white"
    document.getElementsByName('block')[2].style.fill ="white"

    document.getElementsByName('water')[0].style.fill ="#A2E0FF"
    document.getElementsByName('water')[1].style.fill ="#A2E0FF"
    document.getElementsByName('water')[2].style.fill ="#A2E0FF"
    document.getElementsByName('water')[3].style.fill ="#A2E0FF"
    document.getElementsByName('water')[4].style.fill ="#A2E0FF"
    document.getElementsByName('water')[5].style.fill ="#A2E0FF"
    
    objectUpdate();
    liquidUpdate();
    submergedUpdate()
    
    }
    