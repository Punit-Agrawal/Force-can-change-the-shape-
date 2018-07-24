var mySceneTLX;
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;
var geomerty;
var mat;
var material;
var geo;
var p=0;
var ex1;
var ex2;
var ex3;
var v;
var u;
var g=-0.01;
var yAnimate;
var yLevel=1;
var t;

function initialiseHelp(){
  helpContent="<h2>Force can change shape help</h2>";
  helpContent=helpContent+"<p>This activity will explain you the concept of how Force change shape and deform objects.</p>";
  helpContent=helpContent+"<p><br><br>This animation has a tub fully filled with dough upto brim.</p>";
  helpContent=helpContent+"<p><br><br>You can see different boxes placed on a table.You can drag those boxes and put these boxes on top of the dough and press start button .You can drag only one box at a time.</p>";
  helpContent=helpContent+"<p><br><br>When the boxes change the shape you can click to see the changed shape of dough.</br><br>Place the object only above the marked  level .</br> </p>";
  
  
  helpContent=helpContent+"<p>When the box fall into Dough it will deform that dough and to see the deformation click on the box to make it disappear.</p>"
  helpContent=helpContent+"<p><br></br>Press increase or decrease to increase or decrease speed of boxes. Press the reset button to repeat the activity again.<br>Don't Place boxes over each other.</br> .To see deformation choose object and then press start key and click on object to make it disappear.</p>"
  helpContent=helpContent+"<h2>Happy Experimenting</h2>"
    //helpContent +=n 90 degrees</p><h3>Obtuse</h3><p>ees</p><h3>Right Angle</h3><p>Angle is said to be if it is equal to 90 degrees</p><h3>Strainght</h3><p>Angle is said to be if it is equal to 180 degrees</p>";
  PIEupdateHelp(helpContent);
}


var infoContent;
function initialiseInfo(){
  infoContent ="<h2>Force can change shape </h2>";
  infoContent =infoContent+"<p>Whenever their is a force applied on object it will deform that object. Our aim For this activity is to see how the Force changes shape and deform dough.</p>";
  infoContent =infoContent+"<p>We are using many boxes to Deform dough filled in Tub<br> <h3> Place the object only above the marked  level .Don't put boxes upon each other.</h3></p>";
  infoContent =infoContent+"<p><br><br> You can drag those boxes and put these boxes on top of the dough and press start button .click on boxes to make it Disappear and reset to make it repeat again. </p>";
  infoContent =infoContent+"<p><br><br> You will see the more heavier box will deform the dough more then the lighter one.</br></br> <h3><br><br> So, one can conclude that greater the force greater will be deformation of dough.</br></br></h3><br><br> You can drag those boxes and put these boxes on top of the dough and press start button .</br></br>click on boxes to make it Disappear and reset to make it repeat again. </p>";
  infoContent =infoContent+"<h2><br>Conditions:</br></h2>";
  infoContent =infoContent+"<h4><br>Gravity is present. and the block fall much deeper into dough when fallen from greater height then smaller height.</br><br>Boxes first accelerates under gravity then deaccelerate then touched to dough till its speed reach to Zero.</br></h4>";
  infoContent =infoContent+"<h2>Warning : D'ont drag the  boxes on the dough.Drag it on the empty Space Present above the dough.</h2>";
  
  infoContent =infoContent+"<h2>Happy Experimenting.</h2>";
  
  PIEupdateInfo(infoContent);

}
function initialiseSceneVariables() {
 
  mySceneTLX = 0.0;
  mySceneTLY = 3.0;
  mySceneBRX = 4.0;
  mySceneBRY = 0.0;
  mySceneW   = (mySceneBRX - mySceneTLX);
  mySceneH   = (mySceneTLY - mySceneBRY);
  myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
  myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
  g=-0.1;
  ex1=0;
  ex2=0;
  ex3=0;
  yLevel=1;
  	var groundMaterial = new THREE.MeshBasicMaterial( { color:0x154638} );
    var mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 100,100 ), groundMaterial );
   // mesh233.position.z = -1;
	//mesh233.position.x += 2;

	//mesh233.position.y += 1.5;
	mesh233.recieveShadow = true;
    PIEaddElement( mesh233 );
}

function loadExperimentElements() {

  PIEsetDeveloperName("Punit Agrawal");
  PIEsetExperimentTitle("Force can change shape");
  initialiseSceneVariables();
  initialiseHelp();
  initialiseInfo();
  PIEstopButton.onclick = function(){};
 //document.getElementById("start").addEventListener("click", function(){ if(di==1){PIEresetExperiment};PIEstartAnimation;});
   PIEstartButton.onclick = function(){};
	geometry = new THREE.PlaneGeometry(8,1);
    material = new THREE.MeshLambertMaterial({ color: 0xD35400 });
    dou = new THREE.Mesh(geometry, material);
	dou.position.set(2, -0.25, 0.2);
	//dough.rotateY(-(Math.PI/13));
    PIEaddElement(dou);
	geometry = new THREE.PlaneGeometry(3.025,1);
    material = new THREE.MeshLambertMaterial({ color: 0xffff00 });
    tub = new THREE.Mesh(geometry, material);
	tub.position.set(2, .5, 0.1);
	//tub.rotateY(-(Math.PI/13));
    PIEaddElement(tub);
	
	geometry = new THREE.PlaneGeometry(3,1);
    material = new THREE.MeshLambertMaterial({ color: 0xe2c6b0 });
    dough = new THREE.Mesh(geometry, material);
	dough.position.set(2, .5, 0.1);
	//dough.rotateY(-(Math.PI/13));
    PIEaddElement(dough);
	dough.receiveShadow = false;

	
	geometry = new THREE.BoxGeometry(.4,.7,.1);
    material = new THREE.MeshLambertMaterial({ color: 0x0000ff,transparent:true,opacity:0.5 });
    d = new THREE.Mesh(geometry, material);
	d.position.set(-0.6, 1.4, 0.15);
	//dough.rotateY(-(Math.PI/13));
    PIEaddElement(d);
	d.receiveShadow = false;
	PIEdragElement(d);
	PIEsetDragEnd(d,dragD);
	geometry = new THREE.BoxGeometry(.3,.5,.1);
    material = new THREE.MeshLambertMaterial({ color: 0x0000ff ,transparent:true,opacity:0.5});
    d1 = new THREE.Mesh(geometry, material);
	d1.position.set(-0.07, 1.3, 0.15);
	//dough.rotateY(-(Math.PI/13));
    PIEaddElement(d1);
	d.receiveShadow = false;
	PIEdragElement(d1);
	PIEsetDragEnd(d1,dragD1);
	geometry = new THREE.BoxGeometry(.15,.3,.1);
    material = new THREE.MeshLambertMaterial({ color: 0x0000ff,transparent:true,opacity:0.5 });
    d2 = new THREE.Mesh(geometry, material);
	d2.position.set(.3, 1.2, 0.15);
	//dough.rotateY(-(Math.PI/13));
    PIEaddElement(d2);
	d2.receiveShadow = false;
	PIEdragElement(d2);
	PIEsetDragEnd(d2,dragD2);
 loader = new THREE.FontLoader();
    loader.load("optimer.json", function(response){
		font = response;
       geometry = new THREE.TextGeometry("<---- Level", {
            font : font,
            size : .1,
            height : 0,
        });
		        gval=new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0x000000}));
        gval.translation = geometry.center();
PIEaddElement(gval);       
	   gval.position.set(3.7, 1.05, .5);
	});
	
	
	geometry = new THREE.PlaneGeometry(1.4,.03);
    mat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    c1 = new THREE.Mesh(geometry, mat);
	PIEaddElement(c1);
	   c1.position.set(-0.15, 1.05, .5);
	geometry = new THREE.PlaneGeometry(.05,.85);
    mat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    c2 = new THREE.Mesh(geometry, mat);
	PIEaddElement(c2);
    c2.position.set(.5, .65, .5);
	//c2.rotateY(Math.PI/1);
	geometry = new THREE.PlaneGeometry(.05,.85);
    mat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    c3 = new THREE.Mesh(geometry, mat);
	PIEaddElement(c3);
	   c3.position.set(-.75, .65, .5);
	
	
	geometry = new THREE.PlaneGeometry(.4,.7);
    mat = new THREE.MeshBasicMaterial({ color: 0x154638 });
    cu = new THREE.Mesh(geometry, mat);
	//cu.position=d.position;
  geometry = new THREE.PlaneGeometry(.3,.5);
    mat = new THREE.MeshBasicMaterial({ color: 0x154638});
    cu1 = new THREE.Mesh(geometry, mat);
	//cu1.position=d1.position;
  geometry = new THREE.PlaneGeometry(.15,.3);
    mat = new THREE.MeshBasicMaterial({ color: 0x154638 });
    cu2 = new THREE.Mesh(geometry, mat);
	//cu2.position=d2.position;
  /*if(dis==1){
	 PIEsetClick(d,function(){PIEremoveElement(d);PIEaddElement(cu) ;dis=1;PIEstopAnimation();});
	PIEsetClick(d1,function(){PIEremoveElement(d1);PIEaddElement(cu1) ;dis=1;PIEstopAnimation();});
	 PIEsetClick(d2,function(){PIEremoveElement(d2);PIEaddElement(cu2) ;dis=1;PIEstopAnimation();});
  }*/
	PIEsetAreaOfInterest(mySceneTLX,mySceneTLY,mySceneBRX,mySceneBRY);

}

function dragD1()
{
	yAnimate=d1.position.y;
	u=0;
	ex1=0;
	ex2=1;
	ex3=0;
	g=-0.1;
	PIEremoveDragElement(d);
	PIEremoveDragElement(d1);
	PIEremoveDragElement(d2);
	if(d1.position.x<0.5)
	{
		yLevel=1.3;
	}
	else if(d1.position.x>=0.5&&d1.position.x<3.5+.1)
	{
		yLevel=1.45;
	}
	else
	{
		yLevel=0.5;
	}
}

function dragD()
{
	yAnimate=d.position.y;
	u=0;
	ex1=1;
	ex2=0;
	ex3=0;
	g=-0.1;
	PIEremoveDragElement(d);
	PIEremoveDragElement(d1);
	PIEremoveDragElement(d2);
	if(d.position.x<0.5)
	{
		yLevel=1.4;
	}
	else if(d.position.x>=0.5&&d.position.x<3.5+.2)
	{
		yLevel=1.35;
	}
	else
	{
		yLevel=0.63;
	}
}

function dragD2()
{
	yAnimate=d2.position.y;
	u=0;
	ex1=0;
	ex2=0;
	ex3=1;
	g=-0.1;
	PIEremoveDragElement(d);
	PIEremoveDragElement(d1);
	PIEremoveDragElement(d2);
	if(d2.position.x<0.5)
	{
		yLevel=1.2;
	}
	else if(d2.position.x>=0.5&&d2.position.x<3.5+.075)
	{
		yLevel=1.25;
	}
	else
	{
		yLevel=0.425;
	}
}


function resetExperiment(){
	PIEremoveElement(cu);
	PIEremoveElement(cu1);
	PIEremoveElement(cu2);
	PIEremoveElement(d);
	PIEremoveElement(d1);
	PIEremoveElement(d2);
loadExperimentElements();
g=-0.1;
  ex1=0;
  ex2=0;
  ex3=0;
  yLevel=1;
}


function updateExperimentElements(time,dt)
{
	t=dt/1000;
	v=u+g*t;
	yAnimate+=u*t+((1/2)*g*(t**2));
	u=v;
	
	if(ex1==1)
	{
		
		if(yAnimate<=(yLevel))
		{
			if(d.position.x>=0.5&&d.position.x<3.5+.2)
	        {
		       g=.3;
	        }
			else
			{
				PIEstopAnimation();
			}
			if(u>=0)
			{   cu.position.set(d.position.x,d.position.y,d.position.z);
				PIEsetClick(d,function(){
					PIEaddElement(cu);
					d.scale.set(0,0,0);
				});
			  PIEstopAnimation();
			}
			
			//yAnimate=yLevel;
			
			PIEdragElement(d);
			PIEsetDragEnd(d,dragD);
		    PIEdragElement(d1);
		    PIEsetDragEnd(d1,dragD1);
			PIEdragElement(d2);
			PIEsetDragEnd(d2,dragD2);
			
			//PIEstopAnimation();
		}
		d.position.y=yAnimate;
	}
	if(ex2==1)
	{
		if(yAnimate<=(yLevel))
		{
			if(d1.position.x>=0.5&&d1.position.x<3.5+.1)
	        {
		       g=.3;
	        }
			else
			{
				PIEstopAnimation();
			}
			if(u>=0)
			{   cu1.position.set(d1.position.x,d1.position.y,d1.position.z);
				PIEsetClick(d1,function(){
					PIEaddElement(cu1);
					d1.scale.set(0,0,0);
				});
			  PIEstopAnimation();
			}
			
			//yAnimate=yLevel;
			PIEdragElement(d);
			PIEsetDragEnd(d,dragD);
		    PIEdragElement(d1);
		    PIEsetDragEnd(d1,dragD1);
			PIEdragElement(d2);
			PIEsetDragEnd(d2,dragD2);
			//PIEstopAnimation();
		}
		d1.position.y=yAnimate;
	}
	if(ex3==1)
	{
		if(yAnimate<=(yLevel))
		{
			if(d2.position.x>=0.5&&d2.position.x<3.5+0.075)
	        {
		       g=.6;
	        }
			else
			{
				PIEstopAnimation();
			}
			if(u>=0)
			{   cu2.position.set(d2.position.x,d2.position.y,d2.position.z);
				PIEsetClick(d2,function(){
					PIEaddElement(cu2);
					d2.scale.set(0,0,0);
				});
			  PIEstopAnimation();
			}
			
			
			//yAnimate=yLevel;
			PIEdragElement(d);
			PIEsetDragEnd(d,dragD);
		    PIEdragElement(d1);
		    PIEsetDragEnd(d1,dragD1);
			PIEdragElement(d2);
			PIEsetDragEnd(d2,dragD2);
			//PIEstopAnimation();
		}
		d2.position.y=yAnimate;
	}
}
