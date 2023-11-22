
let elem = document.getElementById('simulator');


let scrollTop = $(window).scrollTop();
console.log(scrollTop) ;


// Fullscreen

$('.full-screen').click(function(){


        $('.full-screen').css("display" , "none");
        $('.min-screen').css("display" , "flex");

        
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
          }

          if(elem.requestFullscreen){
            elem.css("padding" , "30px")
          }

})

// Exit Fullscreen

$('.min-screen').click(function(){

    $('.min-screen').css({"display" : "none" , "box-shadow" : "none"});
    $('.full-screen').css("display" , "flex");

        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }
      
})




function reset(){

let intialValue = 100 ;

$('#o-input').val(intialValue);
$('#o-value').html($('#o-input').val()/100)

$('#l-input').val(intialValue);
$('#l-value').html($('#l-input').val()/100)

objectUpdate();
liquidUpdate();
submergedUpdate()

}


// Object density

$('#o-input').on('input' , function(){
   $('#o-value').html($('#o-input').val()/100);
   objectUpdate();
   submergedUpdate()

})


// Fluid density

$('#l-input').on('input'  , function (){
  $('#l-value').html($('#l-input').val()/100);

  liquidUpdate();
  submergedUpdate()
})


//Object related updates

function objectUpdate(){
  
  // Mass of object
  let mass = Math.floor(1000*($('#o-input').val()/100)) ;
  $('#mass-o-value').html(mass + "  g");
  
  //Weight of an Object
  
  let weight = Math.floor(mass*9.8) ;
  $('#weight-o-value').html(weight + " N");
  
  
}  

//Object related updates

function liquidUpdate(){
  
  //Buoyant Force
  
  let buoyant = Math.floor(1000*9.8*($('#l-input').val()/100))
  $('#buoyant-l-value').html(buoyant + " N");
  
}

//Submerged value Update 

 function submergedUpdate(){

   let objectDensity = Math.floor(1000*($('#o-input').val()/100)) ;
   let liquidDensity = Math.floor(1000*($('#l-input').val()/100)) ;
   let submergedValue =  Math.floor((objectDensity/liquidDensity) *100) ;
   let submergedDistance = Math.ceil((objectDensity/liquidDensity) *100*0.38) ;
  


  if(submergedValue < 100){
    $('#submerged-value').html(submergedValue + "%");

  }
  else {
    $('#submerged-value').html(100 + "%");
   
  } 

  console.log(submergedValue) ;
  console.log(submergedDistance) ;


 

  $('[id=block]').css("transform" , "translateY(-38px)");

  if(submergedDistance > 190){
    $('[id=block]').css("transform" , "translateY(" + 190 + "px)")
  }


  else if (submergedDistance <25){
    $('[id=block]').css("transform" , "translateY(" + -(25-submergedDistance) + "px)")
  }

  else {
    $('[id=block]').css("transform" , "translateY(" + submergedDistance + "px)")
  }



 
 

 }


// Object Density Dropdowns 

$('#o-dropdown-icon').click(function(){

    if($('.o-density-dropdown').css('display') == "none"){

      $('.o-density-dropdown').css("display" , "inline-flex")
    }
    else {
      $('.o-density-dropdown').css("display" , "none")
    }

})

// Fluid Density Dropdowns 

$('#l-dropdown-icon').click(function(){

  if($('.l-density-dropdown').css('display') == "none"){

    $('.l-density-dropdown').css("display" , "inline-flex")
  }
  else {
    $('.l-density-dropdown').css("display" , "none")
  }

})


//Object Density all Dropdown Items

$('#o-drop1').click(function(){

let sodiumValue = 0.97 ;

$('#o-input').val(Math.floor(sodiumValue*100));
$('#o-value').html(sodiumValue)
$('[id=block]').css("fill" , "#C0C0C0");
objectUpdate();
submergedUpdate()

})

$('#o-drop2').click(function(){

  let aluValue = 2.7 ;
  
  $('#o-input').val(Math.floor(aluValue*100));
  $('#o-value').html(aluValue)
  $('[id=block]').css("fill" , "#848789");
  objectUpdate();
  submergedUpdate()
  
  })

  $('#o-drop3').click(function(){

    let ironValue = 7.87;
    
    $('#o-input').val(Math.floor(ironValue*100));
    $('#o-value').html(ironValue)
    $('[id=block]').css("fill" , "#434B4D");
    objectUpdate();
    submergedUpdate()
    
    })

    $('#o-drop4').click(function(){

      let goldValue = 19.32 ;
      
      $('#o-input').val(Math.floor(goldValue*100));
      $('#o-value').html(goldValue)
      $('[id=block]').css("fill" , "rgb(255 237 139)");
      objectUpdate();
      submergedUpdate()
      
      })


      
//Fluid Density all Dropdown Items

$('#l-drop1').click(function(){

  let waterValue = 0.1 ;
  
  $('#l-input').val(Math.floor(waterValue*100));
  $('#l-value').html(waterValue)
  $('[id=water]').css("fill" , "#A6E1FD");
  liquidUpdate();
  submergedUpdate()
  
  })
  
  $('#l-drop2').click(function(){
  
    let keroValue = 0.8 ;
    
    $('#l-input').val(Math.floor(keroValue*100));
    $('#l-value').html(keroValue)
    $('[id=water]').css("fill" , "#13B0FF");
    liquidUpdate();
  submergedUpdate();

  })
    
  
    $('#l-drop3').click(function(){
  
      let galistanValue = 6.44;
      
      $('#l-input').val(Math.floor(galistanValue*100));
      $('#l-value').html(galistanValue)
      $('[id=water]').css("fill" , "rgb(201, 201, 201 )");
      liquidUpdate();
  submergedUpdate()

      
      })
  
      $('#l-drop4').click(function(){
  
        let mercuryValue = 13.6 ;
        
        $('#l-input').val(Math.floor(mercuryValue*100));
        $('#l-value').html(mercuryValue)
        $('[id=water]').css("fill" , "rgb(103 102 102)");
        liquidUpdate();
  submergedUpdate()

        
        })




