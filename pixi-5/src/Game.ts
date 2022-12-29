import {
	Application,
	Sprite,
	Text,
	Container,
	Loader,
	LoaderResource,
  } from "pixi.js";
  import { gsap } from "gsap";
  import { sound } from "@pixi/sound";
  import { Dict } from "@pixi/utils";
  export class Game extends Application {
	constructor(opts: any) {
	  super(opts);
	  this.preload(
		[
		  { name: "casinobg", url: "assets/casino3.jpg" },
		  { name: "casinobg1", url: "assets/casino4.jpg" },
   { name: "casinobg2", url: "assets/casino5.jpg" },
		  { name: "jackpotlogo", url: "assets/jackpotlogo.png" },
		
		],
		this.onLoad.bind(this)
	  );
	}
	preload(list: any[], cb: () => {}): void {
	
	  this.loader.add(list);
	  this.loader.load(cb);
	}
  
	onLoad(): void {
  
	  const casinobg1 = new Sprite(this.loader.resources["casinobg1"].texture);
	  casinobg1.x = 0;
	  casinobg1.y = 0;
	  casinobg1.visible = false
	  casinobg1.scale.set(1.2);
	  this.stage.addChild(casinobg1);
  
   const casinobg2 = new Sprite(this.loader.resources["casinobg2"].texture);
	  casinobg2.x = 0;
	  casinobg2.y = 0;
	  casinobg2.visible = false
	  casinobg2.scale.set(0.8);
	  this.stage.addChild(casinobg2);
  
	
  
	  const casinobg = new Sprite(this.loader.resources["casinobg"].texture);
	  casinobg.x = -75;
	  casinobg.y = 0;
	  casinobg.scale.set(0.45);
	  this.stage.addChild(casinobg);
  
	  const jackpotlogo = new Sprite(
		this.loader.resources["jackpotlogo"].texture
	  );
	  jackpotlogo.buttonMode = true;
	  jackpotlogo.interactive = true;
	  jackpotlogo.x = innerWidth / 2 - 300;
	  jackpotlogo.y = innerHeight / 2 + 220;
	  jackpotlogo.scale.set(0.3);
	  jackpotlogo.anchor.set(0.5);
	  this.stage.addChild(jackpotlogo);
	  jackpotlogo.on("pointerup", () => {
		jackpotlogo.interactive = false;
		jackpotlogo.visible = false;
		casinobg.visible = false
		casinobg2.visible = true
		casinobg1.visible = true
		setTimeout(() => {
		  casinobg2.visible = false
		  casinobg1.visible = false
		  jackpotlogo.interactive = true;
		  jackpotlogo.visible = true;
		  casinobg.visible = true
		}, 3000);
	  });
	}
  }
  