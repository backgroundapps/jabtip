function Tip(id, name, img, link, template){

  this.id = id;
  this.name = name;
  this.img = img;
  this.link = link;
  this.template = template;

  this.run = function(){alert("RUN!! " + this.name);};
}


function readFile(file, callback) {
  alert("readFile");
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}



function readClass(obj, callback) {
  alert("readClass");

  var rawFile = new XMLHttpRequest();
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(obj);
      }
  }
}

