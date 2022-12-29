const game = new PIXI.Application({
    width: innerWidth,
    height: innerHeight,
    backgroundColor: 0xabdbe3,
  });
  
  document.getElementById("game").append(game.view);
  
  loadAssets(
    [
    
      { name: "back", url: "./assets/cardback.jpeg" },
     // { name: "front", url: "./assets/cardback.png" },
    ],
    start
  );
  
  // -------------------------------
  const pBar = document.getElementById("bar");
  const pText = document.getElementById("progress");
  function preload(e) {
    pBar.style.width = e.progress  + "%";
    pText.innerText = e.progress + "%";
    if (e.progress === 100) {
      console.log("hide loader");
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
      }, 500);
    }
    console.log(e.progress);
  }
  
  function loadAssets(list, onLoadComplete) {
    game.loader.onProgress.add(preload);
    game.loader.add(list).load(onLoadComplete);
  }
  
  function start(loader, resources) {
  

  var x=0;
  var y=0;
  var w=99;
  var t=142

  
  
  for(var i=0;i<6;i++){
    x=x+99;
    task(i,resources,x,y,w,t);
  
       
   }


  }


  function task(i,resources,x,y,w,t) {

    
    setTimeout(function() {

      const sprite = PIXI.Sprite.from(resources["back"].texture);
      var texture=new PIXI.Texture(sprite.texture, new PIXI.Rectangle(x,y,w,t));
      var frame=new PIXI.Sprite(texture);

       frame.position.set(551,227);
 
      game.stage.addChild(frame);
     console.log("dgdhgjhghj");
  
    }, 2000 * i);
  }