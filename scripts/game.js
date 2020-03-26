function Gamestart() {
	var canvas = document.getElementById('game');
	var game = new LostWorld(canvas);
	game.loadGame();
};
var LostWorld = function(canvas) {
	var self = this;
	this.canvas = canvas;
	this.ctx = canvas.getContext("2d");
	this.entities = [];
	this.Entity = {
		sourceX: 0,
		sourceY: 0,
		sourceWidth: 70,
		sourceHeight: 70,
		x: 0,
		y: 0,
		width: 70,
		height: 70,
	};
    WebFont.load({
		google: {
			families: ['K2D:300,400,700']
		}
	});
	//tworzenie klasy gry wraz z parametrami
	class Logic{
		constructor(floor,ingame){
			this.floor=floor;
			this.ingame=ingame;
		}
	}
	//tworzenie klasy sceny wraz z parametrami
	class Background{
		constructor(sourceX,sourceY,sourceWidth,sourceHeight,x,y,width,height){
			this.sourceX=sourceX;
			this.sourceY=sourceY;
			this.sourceWidth=sourceWidth;
			this.sourceHeight=sourceHeight;
			this.width=width;
			this.height=height;
			this.x=x;
			this.y=y;
		}
	}
	//tworzenie klasy wyposazenia wraz z parametrami
	class Misc{
		constructor(active,sourceX,sourceY,sourceWidth,sourceHeight,x,y,width,height,skin,animate){
			this.active=active;
			this.sourceX=sourceX;
			this.sourceY=sourceY;
			this.sourceWidth=sourceWidth;
			this.sourceHeight=sourceHeight;
			this.width=width;
			this.height=height;
			this.x=x;
			this.y=y;
			this.skin=skin;
			this.animate=animate;	
		}
		animating(){
			if(this.active==true){
				if(this.skin==0){
					this.sourceX=562;
					this.sourceY=1628;
				}
				if(this.skin==1){
					this.width=96;
					this.height=116;
					this.sourceWidth = 48;
					this.sourceHeight = 56;
					if(this.animate<=16&&this.animate>=0){
						this.animate+=1;
					}else{
						this.animate=16;
					}
					if(this.animate>=0&&this.animate<=4){
						this.sourceX = 1326;
						this.sourceY = 1329;
					}
					if(this.animate>=4&&this.animate<=8){
						this.sourceX = 1421;
						this.sourceY = 1329;
					}
					if(this.animate>=8&&this.animate<=12){
						this.sourceX = 1373;
						this.sourceY = 1329;
					}
					if(this.animate>=12&&this.animate<=16){
						this.sourceX = 1421;
						this.sourceY = 1329;
					}
					if(this.animate>=16){
						this.animate=0;
					}
				}
				if(this.skin==2){
					this.width=38;
					this.height=110;
					this.sourceWidth = 19;
					this.sourceHeight = 55;
					this.sourceX=1332;
					this.sourceY=1430;
					self.animate=0;
				}
				if(this.skin==3){
					this.width=374;
					this.height=122;
					this.sourceWidth = 187;
					this.sourceHeight = 66;
					if(this.animate<=16&&this.animate>=0){
						this.animate+=1;
					}else{
						this.animate=16;
					}
					if(this.animate>=0&&this.animate<=4){
						this.sourceX = 1471;
						this.sourceY = 1330;
					}
					if(this.animate>=4&&this.animate<=8){
						this.sourceX = 1471;
						this.sourceY = 1397;
					}
					if(this.animate>=8&&this.animate<=12){
						this.sourceX = 1471;
						this.sourceY = 1397;
					}
					if(this.animate>=12&&this.animate<=16){
						this.sourceX = 1471;
						this.sourceY = 1330;
					}
					if(this.animate>=16){
						this.animate=0;
					}
				}
				if(this.skin==4){
					this.width=144;
					this.height=224;
					this.sourceWidth = 77;
					this.sourceHeight = 112;
					this.sourceX=1385;
					this.sourceY=1430;
					self.animate=0;
				}
				if(this.skin==5){
					this.width=86;
					this.height=86;
					this.sourceWidth = 43;
					this.sourceHeight = 43;
					if(this.animate<=12&&this.animate>=0){
						this.animate+=1;
					}else{
						this.animate=12;
					}
					if(this.animate>=0&&this.animate<=4){
						this.sourceX = 1329;
						this.sourceY = 1386;
					}
					if(this.animate>=4&&this.animate<=8){
						this.sourceX = 1374;
						this.sourceY = 1386;
					}
					if(this.animate>=8&&this.animate<=12){
						this.sourceX = 1419;
						this.sourceY = 1386;
					}
					if(this.animate>=12){
						this.animate=0;
					}
				}
				if(this.skin==6){
					this.width=676;
					this.height=54;
					this.sourceWidth = 338;
					this.sourceHeight = 27;
					this.sourceX = 882;
					this.sourceY = 1639;
				}
			}else{
				this.sourceX=562;
				this.sourceY=1628;
			}
		}
	}
	//tworzenie klasy dialogu wraz z parametrami
	class Infobox{
		constructor(active,sourceX,sourceY,sourceWidth,sourceHeight,x,y,width,height,skin){
			this.active=active;
			this.sourceX=sourceX;
			this.sourceY=sourceY;
			this.sourceWidth=sourceWidth;
			this.sourceHeight=sourceHeight;
			this.width=width;
			this.height=height;
			this.x=x;
			this.y=y;
			this.skin=skin;
		}
		animating(){
			if(this.active==true){
				if(this.skin==0){
					this.sourceX=562;
					this.sourceY=1628;
				}
				if(this.skin==1){
					this.width=442;
					this.height=82;
					this.sourceWidth = 221;
					this.sourceHeight = 42;
					this.sourceX=1102;
					this.sourceY=1329;
					this.x=135;
					this.y=200;
				}
				if(this.skin==2){
					this.width=442;
					this.height=82;
					this.sourceWidth = 221;
					this.sourceHeight = 42;
					this.sourceX=1102;
					this.sourceY=1413;
					this.x=135;
					this.y=200;
				}
				if(this.skin==3){
					this.width=442;
					this.height=82;
					this.sourceWidth = 221;
					this.sourceHeight = 42;
					this.sourceX=1102;
					this.sourceY=1371;
					this.x=135;
					this.y=200;
				}
				if(this.skin==4){
					this.width=442;
					this.height=82;
					this.sourceWidth = 221;
					this.sourceHeight = 42;
					this.sourceX=1102;
					this.sourceY=1497;
					this.x=135;
					this.y=200;
				}
				if(this.skin==5){
					this.width=442;
					this.height=82;
					this.sourceWidth = 221;
					this.sourceHeight = 42;
					this.sourceX=1102;
					this.sourceY=1455;
					this.x=135;
					this.y=200;
				}
				if(this.skin==6){
					this.width=442;
					this.height=82;
					this.sourceWidth = 221;
					this.sourceHeight = 42;
					this.sourceX=1102;
					this.sourceY=1539;
					this.x=135;
					this.y=200;
				}
				if(this.skin==7){
					this.width=442;
					this.height=82;
					this.sourceWidth = 221;
					this.sourceHeight = 42;
					this.sourceX=1102;
					this.sourceY=1539;
					this.x=135;
					this.y=200;
				}
			}
		}
	}
	//tworzenie klasy gracza wraz z parametrami
	class Player{
		constructor(active,sourceX,sourceY,sourceWidth,sourceHeight,x,y,width,height,speed,moveUp,moveDown,moveLeft,moveRight,movement,animate,level,exp,next,gold,kills,apple,key,carrot,following){
			this.active=active;
			this.sourceX=sourceX;
			this.sourceY=sourceY;
			this.sourceWidth=sourceWidth;
			this.sourceHeight=sourceHeight;
			this.width=width;
			this.height=height;
			this.x=x;
			this.y=y;
			this.speed=speed;
			this.moveUp=moveUp;
			this.moveDown=moveDown;
			this.moveLeft=moveLeft;
			this.moveRight=moveRight;
			this.movement=movement;
			this.animate=animate;
			this.gold=gold;
			this.kills=kills;
			this.level=level;
			this.exp=exp;
			this.next=next;
			this.apple=apple;
			this.key=key;
			this.carrot=carrot;
			this.following=following;
			this.speed = {x:0,y:0};
		}
		movements(){
			if(this.active==true){
				if(this.moveDown==true){
					if(this.y>175){
						this.speed.y = -1.4;
					}else{
						this.y=175;
					}
				}
				if(this.moveUp==true){
					if(this.y<532){
						this.speed.y = 1.4;
					}else{
						this.y=532;
					}
				}
				if(this.moveRight==true){
					if(this.x>60){
						this.speed.x = -1.4;
					}else{
						this.x=60;
					}
				}
				if(this.moveLeft==true){
					if(this.x<623){
						this.speed.x = 1.4;
					}else{
						this.x=623;
					}
				}
				if(!this.moveUp && !this.moveDown){
					this.speed.y = 0;
				}
				if(!this.moveRight && !this.moveLeft){
					this.speed.x = 0;
				}
			}
		}
	}
	//tworzenie klasy pierwszego slota ekwipunku wraz z parametrami
	class Equipment{
		constructor(active,sourceX,sourceY,sourceWidth,sourceHeight,x,y,width,height,skin){
			this.active=active;
			this.sourceX=sourceX;
			this.sourceY=sourceY;
			this.sourceWidth=sourceWidth;
			this.sourceHeight=sourceHeight;
			this.width=width;
			this.height=height;
			this.x=x;
			this.y=y;
			this.skin=skin;	
		}
		animating(){
			if(this.active==true){
				if(this.skin==0){
					this.sourceX=562;
					this.sourceY=1628;
				}
				if(this.skin==1){
					this.width=52;
					this.height=36;
					this.sourceWidth = 26;
					this.sourceHeight = 18;
					this.sourceX=852;
					this.sourceY=1549;
					this.x=528;
					this.y=70;
				}
				if(this.skin==2){
					this.width=52;
					this.height=36;
					this.sourceWidth = 26;
					this.sourceHeight = 18;
					this.sourceX=798;
					this.sourceY=1567;
					this.x=635;
					this.y=70;
				}
				if(this.skin==3){
					this.width=52;
					this.height=36;
					this.sourceWidth = 26;
					this.sourceHeight = 18;
					this.sourceX=825;
					this.sourceY=1567;
					this.x=635;
					this.y=70;
				}
			}
		}
	}
	//tworzenie obiektu ataku gracza wraz z parametrami
	class Firstattack {
		constructor(active,sourceX,sourceY,sourceWidth,sourceHeight,x,y,width,height,movement,animate){
			this.active=active;
			this.sourceX=sourceX;
			this.sourceY=sourceY;
			this.sourceWidth=sourceWidth;
			this.sourceHeight=sourceHeight;
			this.width=width;
			this.height=height;
			this.x=x;
			this.y=y;
			this.movement=movement;
			this.animate=animate;	
		}
		movements(){
			if(this.active==true){
				hero.active=false;
				this.movement=hero.movement;
				if(hero.movement==0){
					this.x=hero.x-55;
					this.y=hero.y-35;
				}
				if(hero.movement==1){
					this.x=hero.x-53;
					this.y=hero.y-35;
				}
				if(hero.movement==2){
					this.x=hero.x-55;
					this.y=hero.y-37;
				}
				if(hero.movement==3){
					this.x=hero.x-55;
					this.y=hero.y-37;
				}
				if(this.animate<24){
					this.animate++;
				}else{
					this.animate=0;
					this.active=false;
				}
				if(this.movement==0){
					if(this.animate>=0&&this.animate<=12){
						this.sourceX=562;
						this.sourceY=1403;
					}
					if(this.animate>=12&&this.animate<=24){
						this.sourceX=637;
						this.sourceY=1403;
					}
				}
				if(this.movement==1){
					if(this.animate>=0&&this.animate<=12){
						this.sourceX=562;
						this.sourceY=1328;
					}
					if(this.animate>=12&&this.animate<=24){
						this.sourceX=637;
						this.sourceY=1328;
					}
				}
				if(this.movement==2){
					if(this.animate>=0&&this.animate<=12){
						this.sourceX=562;
						this.sourceY=1478;
					}
					if(this.animate>=12&&this.animate<=24){
						this.sourceX=637;
						this.sourceY=1478;
					}
				}
				if(this.movement==3){
					if(this.animate>=0&&this.animate<=12){
						this.sourceX=562;
						this.sourceY=1553;
					}
					if(this.animate>=12&&this.animate<=24){
						this.sourceX=637;
						this.sourceY=1553;
					}
				}
			}else{
				this.x=0;
				this.y=0;
				this.sourceX=562;
				this.sourceY=1626;
				hero.active=true;
				if(hero.movement==0){
					hero.sourceX=361;
					hero.sourceY=1331;
				}
				if(hero.movement==1){
					hero.sourceX=461;
					hero.sourceY=1331;
				}
				if(hero.movement==2){
					hero.sourceX=361;
					hero.sourceY=1370;
				}
				if(hero.movement==3){
					hero.sourceX=461;
					hero.sourceY=1370;
				}
			}
		}
	}
	//tworzenie klasy npc wraz z parametrami
	class Npc{
		constructor(active,sourceX,sourceY,sourceWidth,sourceHeight,x,y,width,height,speed,timemove,movement,skin,animate){
			this.active=active;
			this.sourceX=sourceX;
			this.sourceY=sourceY;
			this.sourceWidth=sourceWidth;
			this.sourceHeight=sourceHeight;
			this.width=width;
			this.height=height;
			this.x=x;
			this.y=y;
			this.speed=speed;
			this.timemove=timemove;
			this.movement=movement;
			this.skin=skin;
			this.animate=animate;	
		}
		movements(){
			if(this.active==true){
				if(this.skin==0){
					this.sourceX=562;
					this.sourceY=1626;
				}
				if(this.skin==1){
					if(hero.x<this.x){
						this.sourceX=482;
						this.sourceY=1482;
					}else{
						this.sourceX=502;
						this.sourceY=1482;		
					}
				}
				if(this.skin==2){
					this.sourceX=361;
					this.sourceY=1407; 
					this.sourceWidth=20;
					this.width=42;
					if(this.animate<=16&&this.animate>=0){
						this.animate+=1;
					}else{
						this.animate=16;
					}
					if(this.movement==1){
						if(this.x<610){
							this.x+=1.5;
							if(this.animate>=0&&this.animate<=4){
								this.sourceX=361;
							}
							if(this.animate>=4&&this.animate<=8){
								this.sourceX=361;
							}
							if(this.animate>=8&&this.animate<=12){
								this.sourceX=381;
							}
							if(this.animate>=12&&this.animate<=16){
								this.sourceX=381;
							}
							if(this.animate>=16){
								this.animate=0;
							}
						}else{
							this.movement= 3;
						}
					}
					if(this.movement==2){
						if(this.x>70){
							this.x-=1.5;
							if(this.animate>=0&&this.animate<=4){
								this.sourceX=401;
							}
							if(this.animate>=4&&this.animate<=8){
								this.sourceX=401;
							}
							if(this.animate>=8&&this.animate<=12){
								this.sourceX=421;
							}
							if(this.animate>=12&&this.animate<=16){
								this.sourceX=421;
							}
							if(this.animate>=16){
								this.animate=0;
							}
						}else{
							this.movement= 4;
						}
					}
					if(this.movement==3){
						if(this.y<520){
							this.y+=1.5;
							if(this.animate>=0&&this.animate<=4){
								this.sourceX=441; 
							}
							if(this.animate>=4&&this.animate<=8){
								this.sourceX=441;
							}
							if(this.animate>=8&&this.animate<=12){
								this.sourceX=461;
							}
							if(this.animate>=12&&this.animate<=16){
								this.sourceX=461; 
							}
							if(this.animate>=16){
								this.animate=0;
							}
						}else{
							this.movement= 2;
						}
					}
					if(this.movement==4){
						if(this.y>180){
							this.y-=1.5;
							if(this.animate>=0&&this.animate<=4){
								this.sourceX=481;
							}
							if(this.animate>=4&&this.animate<=8){
								this.sourceX=481;
							}
							if(this.animate>=8&&this.animate<=12){
								this.sourceX=501;
							}
							if(this.animate>=12&&this.animate<=16){
								this.sourceX=501;
							}
							if(this.animate>=16){
								this.animate=0;
							}
						}else{
							this.movement= 1;
						}
					}
				}
				if(this.skin==3){
					this.sourceX=361;
					this.sourceY=1445;
					this.sourceWidth=23;
					this.width=54;
					if(this.animate<=16&&this.animate>=0){
						this.animate+=1;
					}else{
						this.animate=16;
					}
					if(this.movement==1){
						if(this.x<610){
							this.x+=1.5;
							if(this.animate>=0&&this.animate<=4){
								this.sourceX=360;
							}
							if(this.animate>=4&&this.animate<=8){
								this.sourceX=360;
							}
							if(this.animate>=8&&this.animate<=12){
								this.sourceX=383;
							}
							if(this.animate>=12&&this.animate<=16){
								this.sourceX=383;
							}
							if(this.animate>=16){
								this.animate=0;
							}
						}else{
							this.movement= 3;
						}
					}
					if(this.movement==2){
						if(this.x>70){
							this.x-=1.5;
							if(this.animate>=0&&this.animate<=4){
								this.sourceX=406;
							}
							if(this.animate>=4&&this.animate<=8){
								this.sourceX=406;
							}
							if(this.animate>=8&&this.animate<=12){
								this.sourceX=429;
							}
							if(this.animate>=12&&this.animate<=16){
								this.sourceX=429;
							}
							if(this.animate>=16){
								this.animate=0;
							}
						}else{
							this.movement= 4;
						}
					}
					if(this.movement==3){
						if(this.y<520){
							this.y+=1.5;
							if(this.animate>=0&&this.animate<=4){
								this.sourceX=452; 
							}
							if(this.animate>=4&&this.animate<=8){
								this.sourceX=452;
							}
							if(this.animate>=8&&this.animate<=12){
								this.sourceX=475;
							}
							if(this.animate>=12&&this.animate<=16){
								this.sourceX=475; 
							}
							if(this.animate>=16){
								this.animate=0;
							}
						}else{
							this.movement= 2;
						}
					}
					if(this.movement==4){
						if(this.y>180){
							this.y-=1.5;
							if(this.animate>=0&&this.animate<=4){
								this.sourceX=498;
							}
							if(this.animate>=4&&this.animate<=8){
								this.sourceX=498;
							}
							if(this.animate>=8&&this.animate<=12){
								this.sourceX=521;
							}
							if(this.animate>=12&&this.animate<=16){
								this.sourceX=521;
							}
							if(this.animate>=16){
								this.animate=0;
							}
						}else{
							this.movement= 1;
						}
					}
				}
				if(this.skin==4){
					this.sourceX=361;
					this.sourceY=1483;
					this.sourceWidth=20;
					this.width=42;
					if(this.animate<=32&&this.animate>=0){
						this.animate+=1;
					}else{
						this.animate=32;
					}
					if(this.movement==1){
						if(this.x<610){
							this.x+=1;
							if(this.animate>=0&&this.animate<=8){
								this.sourceX=361;
								this.sourceY=1483;
							}
							if(this.animate>=8&&this.animate<=16){
								this.sourceX=381;
								this.sourceY=1483;
							}
							if(this.animate>=16&&this.animate<=24){
								this.sourceX=401;
								this.sourceY=1483;
							}
							if(this.animate>=24&&this.animate<=32){
								this.sourceX=381;
								this.sourceY=1483;
							}
							if(this.animate>=32){
								this.animate=0;
							}
						}else{
							this.movement= 3;
						}
					}
					if(this.movement==2){
						if(this.x>70){
							this.x-=1;
							if(this.animate>=0&&this.animate<=8){
								this.sourceX=461;
								this.sourceY=1483;
							}
							if(this.animate>=8&&this.animate<=16){
								this.sourceX=441;
								this.sourceY=1483;
							}
							if(this.animate>=16&&this.animate<=24){
								this.sourceX=421;
								this.sourceY=1483;
							}
							if(this.animate>=24&&this.animate<=32){
								this.sourceX=441;
								this.sourceY=1483;
							}
							if(this.animate>=32){
								this.animate=0;
							}
						}else{
							this.movement= 4;
						}
					}
					if(this.movement==3){
						if(this.y<520){
							this.y+=1;
							if(this.animate>=0&&this.animate<=8){
								this.sourceX=361;
								this.sourceY=1521;
							}
							if(this.animate>=8&&this.animate<=16){
								this.sourceX=381;
								this.sourceY=1521;
							}
							if(this.animate>=16&&this.animate<=24){
								this.sourceX=361;
								this.sourceY=1521;
							}
							if(this.animate>=24&&this.animate<=32){
								this.sourceX=381;
								this.sourceY=1521;
							}
							if(this.animate>=32){
								this.animate=0;
							}
						}else{
							this.movement= 2;
						}
					}
					if(this.movement==4){
						if(this.y>180){
							this.y-=1;
							if(this.animate>=0&&this.animate<=8){
								this.sourceX=401;
								this.sourceY=1521;
							}
							if(this.animate>=8&&this.animate<=16){
								this.sourceX=421;
								this.sourceY=1521;
							}
							if(this.animate>=16&&this.animate<=24){
								this.sourceX=401;
								this.sourceY=1521;
							}
							if(this.animate>=24&&this.animate<=32){
								this.sourceX=421;
								this.sourceY=1521;
							}
							if(this.animate>=32){
								this.animate=0;
							}
						}else{
							this.movement= 1;
						}
					}
				}
				if(this.skin==5){
					this.sourceX=361;
					this.sourceY=1559;
					this.sourceWidth=20;
					this.width=42;
					if(this.animate<=32&&this.animate>=0){
						this.animate+=1;
					}else{
						this.animate=32;
					}
					if(this.movement==1){
						if(this.x<610){
							this.x+=2;
							if(this.animate>=0&&this.animate<=8){
								this.sourceX=361;
								this.sourceY=1559;
							}
							if(this.animate>=8&&this.animate<=16){
								this.sourceX=381;
								this.sourceY=1559;
							}
							if(this.animate>=16&&this.animate<=24){
								this.sourceX=401;
								this.sourceY=1559;
							}
							if(this.animate>=24&&this.animate<=32){
								this.sourceX=381;
								this.sourceY=1559;
							}
							if(this.animate>=32){
								this.animate=0;
							}
						}else{
							this.movement= 3;
						}
					}
					if(this.movement==2){
						if(this.x>70){
							this.x-=2;
							if(this.animate>=0&&this.animate<=8){
								this.sourceX=461;
								this.sourceY=1559;
							}
							if(this.animate>=8&&this.animate<=16){
								this.sourceX=441;
								this.sourceY=1559;
							}
							if(this.animate>=16&&this.animate<=24){
								this.sourceX=421;
								this.sourceY=1559;
							}
							if(this.animate>=24&&this.animate<=32){
								this.sourceX=441;
								this.sourceY=1559;
							}
							if(this.animate>=32){
								this.animate=0;
							}
						}else{
							this.movement= 4;
						}
					}
					if(this.movement==3){
						if(this.y<520){
							this.y+=2;
							if(this.animate>=0&&this.animate<=8){
								this.sourceX=361;
								this.sourceY=1597;
							}
							if(this.animate>=8&&this.animate<=16){
								this.sourceX=381;
								this.sourceY=1597;
							}
							if(this.animate>=16&&this.animate<=24){
								this.sourceX=361;
								this.sourceY=1597;
							}
							if(this.animate>=24&&this.animate<=32){
								this.sourceX=381;
								this.sourceY=1597;
							}
							if(this.animate>=32){
								this.animate=0;
							}
						}else{
							this.movement= 2;
						}
					}
					if(this.movement==4){
						if(this.y>180){
							this.y-=2;
							if(this.animate>=0&&this.animate<=8){
								this.sourceX=401;
								this.sourceY=1597;
							}
							if(this.animate>=8&&this.animate<=16){
								this.sourceX=421;
								this.sourceY=1597;
							}
							if(this.animate>=16&&this.animate<=24){
								this.sourceX=401;
								this.sourceY=1597;
							}
							if(this.animate>=24&&this.animate<=32){
								this.sourceX=421;
								this.sourceY=1597;
							}
							if(this.animate>=32){
								this.animate=0;
							}
						}else{
							this.movement= 1;
						}
					}
				}
				if(this.skin==6){
					this.sourceX=361;
					this.sourceY=1636; 
					this.sourceWidth=22;
					this.width=42;
					if(this.animate<=16&&this.animate>=0){
						this.animate+=1;
					}else{
						this.animate=16;
					}
					if(this.movement==1){
						if(this.x<610){
							this.x+=1.5;
							if(this.animate>=0&&this.animate<=4){
								this.sourceX=361;
							}
							if(this.animate>=4&&this.animate<=8){
								this.sourceX=361;
							}
							if(this.animate>=8&&this.animate<=12){
								this.sourceX=384;
							}
							if(this.animate>=12&&this.animate<=16){
								this.sourceX=384;
							}
							if(this.animate>=16){
								this.animate=0;
							}
						}else{
							this.movement= 3;
						}
					}
					if(this.movement==2){
						if(this.x>70){
							this.x-=1.5;
							if(this.animate>=0&&this.animate<=4){
								this.sourceX=408;
							}
							if(this.animate>=4&&this.animate<=8){
								this.sourceX=408;
							}
							if(this.animate>=8&&this.animate<=12){
								this.sourceX=431;
							}
							if(this.animate>=12&&this.animate<=16){
								this.sourceX=431;
							}
							if(this.animate>=16){
								this.animate=0;
							}
						}else{
							this.movement= 4;
						}
					}
					if(this.movement==3){
						if(this.y<520){
							this.y+=1.5;
							if(this.animate>=0&&this.animate<=4){
								this.sourceX=454; 
							}
							if(this.animate>=4&&this.animate<=8){
								this.sourceX=454;
							}
							if(this.animate>=8&&this.animate<=12){
								this.sourceX=476;
							}
							if(this.animate>=12&&this.animate<=16){
								this.sourceX=476; 
							}
							if(this.animate>=16){
								this.animate=0;
							}
						}else{
							this.movement= 2;
						}
					}
					if(this.movement==4){
						if(this.y>210){
							this.y-=1.5;
							if(this.animate>=0&&this.animate<=4){
								this.sourceX=500;
							}
							if(this.animate>=4&&this.animate<=8){
								this.sourceX=500;
							}
							if(this.animate>=8&&this.animate<=12){
								this.sourceX=523;
							}
							if(this.animate>=12&&this.animate<=16){
								this.sourceX=523;
							}
							if(this.animate>=16){
								this.animate=0;
							}
						}else{
							this.movement= 1;
						}
					}
				}
				if(this.skin==7){
					this.sourceX=484;
					this.sourceY=1521;
				}
				if(this.skin==8){
					if(hero.x<this.x){
						this.sourceX=441;
						this.sourceY=1520;
					}else{
						this.sourceX=461;
						this.sourceY=1520;		
					}
				}
				if(this.skin==9){
					this.sourceX=361;
					this.sourceY=1445;
					this.sourceWidth=23;
					this.width=54;
					if(this.animate<=32&&this.animate>=0){
						this.animate+=1;
					}else{
						this.animate=32;
					}
					if(this.movement==1){
						if(this.animate>=0&&this.animate<=4){
							this.sourceX=360;
						}
						if(this.animate>=4&&this.animate<=8){
							this.sourceX=360;
						}
						if(this.animate>=8&&this.animate<=12){
							this.sourceX=383;
						}
						if(this.animate>=12&&this.animate<=16){
							this.sourceX=383;
						}
						if(this.animate>=16){
							this.animate=0;
						}
					}
					if(this.movement==2){
						if(this.animate>=0&&this.animate<=4){
							this.sourceX=406;
						}
						if(this.animate>=4&&this.animate<=8){
							this.sourceX=406;
						}
						if(this.animate>=8&&this.animate<=12){
							this.sourceX=429;
						}
						if(this.animate>=12&&this.animate<=16){
							this.sourceX=429;
						}
						if(this.animate>=16){
							this.animate=0;
						}
					}
					if(this.movement==3){
						if(this.animate>=0&&this.animate<=4){
							this.sourceX=452; 
						}
						if(this.animate>=4&&this.animate<=8){
							this.sourceX=452;
						}
						if(this.animate>=8&&this.animate<=12){
							this.sourceX=475;
						}
						if(this.animate>=12&&this.animate<=16){
							this.sourceX=475; 
						}
						if(this.animate>=16){
							this.animate=0;
						}
					}
					if(this.movement==4){
						if(this.animate>=0&&this.animate<=4){
							this.sourceX=498;
						}
						if(this.animate>=4&&this.animate<=8){
							this.sourceX=498;
						}
						if(this.animate>=8&&this.animate<=12){
							this.sourceX=521;
						}
						if(this.animate>=12&&this.animate<=16){
							this.sourceX=521;
						}
						if(this.animate>=16){
							this.animate=0;
						}
					}
				}
			}else{
				this.sourceX=562;
				this.sourceY=1626;
			}
		}
	}
	
	//deklaracja wymiarów całej mapy
	this.gameMap = {
		width: 720,
		height: 660,
	};
	this.loadGame = function(){
		this.masterSprite = new Image();
		this.masterSprite.src = "graphics/tileset.png";
		this.masterSprite.addEventListener("load",function(){
			self.start();
		},false);
	};
	this.start = function() {
		arena = new Background(0,0,360,330,0,0,720,660);
		controller = new Logic(1,true);
		hero = new Player(true,361,1331,20,38,300,300,42,72,0,false,false,false,false,0,0,1,0,100,50,0,0,false,false,false);
		attack1 = new Firstattack(false,562,1327,74,74,152,142,152,142,0,0);
		people = new Npc(true,0,676,20,38,300,300,42,72,0,20,1,2,0);
		people1 = new Npc(true,0,676,20,38,300,300,42,72,0,20,1,2,0);
		people2 = new Npc(true,0,676,20,38,300,300,42,72,0,20,1,0,0);
		exhibit1 = new Misc(true,361,1331,42,56,150,150,42,45,1,0);
		exhibit2 = new Misc(true,361,1331,42,56,150,150,42,45,1,0);
		exhibit3 = new Misc(false,361,1331,42,56,150,150,42,45,1,0);
		dialog = new Infobox(true,1102,1329,221,42,100,100,442,82,1);
		slot1 = new Equipment(true,1102,1329,221,42,100,100,442,82,0);
		slot2 = new Equipment(true,1102,1329,221,42,100,100,442,82,0);
		slot3 = new Equipment(true,1102,1329,221,42,100,100,442,82,0);
		this.entities.push(controller);
		this.entities.push(arena);
		this.entities.push(exhibit3);
		this.entities.push(hero);
		this.entities.push(slot1);
		this.entities.push(slot2);
		this.entities.push(slot3);
		this.entities.push(attack1);
		this.entities.push(exhibit1);
		this.entities.push(exhibit2);
		this.entities.push(people);
		this.entities.push(people1);
		this.entities.push(people2);
		this.entities.push(dialog);
		if(hero.active==true){
			window.addEventListener("keydown", function(event){
				switch(event.keyCode){
					case 38:
						hero.moveDown = true;
						hero.moveUp = false;
						hero.moveLeft = false;
						hero.moveRight = false;
						hero.movement = 3;
					break;
					case 40:
						hero.moveDown = false;
						hero.moveUp = true;
						hero.moveLeft = false;
						hero.moveRight = false;
						hero.movement = 2;
					break;
					case 39:
						hero.moveDown = false;
						hero.moveUp = false;
						hero.moveLeft = true;
						hero.moveRight = false;
						hero.movement = 0;
					break;
					case 37:
						hero.moveDown = false;
						hero.moveUp = false;
						hero.moveLeft = false;
						hero.moveRight = true;
						hero.movement = 1;
					break;
					case 90:
						attack1.active=true;
						hero.speed.x=0;
						hero.speed.y=0;
					break;
				}
			},false)
		}
		window.addEventListener("keyup", function(event){
			switch(event.keyCode){
				case 38:
					hero.moveDown = false;
				break;
				case 40:
					hero.moveUp = false;
				break;
				case 39:
					hero.moveLeft = false;
					break;
				case 37:
					hero.moveRight = false;
				break;
			}
		},false)
			this.update();
	};
	this.update = function() {
		requestAnimationFrame(self.update,self.canvas);
		if(hero.x-dialog.x>-45&&hero.x-dialog.x<450&&hero.y-dialog.y>-80&&hero.y-dialog.y<100){
			dialog.skin=0;
		}
			if(hero.active==true){
				if(hero.animate>=0&&hero.animate<=24){
					hero.animate+=1;
				}else{
					hero.animate=0;
				}
				if(hero.moveDown==true){
					if(hero.animate>=0&&hero.animate<=6){
						hero.sourceX=441;
						hero.sourceY=1370;
					}
					if(hero.animate>=6&&hero.animate<=12){
						hero.sourceX=461;
						hero.sourceY=1370;
					}
					if(hero.animate>=12&&hero.animate<=18){
						hero.sourceX=481;
						hero.sourceY=1370;
					}
					if(hero.animate>=18&&hero.animate<=24){
						hero.sourceX=501;
						hero.sourceY=1370;
					}
				}
				if(hero.moveUp==true){
					if(hero.animate>=0&&hero.animate<=6){
						hero.sourceX=361;
						hero.sourceY=1370;
					}
					if(hero.animate>=6&&hero.animate<=12){
						hero.sourceX=381;
						hero.sourceY=1370;
					}
					if(hero.animate>=12&&hero.animate<=18){
						hero.sourceX=401;
						hero.sourceY=1370;
					}
					if(hero.animate>=18&&hero.animate<=24){
						hero.sourceX=421;
						hero.sourceY=1370;
					}
				}
				if(hero.moveRight==true){
					if(hero.animate>=0&&hero.animate<=6){
						hero.sourceX=461;
						hero.sourceY=1331;
					}
					if(hero.animate>=6&&hero.animate<=12){
						hero.sourceX=441;
						hero.sourceY=1331;
					}
					if(hero.animate>=12&&hero.animate<=18){
						hero.sourceX=421;
						hero.sourceY=1331;
					}
					if(hero.animate>=18&&hero.animate<=24){
						hero.sourceX=441;
						hero.sourceY=1331;
					}
				}
				if(hero.moveLeft==true){
					if(hero.animate>=0&&hero.animate<=6){
						hero.sourceX=361;
						hero.sourceY=1331;
					}
					if(hero.animate>=6&&hero.animate<=12){
						hero.sourceX=381;
						hero.sourceY=1331;
					}
					if(hero.animate>=12&&hero.animate<=18){
						hero.sourceX=401;
						hero.sourceY=1331;
					}
					if(hero.animate>=18&&hero.animate<=24){
						hero.sourceX=381;
						hero.sourceY=1331;
					}
				}
				if(!hero.moveUp && !hero.moveDown){
					hero.speed.y = 0;
				}
				if(!hero.moveRight && !hero.moveLeft){
					hero.speed.x = 0;
				}
			}else{
				hero.sourceX=562;
				hero.sourceY=1626;
			}
		hero.x += hero.speed.x;
		hero.y += hero.speed.y;
		hero.x = Math.max(0, Math.min(hero.x + hero.speed.x, self.gameMap.width - hero.width));
		hero.y = Math.max(0, Math.min(hero.y + hero.speed.y, self.gameMap.height - hero.height));
		//wywolywanie funkcji dla poszczegolnych obiektow
		self.draw();
		hero.movements();
		slot1.animating();
		slot2.animating();
		slot3.animating();
		attack1.movements();
		people.movements();
		people1.movements();
		people2.movements();
		exhibit1.animating();
		exhibit2.animating();
		exhibit3.animating();
		dialog.animating();
		//wyswietlanie zawartosci ekwipunku
		if(hero.apple>=1){
			slot1.skin=1;
		}
		if(hero.key==true){
			slot3.skin=2;
		}
		if(hero.key==false){
			if(hero.carrot==true){
				slot3.skin=3;
			}	
		}
		//podążanie pomocnika za graczem
		if(hero.following==true&&hero.key==false){
			people2.active=true;
			people2.skin=9;
			if(hero.movement==1){
				people2.movement=2;
				people2.x=hero.x+80;
				people2.y=hero.y;
			}
			if(hero.movement==2){
				people2.movement=3;
				people2.y=hero.y-80;
				people2.x=hero.x-5;
			}
			if(hero.movement==3){
				people2.movement=4;
				people2.y=hero.y+80;
				people2.x=hero.x-5;
				}
			if(hero.movement==0){
				people2.movement=1;
				people2.x=hero.x-80;
				people2.y=hero.y;
			}
		}
		//ustawianie obiektow na mapach
		if(controller.floor==1){
			arena.sourceX = 0;
			arena.sourceY = 333;
			people.skin=1;
			people.active=true;
			people.x=400;
			people.y=400;
			people1.active=false;
			exhibit1.active=true;
			exhibit1.x=80;
			exhibit1.y=426;
			exhibit1.skin=1;
			exhibit2.active=true;
			exhibit2.x=562;
			exhibit2.y=426;
			exhibit2.skin=1;
			dialog.skin=1;
			//blokowanie wejscia na pomnik
			if(hero.y>=60&&hero.y<=300){
				if(hero.x>=280&&hero.x<=285){
					hero.x=280;
				}
				if(hero.x>=405&&hero.x<=410){
					hero.x=410;
				}
			}
			if(hero.x>=280&&hero.x<=405){
				if(hero.y>=295&&hero.y<=300){
					hero.y=300;
				}
			}
			if(hero.y>=60&&hero.y<=230){
				if(hero.x>=225&&hero.x<=230){
					hero.x=225;
				}
				if(hero.x>=450&&hero.x<=455){
					hero.x=455;
				}
			}
			if(hero.x>=225&&hero.x<=455){
				if(hero.y>=225&&hero.y<=230){
					hero.y=230;
				}
			}
			//blokowanie wejscia na pochodnie
			//LEWA POCHODNIA
			if(hero.y>=450&&hero.y<=550){
				if(hero.x>=175&&hero.x<=180){
					hero.x=180;
				}
			}
			if(hero.x>=50&&hero.x<=180){
				if(hero.y>=450&&hero.y<=455){
					hero.y=450;
				}
			}
			//PRAWA POCHODNIA
			if(hero.y>=450&&hero.y<=550){
				if(hero.x>=510&&hero.x<=515){
					hero.x=510;
				}
			}
			if(hero.x>=510&&hero.x<=640){
				if(hero.y>=450&&hero.y<=455){
					hero.y=450;
				}
			}
			if(hero.x>260&&hero.x<430){
				if(hero.y>530){
					controller.floor=2;
					hero.y=180;
					people.active=false;
				}
			}
		}
		if(controller.floor==2){
			arena.sourceX = 362;
			arena.sourceY = 333;
			exhibit1.x=23;
			exhibit1.y=332;
			if(hero.key==false){
				exhibit1.skin=2;
			}else{
				exhibit1.skin=0;
			}
			exhibit2.active=false;
			exhibit3.active=true;
			exhibit3.x=314;
			exhibit3.y=380;
			exhibit3.skin=5;
			dialog.skin=2;
			if(hero.x>260&&hero.x<430){
				if(hero.y<180){
					controller.floor=1;
					hero.y=520;
					exhibit3.active=false;
				}
				if(hero.y>530){
					controller.floor=3;
					hero.y=180;
					exhibit2.active=true;
					exhibit3.active=false;
					dialog.skin=0;
				}
			}
			if(hero.y>265&&hero.y<380){
				if(hero.x<65){
					if(hero.key==true){
					controller.floor=12;
					hero.x=615;
					exhibit1.active=true;
					exhibit3.active=false;
					dialog.skin=0;
					}
				}
			}
		}
		if(controller.floor==3){
			arena.sourceX = 724;
			arena.sourceY = 333;
			exhibit1.x=190;
			exhibit1.y=160;
			exhibit1.skin=1;
			exhibit2.x=450;
			exhibit2.y=160;
			exhibit2.skin=1;
			//blokowanie wejscia na pochodnie
			//LEWA POCHODNIA
			if(hero.y>=190&&hero.y<=305){
				if(hero.x>=150&&hero.x<=155){
					hero.x=150;
				}
				if(hero.x>=275&&hero.x<=280){
					hero.x=280;
				}
			}
			if(hero.x>=150&&hero.x<=280){
				if(hero.y>=190&&hero.y<=200){
					hero.y=190;
				}
				if(hero.y>=300&&hero.y<=305){
					hero.y=305;
				}
			}
			//PRAWA POCHODNIA
			if(hero.y>=190&&hero.y<=305){
				if(hero.x>=405&&hero.x<=410){
					hero.x=405;
				}
				if(hero.x>=535&&hero.x<=540){
					hero.x=540;
				}
			}
			if(hero.x>=405&&hero.x<=540){
				if(hero.y>=190&&hero.y<=200){
					hero.y=190;
				}
				if(hero.y>=300&&hero.y<=305){
					hero.y=305;
				}
			}
			if(hero.x>260&&hero.x<430){
				if(hero.y<180){
					controller.floor=2;
					hero.y=520;
				}
				if(hero.y>530){
					controller.floor=4;
					hero.y=180;
					people.active=true;
					people.x=300;
					people.y=450;
					people.movement=1;
					people1.active=true;
					people1.x=300;
					people1.y=250;
					people1.movement=2;
					exhibit1.active=false;
					exhibit2.active=false;
					exhibit3.active=true;
				}
			}
		}
		if(controller.floor==4){
			arena.sourceX = 1086;
			arena.sourceY = 333;
			people.skin=2;
			people1.skin=5;
			exhibit3.x=180;
			exhibit3.y=345;
			exhibit3.skin=3;
			dialog.skin=3;
			//blokowanie wejscia do fontanny
			if(hero.y>=275&&hero.y<=415){
				if(hero.x>=140&&hero.x<=145){
					hero.x=140;
				}
				if(hero.x>=525&&hero.x<=550){
					hero.x=550;
				}
			}
			if(hero.x>=140&&hero.x<=550){
				if(hero.y>=275&&hero.y<=285){
					hero.y=275;
				}
				if(hero.y>=410&&hero.y<=415){
					hero.y=415;
				}
			}
			if(hero.x>260&&hero.x<430){
				if(hero.y<180){
					controller.floor=3;
					hero.y=520;
					people.active=false;
					people1.active=false;
					exhibit1.active=true;
					exhibit2.active=true;
					exhibit3.active=false;
					dialog.skin=0;
				}
			}
			if(hero.y>265&&hero.y<380){
				if(hero.x<65){
					controller.floor=5;
					hero.x=615;
					exhibit3.active=false;
					dialog.skin=0;
				}
				if(hero.x>620){
					controller.floor=6;
					hero.x=70;
					if(hero.carrot==false){
						people.skin=3;
						people.x=300;
						people.y=300;
						people.movement=3;
						dialog.skin=4;
					}else{
						people.skin=0;
						dialog.skin=0;
					}
					people1.active=false;
					exhibit1.active=false;
					exhibit2.active=false;
					exhibit3.active=false;
				}
			}
		}
		if(controller.floor==5){
			arena.sourceX = 1448;
			arena.sourceY = 333;
			people.active=false;
			people1.active=false;
			if(hero.y>265&&hero.y<380){
				if(hero.x>620){
					controller.floor=4;
					hero.x=70;
					exhibit3.active=true;
					people.active=true;
					people.x=300;
					people.y=450;
					people.movement=1;
					people1.active=true;
					people1.x=300;
					people1.y=250;
					people1.movement=2;
				}
			}
			if(hero.y<=270){
				hero.y=270;
			}
			if(hero.x>235&&hero.x<335){
				if(hero.y<290){
					controller.floor=11;
					hero.y=520;
					people.skin=4;
					people.x=300;
					people.y=300;
					people.movement=3;
				}
			}
		}
		if(controller.floor==6){
			arena.sourceX = 1810;
			arena.sourceY = 333;
			if(hero.key==false){
				if(hero.carrot==true){
					hero.following=true;
				}
			}
			if(hero.y>=150&&hero.y<=490){
				if(hero.x>=405&&hero.x<=410){
					hero.x=405;
				}
			}
			if(hero.x>=405&&hero.x<=660){
				if(hero.y>=465&&hero.y<=470){
					hero.y=470;
				}
			}
			if(hero.x>260&&hero.x<430){
				if(hero.y>530){
					controller.floor=7;
					hero.y=180;
					people.active=true;
					people.skin=4;
					people.x=300;
					people.y=300;
					people.movement=1;
				}
			}
			if(hero.y>265&&hero.y<380){
				if(hero.x<65){
					controller.floor=4;
					hero.x=615;
					exhibit3.active=true;
					people.active=true
					people.x=300;
					people.y=450;
					people.movement=1;
					people1.active=true;
					people1.x=300;
					people1.y=250;
					people1.movement=2;
					dialog.skin=2;
				}
			}
		}
		if(controller.floor==7){
			arena.sourceX = 2172;
			arena.sourceY = 333;
			if(hero.x<=188){
				hero.x=188;
			}
			if(hero.x>=490){
				hero.x=490;
			}
			if(hero.x>260&&hero.x<430){
				if(hero.y<180){
					controller.floor=6;
					hero.y=520;
					if(hero.carrot==false){
						people.skin=3;
						people.x=300;
						people.y=300;
						people.movement=3;
						dialog.skin=4;
					}else{
						people.skin=0;
						dialog.skin=0;
					}
				}
				if(hero.y>530){
					controller.floor=8;
					hero.y=180;
				}
			}
		}
		if(controller.floor==8){
			arena.sourceX = 2534;
			arena.sourceY = 333;
			if(hero.y>=365){
				hero.y=365;
			}
			if(hero.x>260&&hero.x<430){
				if(hero.y<180){
					controller.floor=7;
					hero.y=520;
				}
			}
			if(hero.y>265&&hero.y<380){
				if(hero.x<65){
					controller.floor=9;
					hero.x=615;
					exhibit1.active=true;
					people.skin=6;
					people.x=300;
					people.y=550;
					people.movement=1;
				}
			}
		}
		if(controller.floor==9){
			arena.sourceX = 2896;
			arena.sourceY = 333;
			exhibit1.x=280;
			exhibit1.y=185;
			exhibit1.skin=4;
			//blokowanie wejscia na drzewo
			if(hero.y>=240&&hero.y<=440){
				if(hero.x>=195&&hero.x<=200){
					hero.x=195;
				}
				if(hero.x>=495&&hero.x<=500){
					hero.x=500;
				}
			}
			if(hero.x>=195&&hero.x<=500){
				if(hero.y>=240&&hero.y<=245){
					hero.y=240;
				}
				if(hero.y>=435&&hero.y<=440){
					hero.y=440;
				}
			}
			if(hero.y>265&&hero.y<380){
				if(hero.x<65){
					controller.floor=10;
					hero.x=615;
					exhibit1.active=false;
				}
				if(hero.x>620){
					controller.floor=8;
					hero.x=70;
					exhibit1.active=false;
				}
			}
		}
		if(controller.floor==10){
			arena.sourceX = 3258;
			arena.sourceY = 333;
			if(hero.y>265&&hero.y<380){
				if(hero.x<65){
					controller.floor=25;
					hero.x=615;
				}
				if(hero.x>620){
					controller.floor=9;
					hero.x=70;
					exhibit1.active=true;
					people.active=true;
					people.skin=6;
					people.x=300;
					people.y=550;
					people.movement=1;
				}
			}
		}
		if(controller.floor==11){
			arena.sourceX = 3620;
			arena.sourceY = 333;
			people.active=true;
			people.x=330;
			people.y=315;
			people.skin=7;
			dialog.skin=5;
			if(hero.y<=377){
				hero.y=377;
			}
			//zakupy
			if(hero.x>=120&&hero.x<=180){
				if(hero.y<=377){
					if(hero.gold>=50){
						hero.apple+=1;
						hero.gold-=50;
						hero.y=382;
					}
				}
			}
			if(hero.x>260&&hero.x<430){
				if(hero.y>530){
					controller.floor=5;
					hero.y=295;
				}
			}
		}
		if(controller.floor==12){
			arena.sourceX = 3982;
			arena.sourceY = 333;
			exhibit1.skin=6;
			exhibit1.x=23;
			exhibit1.y=378;
			exhibit2.active=false;
			if(hero.y<=290){
				hero.y=290;
			}
			if(hero.y>=350){
				hero.y=350;
			}
			if(hero.y>265&&hero.y<380){
				if(hero.x<65){
					controller.floor=13;
					hero.x=615;
					exhibit1.active=false;
				}
				if(hero.x>620){
					controller.floor=2;
					hero.x=70;
					exhibit1.active=true;
					exhibit2.active=true;
				}
			}
		}
		if(controller.floor==13){
			arena.sourceX = 4344;
			arena.sourceY = 333;
			if(hero.y>265&&hero.y<380){
				if(hero.x>620){
					controller.floor=12;
					hero.x=70;
					exhibit1.active=true;
				}
			}
			if(hero.x>260&&hero.x<430){
				if(hero.y>530){
					controller.floor=14;
					hero.y=180;
				}
			}
		}
		if(controller.floor==14){
			arena.sourceX = 362;
			arena.sourceY = 666;
			if(hero.x>260&&hero.x<430){
				if(hero.y<180){
					controller.floor=13;
					hero.y=520;
				}
				if(hero.y>530){
					controller.floor=15;
					hero.y=180;
				}
			}
			if(hero.y>265&&hero.y<380){
				if(hero.x<65){
					controller.floor=17;
					hero.x=615;
				}
				if(hero.x>620){
					controller.floor=16;
					hero.x=70;
				}
			}
		}
		if(controller.floor==15){
			arena.sourceX = 724;
			arena.sourceY = 666;
			if(hero.x>260&&hero.x<430){
				if(hero.y<180){
					controller.floor=14;
					hero.y=520;
				}
			}
			if(hero.y>265&&hero.y<380){
				if(hero.x<65){
					controller.floor=19;
					hero.x=615;
				}
				if(hero.x>620){
					controller.floor=18;
					hero.x=70;
				}
			}
		}
		if(controller.floor==16){
			arena.sourceX = 1448;
			arena.sourceY = 666;
			if(hero.y>265&&hero.y<380){
				if(hero.x<65){
					controller.floor=14;
					hero.x=615;
				}
			}
		}
		if(controller.floor==17){
			arena.sourceX = 0;
			arena.sourceY = 666;
			if(hero.y>265&&hero.y<380){
				if(hero.x>620){
					controller.floor=14;
					hero.x=70;
				}
			}
			if(hero.x>260&&hero.x<430){
				if(hero.y<180){
					controller.floor=20;
					hero.y=520;
				}
			}
		}
		if(controller.floor==18){
			arena.sourceX = 1448;
			arena.sourceY = 666;
			if(hero.y>265&&hero.y<380){
				if(hero.x<65){
					controller.floor=15;
					hero.x=615;
				}
			}
		}
		if(controller.floor==19){
			arena.sourceX = 1086;
			arena.sourceY = 666;
			if(hero.y>265&&hero.y<380){
				if(hero.x>620){
					controller.floor=15;
					hero.x=70;
				}
			}
		}
		if(controller.floor==20){
			arena.sourceX = 1810;
			arena.sourceY = 666;
			if(hero.x>260&&hero.x<430){
				if(hero.y>530){
					controller.floor=17;
					hero.y=180;
				}
			}
			if(hero.y>265&&hero.y<380){
				if(hero.x<65){
					controller.floor=21;
					hero.x=615;
				}
			}
		}
		if(controller.floor==21){
			arena.sourceX = 2172;
			arena.sourceY = 666;
			if(hero.y>265&&hero.y<380){
				if(hero.x<65){
					controller.floor=22;
					hero.x=615;
				}
				if(hero.x>620){
					controller.floor=20;
					hero.x=70;
				}
			}
		}
		if(controller.floor==22){
			arena.sourceX = 2534;
			arena.sourceY = 666;
			if(hero.y>265&&hero.y<380){
				if(hero.x>620){
					controller.floor=21;
					hero.x=70;
				}
			}
			if(hero.x>260&&hero.x<430){
				if(hero.y>530){
					controller.floor=23;
					hero.y=180;
				}
			}
		}
		if(controller.floor==23){
			arena.sourceX = 2896;
			arena.sourceY = 666;
			if(hero.x>260&&hero.x<430){
				if(hero.y<180){
					controller.floor=22;
					hero.y=520;
				}
			}
			if(hero.y>265&&hero.y<380){
				if(hero.x<65){
					controller.floor=24;
					hero.x=615;
				}
			}
		}
		if(controller.floor==24){
			arena.sourceX = 3258;
			arena.sourceY = 666;
		}
		if(controller.floor==25){
			arena.sourceX = 362;
			arena.sourceY = 999;
			if(hero.y>265&&hero.y<380){
				if(hero.x<65){
					controller.floor=26;
					hero.x=615;
				}
				if(hero.x>620){
					controller.floor=10;
					hero.x=70;
				}
			}
		}
		if(controller.floor==26){
			arena.sourceX = 724;
			arena.sourceY = 999;
			if(hero.y>265&&hero.y<380){
				if(hero.x>620){
					controller.floor=25;
					hero.x=70;
				}
			}
			if(hero.x>260&&hero.x<430){
				if(hero.y>530){
					controller.floor=27;
					hero.y=180;
				}
			}
		}
		if(controller.floor==27){
			arena.sourceX = 1086;
			arena.sourceY = 999;
			if(hero.y>265&&hero.y<380){
				if(hero.x>620){
					controller.floor=28;
					hero.x=70;
				}
			}
			if(hero.x>260&&hero.x<430){
				if(hero.y<180){
					controller.floor=26;
					hero.y=520;
				}
			}
		}
		if(controller.floor==28){
			arena.sourceX = 1448;
			arena.sourceY = 999;
			if(hero.x>260&&hero.x<430){
				if(hero.y<180){
					controller.floor=29;
					hero.y=520;
				}
			}
			if(hero.y>265&&hero.y<380){
				if(hero.x<65){
					controller.floor=27;
					hero.x=615;
				}
			}
		}
		if(controller.floor==29){
			arena.sourceX = 1810;
			arena.sourceY = 999;
			if(hero.y>265&&hero.y<380){
				if(hero.x<65){
					controller.floor=30;
					hero.x=615;
					people.active=true;
				}
			}
			if(hero.x>260&&hero.x<430){
				if(hero.y>530){
					controller.floor=28;
					hero.y=180;
				}
			}
		}
		if(controller.floor==30){
			arena.sourceX = 2172;
			arena.sourceY = 999;
			people.skin=8;
			people.x=120;
			people.y=350;
			dialog.skin=6;
			if(hero.key==false){
				if(hero.carrot==false){
					hero.carrot=true;
				}
				if(hero.following==true){
					hero.key=true;
					hero.gold+=200;
				}
				
			}else{
				people2.skin=9;
				people2.movement=0;
				people2.x=120;
				people2.y=450;
				dialog.skin=7;
			}
			//blokowanie wejscia na stół
			if(hero.y>=255&&hero.y<=415){
				if(hero.x>=170&&hero.x<=175){
					hero.x=170;
				}
				if(hero.x>=310&&hero.x<=320){
					hero.x=320;
				}
			}
			if(hero.x>=170&&hero.x<=320){
				if(hero.y>=255&&hero.y<=265){
					hero.y=255;
				}
				if(hero.y>=410&&hero.y<=415){
					hero.y=415;
				}
			}
			if(hero.y>265&&hero.y<380){
				if(hero.x>620){
					controller.floor=29;
					hero.x=70;
					people.active=false;
					dialog.skin=0;
					if(hero.key==true){
						people2.skin=0;
					}
				}
			}
		}	
	};
	this.draw = function() {
		if(this.entities.length !== 0){
			this.ctx.save();
			for (var i = 0; i < this.entities.length; i++) {
				var entity = this.entities[i];
				this.ctx.drawImage(this.masterSprite,entity.sourceX,entity.sourceY,entity.sourceWidth,entity.sourceHeight,Math.floor(entity.x),Math.floor(entity.y),entity.width,entity.height);
			}
		this.ctx.fillStyle = '#fff';
		this.ctx.font="15px 'K2D'";
		this.ctx.fillText("Z",513,44);
		this.ctx.fillText("X",513,62);
		this.ctx.fillText("C",513,92);
		this.ctx.font="20px 'K2D'";
		this.ctx.fillText("POZIOM : "+hero.level,330,50);
		this.ctx.fillText("DOŚW : "+hero.exp,330,74);
		this.ctx.fillText("/ "+hero.next,425,74);
		this.ctx.fillText(": "+hero.kills,352,98);
		this.ctx.fillText(": "+hero.gold,436,98);
		if(hero.apple>=1){
			this.ctx.font="15px 'K2D'";
			this.ctx.fillText(""+hero.apple,568,101);	
		}
		if(dialog.skin==1){
			this.ctx.fillStyle = '#fff';
			this.ctx.font="15px 'K2D'";
			this.ctx.fillText("UZUPEŁNIJ EKWIPUNEK I WYRUSZAJ, ŻEBY",235,226);
			this.ctx.fillText("URATOWAĆ MIASTO. W TEJ KOMNACIE JEST",235,245);
			this.ctx.fillText("UZDRAWIAJĄCY POMNIK BOHATERÓW. ",235,264);	
		}
		if(dialog.skin==2){
			this.ctx.fillStyle = '#fff';
			this.ctx.font="15px 'K2D'";
			this.ctx.fillText("HMMM, CHYBA TE DRZWI PO LEWO MOŻNA",235,226);
			this.ctx.fillText("OTWORZYĆ, TYLKO NIE MAM KLUCZA",235,245);			
		}
		if(dialog.skin==3){
			this.ctx.fillStyle = '#fff';
			this.ctx.font="15px 'K2D'";
			this.ctx.fillText("UWAŻAJ NA GRASUJĄCYCH W MIEŚCIE",235,226);
			this.ctx.fillText("NIEBEZPIECZNYCH ZŁODZIEI",235,245);			
		}
		if(dialog.skin==4){
			this.ctx.fillStyle = '#fff';
			this.ctx.font="15px 'K2D'";
			this.ctx.fillText("BLA BLE BLA BLE BLU BLA BLI BLA BLE",235,226);
			this.ctx.fillText("HA HA HA HA HA BLE PFF BLE BLU UUU",235,245);		
		}
		if(dialog.skin==5){
			this.ctx.fillStyle = '#fff';
			this.ctx.font="15px 'K2D'";
			this.ctx.fillText("WITAJ DZIELNY WOJOWNIKU !",280,226);
			this.ctx.fillText("JEŚLI CHCESZ COŚ KUPIĆ, TO PODEJDŹ DO",235,245);
			this.ctx.fillText("TEGO PRZEDMIOTU",300,264);	
			this.ctx.font="17px 'K2D'";
			this.ctx.fillText("50G",158,349);
			this.ctx.fillText("x 1",177,376);	
		}
		if(dialog.skin==6){
			this.ctx.fillStyle = '#fff';
			this.ctx.font="15px 'K2D'";
			this.ctx.fillText("JEŚLI PRZYPROWADZISZ MOJEGO ZIELONEGO",214,226); 
			this.ctx.fillText("POMOCNIKA, TO DOSTANIESZ KLUCZ DO",214,245);
			this.ctx.fillText("PODZIEMI. TRZYMAJ JEGO ULUBIONY PRZYSMAK. ",214,264);
		}
		if(dialog.skin==7){
			this.ctx.fillStyle = '#fff';
			this.ctx.font="15px 'K2D'";
			this.ctx.fillText("!!!   DZIĘKI WIELKIE ZA POMOC   !!!",270,226); 
			this.ctx.fillText("UWAŻAJ NA SIEBIE I POWODZENIA",270,264);
		}
			this.ctx.restore();
		}
	};
};