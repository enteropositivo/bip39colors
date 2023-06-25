
/**
 *   BIP39 to Colors
 */
function generateColorsBtn_click() {
  
   if(BIP39Colors.fromSeed(elem("seed")) ){
      hide("error1");
      show("output1");

      const palette = new ColorPalette("canvas", {
        colorWidth: 120,
        textSize: 14
      });
      
      console.log( BIP39Colors.colors);
      console.log( BIP39Colors.colorPalette);
      console.log( BIP39Colors.wordPositions);
      //palette.draw(BIP39Colors.colors);
      palette.draw(BIP39Colors.colorPalette);
  
      elem("dn", "src", palette.canvas.toDataURL());
      const dpr = window.devicePixelRatio;
      dn.width =  palette.canvas.width/dpr;

      elem("output_colors", "innerText", BIP39Colors.colors.join("  "));

    }else{
      elem("error1", "innerHTML",  BIP39Colors.getError());
      show("error1");
      hide("output1");
      console.log(BIP39Colors.getError());
    }

}

/**
 *   Colors to BIP39
 */
function generateSeedBtn_click() {
 
  if( BIP39Colors.toSeed(elem("colors")) ){
    hide("error2");
    show("output2");
    elem("output_seed", "innerText", BIP39Colors.seed);
  }else{
    show("error2");
    elem("error2", "innerHTML", BIP39Colors.getError());
  }
}


  document.addEventListener('DOMContentLoaded', function() {
    var currentAnchor = getCurrentAnchor();
    changeTab(currentAnchor);
    
    const generateColorsBtn = document.getElementById('generateColorsBtn');
    const generateSeedBtn = document.getElementById('generateSeedBtn');
    generateColorsBtn.addEventListener('click', generateColorsBtn_click);
    generateSeedBtn.addEventListener('click', generateSeedBtn_click);
  });

  function getCurrentAnchor() {
    if (window.location.hash) {
      console.log(window.location.hash);
      return window.location.hash.substr(1);
    }
    return 'biptocolors';
  }    



  function changeTab(tab) {
    var tabIndex = 1;
    
    //- change anchor without affecting historic navigation
    var urlWithoutAnchor = window.location.href.split('#')[0]; 
    var newUrl = urlWithoutAnchor + '#' + tab; 
    window.history.replaceState({}, '', newUrl); 

    if(tab=="colorstobip39") tabIndex = 2;

    var tabs = document.getElementsByClassName("tab");
    var contents = document.getElementsByClassName("tabcontent");
    
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
      tabs[i].classList.remove("active");
    }

    var selectedTab = document.getElementById("tab" + tabIndex);
    var selectedContent = document.getElementById("content" + tabIndex);
    selectedContent.style.display = "block";
    selectedTab.classList.add("active");
  }



 //- basic functions to avoid jQuery dependency
  function hide(elem){
    var elem = document.getElementById(elem);
    elem.style.display = "none";
  }
  function show(elem){
    var elem = document.getElementById(elem);
    elem.style.display = "block";
  }
  // get or set DOM element property
  function elem(elem, prop, val){
    if(prop==undefined) prop ="value";
    var elem = document.getElementById(elem);
    if(val == undefined) return elem[prop];
    elem[prop] = val;
  }




  class ColorPalette {
    constructor(canvas, options = {}) {
      this._canvas = null;
      this.ctx = null;
      this.col = 0;
      this.row = 0;

      this.setCanvas(canvas);

      this.opt = {
        colorWidth: 120,
        colorHeight: 50,
        colorSepW: 3,
        colorSepH: 3,
        textPadding: 4,
        textSize: 14,
        ...options   
      };
    }

    setCanvas(name) {
      this._canvas = document.getElementById(name);

      if (this._canvas.getContext) {
        this.ctx = this._canvas.getContext('2d', { alpha: false });
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.mozImageSmoothingEnabled = false;
        this.ctx.oImageSmoothingEnabled = false;
        this.ctx.webkitImageSmoothingEnabled = false;
      }
    }

    get canvas() {
      return this._canvas;
    }

    getTextColorForBackground(hexColor) {
      const red = parseInt(hexColor.substr(1, 2), 16);
      const green = parseInt(hexColor.substr(3, 2), 16);
      const blue = parseInt(hexColor.substr(5, 2), 16);
    
      const relativeLuminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;

      return relativeLuminance > 0.5 ? 'black' : 'white';
    }

    drawColor(color){
      this.ctx.beginPath();
      this.ctx.fillStyle=color;
      
      var boxW = this.col*(this.opt.colorWidth  +this.opt.colorSepW ) + this.opt.colorSepW;
      var boxH = this.row*(this.opt.colorHeight +this.opt.colorSepH)  + this.opt.colorSepH;

      this.ctx.fillRect(boxW ,  boxH ,this.opt.colorWidth,this.opt.colorHeight);
      this.ctx.font = this.opt.textSize+"px monospace";

      const text = this.ctx.measureText(color); // TextMetrics object

      this.ctx.fillStyle=this.getTextColorForBackground(color);
      this.ctx.fillText(color, boxW + this.opt.colorWidth- text.width -this.opt.textPadding , boxH + this.opt.colorHeight - this.opt.textPadding);

      this.ctx.stroke();
    }

    draw(colors){
      
      this.row=0; this.col=0;

      var rows=colors.length;
      var cols=1;

      const dpr = window.devicePixelRatio;
        
      var width = cols* (this.opt.colorWidth  +this.opt.colorSepW ) +this.opt.colorSepW;
      var height = rows* (this.opt.colorHeight+this.opt.colorSepH) + this.opt.colorSepH;

      this._canvas.height = height * dpr;
      this._canvas.width =  width * dpr;
      this.ctx.scale(dpr, dpr);
      this._canvas.style.width = `${width}px`;
      this._canvas.style.height = `${height}px`;

      for(var i=0;i< colors.length;i++){
        this.drawColor(colors[i]);
        this.row++; this.col=0;
      }

  }
  }

