var $picked = $("#picked"); // Just to preview picked colors
var nocanvas = $('#image_picker')[0];

let counterDisplayElem = document.querySelector('.counter-display');

var counter = 0;
var dry = 0;
var wet = 0;

const baseColors = [
  {
    "hex": "#1f4325",
    "name": "Test 5A",
  },
  {
    "hex": "#1b3f22",
    "name": "Test 5B",
  },
  {
    "hex": "#2c562f",
    "name": "Test 4A",
  },
  {
    "hex": "#2e5130",
    "name": "Test 4B",
  },
  {
    "hex": "#3b6223",
    "name": "Test 3A",
  },
  {
    "hex": "#3e5e22",
    "name": "Test 3B",
  },
  {
    "hex": "#527b27",
    "name": "Test 2A",
  },
  {
    "hex": "#507f24",
    "name": "Test 2B",
  },
  {
    "hex": "#657e19",
    "name": "Test 1A",
  },
  {
    "hex": "#638017",
    "name": "Test 1B",
  },
]

function showPreview(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("image_picker");
    preview.src = src;
    preview.style.display = "flex";
    setTimeout(function() {
      $("#image_picker").trigger('click');
      }, 100);
      $('#image_picker').click(false);
  }
}

function rgbToHex(R, G, B) {
  return toHex(R) + toHex(G) + toHex(B);
}

function toHex(n) {
  n = parseInt(n, 10);
  if (isNaN(n))  return "00";
  n = Math.max(0, Math.min(n, 255));
  return "0123456789ABCDEF".charAt((n - n % 16) / 16)  + "0123456789ABCDEF".charAt(n % 16);
}

// from https://stackoverflow.com/a/5624139
function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Distance between 2 colors (in RGB)
// https://stackoverflow.com/questions/23990802/find-nearest-color-from-a-colors-list
function distance(a, b) {
    return Math.sqrt(Math.pow(a.r - b.r, 2) + Math.pow(a.g - b.g, 2) + Math.pow(a.b - b.b, 2));
}

// return nearest color from array
function nearestColor(colorHex){
  var lowest = Number.POSITIVE_INFINITY;
  var tmp;
  let index = 0;
  baseColors.forEach( (el, i) => {
      tmp = distance(hexToRgb(colorHex), hexToRgb(el.hex))
      if (tmp < lowest) {
        lowest = tmp;
        index = i;
      }; 
  })
  return baseColors[index];
}

$('#image_picker').click(function(){
  
  if(10 > counter){
    
    var sourceImage = document.getElementById("image_picker");
    var colorThief = new ColorThief();//Find the dominant color of a the image using color thief api this is a copt out
    var color = colorThief.getColor(sourceImage);
    
    //var Palette = colorThief.getPalette(sourceImage);
    //var Palette1 = Palette[0];

    var R = color[0];
    var G = color[1];
    var B = color[2]; 
    var rgb = R + ',' + G + ',' + B ;
    var hex = rgbToHex(R,G,B);
    const NColor = nearestColor(hex) //Nearest color from array in the nearest.js
       
    //5 mean 
    if (NColor.hex == '#1f4325'){
      $picked.append("<span style='background:#"+hex+"'>5 GREAT</span>"); 

      counter++;
      counterDisplayElem.innerHTML = counter;
        
    //5 modus
    }else if (NColor.hex == '#1b3f22'){
      $picked.append("<span style='background:#"+hex+"'>5 GREAT</span>"); 
      
      
      counter++;
      counterDisplayElem.innerHTML = counter;

    //4 mean
    }else if (NColor.hex == '#2c562f'){
      
      $picked.append("<span style='background:#"+hex+"'>4 BAD</span>"); 
      
      wet++;
      dry++;
      counter++;
      counterDisplayElem.innerHTML = counter;
    
    //4 modus
    }else if (NColor.hex == '#2e5130'){
      $picked.append("<span style='background:#"+hex+"'>4 BAD</span>"); 
      
      wet++;
      dry++;
      counter++;
      counterDisplayElem.innerHTML = counter;

    //3 mean  
    }else if (NColor.hex == '#3b6223' ){
      $picked.append("<span style='background:#"+hex+"'>3 BAD</span>"); 
      
      wet++;
      dry++;
      counter++;
      counterDisplayElem.innerHTML = counter;
    
    //3 modus
    }else if (NColor.hex == '#3e5e22'){
      $picked.append("<span style='background:#"+hex+"'>3 BAD</span>"); 
      
      wet++;
      dry++;
      counter++;
      counterDisplayElem.innerHTML = counter;
    
    //2 mean
    }else if (NColor.hex == '#527b27'){
      $picked.append("<span style='background:#"+hex+"'>2 BAD</span>"); 
      
      wet++;
      dry++;
      counter++;
      counterDisplayElem.innerHTML = counter;
    //2 modus
    }else if (NColor.hex == '#507f24'){
      $picked.append("<span style='background:#"+hex+"'>2 BAD</span>"); 
      
      wet++;
      dry++;
      counter++;
      counterDisplayElem.innerHTML = counter;

    //1 mean
    }else if (NColor.hex == '#657e19'){
      $picked.append("<span style='background:#"+hex+"'>1 BAD</span>"); 
      
      wet++;
      dry++;
      counter++;
      counterDisplayElem.innerHTML = counter;
    
    //1 modus
    }else if (NColor.hex == '#638017'){
      $picked.append("<span style='background:#"+hex+">1 BAD</span>"); 
      
      wet++;
      dry++;
      counter++;
      counterDisplayElem.innerHTML = counter;
    }else{
      alert("You select not the color of the rice leaf or need more fertilizer");
      $('#wet input').val('-- Kg');
      $('#dry input').val('-- Kg');
      $picked.append("<span style='background:#"+hex+"> #"+hex+" X </span>");
    }             
  }else if(10 >= counter){
    document.getElementById("task-form").style.visibility = 'visible';
    document.getElementById("submit").style.visibility = 'visible';
    alert("You have been scan 10 times!");
    $('#image_picker').click(false);
    setTimeout(function() {
      $("#fileResult").trigger('click');
      }, 100);
  }else{
    $('#image_picker').click(false);
    alert("You have been scan 10 times!");
  }
});

$(document).ready(function(){
  $("#fileResult").click(function(){
    document.getElementById("task-form").style.visibility = 'visible';
    document.getElementById("submit").style.visibility = 'visible';
    document.getElementById("fileResult").style.visibility = 'hidden';
    document.getElementById("myDetails").open = false;
    if (wet == 10||dry == 10) {
      $('#wet input').val('23 kg N/ha',wet);
      $('#dry input').val('30 kg N/ha',dry);
      $('#leaf input').val('CRITICAL');
    }else if(wet >= 5||dry >= 5){
      $('#wet input').val('23 kg N/ha',wet);
      $('#dry input').val('30 kg N/ha',dry);
      $('#leaf input').val('CRITICAL');
    }else if(wet <= 4||dry <= 4){
      $('#wet input').val('NOT NEEDED',wet);
      $('#dry input').val('NOT NEEDED',dry);
      $('#leaf input').val('GREAT');
    }
  });
});

$(document).ready(function(){
  $("#file_reset").click(function(){
    $('#image_picker').attr('src', '');
    $("#picked").empty();
    $('#wet input').val('');
    $('#dry input').val('');
    $('#leaf input').val('');
    counter = 0;
    wet = 0;
    dry = 0;
    counterDisplayElem.innerHTML = counter;
    document.getElementById("fileResult").style.visibility = 'hidden';
    document.getElementById("task-form").style.visibility = 'hidden';
    document.getElementById("submit").style.visibility = 'hidden';
    document.getElementById("myDetails").open = true;
  });

  $("#submit").click(function(){
    $('#image_picker').attr('src', '');
    $("#picked").empty();
    $('#wet input').val('');
    $('#dry input').val('');
    $('#leaf input').val('');
    counter = 0;
    wet = 0;
    dry = 0;
    counterDisplayElem.innerHTML = counter;
    document.getElementById("fileResult").style.visibility = 'hidden';
    document.getElementById("task-form").style.visibility = 'hidden';
    document.getElementById("submit").style.visibility = 'hidden';
    document.getElementById("myDetails").open = true;
  });
});
