var delay = 200; //in milliseconds

    var	drag=false;
    var objDisk=null;
    var x = 0;
    var y = 0;
    var disksOnTower1 = new Array(null,null,null,null,null,null,null,null);
    var disksOnTower2 = new Array(null,null,null,null,null,null,null,null);
    var disksOnTower3 = new Array(null,null,null,null,null,null,null,null);
    var disksOnTowers = new Array(disksOnTower1,disksOnTower2,disksOnTower3);
    var offsetleft = 30;
    var offsettop = 30;
    var offsettower = 20;
    var offsethoriz = 30;
    var basetop = 0;
    var diskheight = 0;
    var midhoriztower = 0;
    var indexTo=1;
    var indexFr=1;
    var movectr=0;
    var gameOver=false;
    var prevIndex=0;
    var zindex = 0;
    var currTower=1;
    var prevTower=1;
    var demo=false;
    var arrFr = new Array(255);
    var arrTo = new Array(255);
    var idx = 0;
    var pos = 0;
    var t=null;
    var stop=false;

    
    function init(){
        if (document.getElementById){
        	var diskno = document.hanoi.diskno;

            diskno.options.selectedIndex = 0;
            drawTowers();
            drawDisks(parseInt(diskno.options[diskno.options.selectedIndex].text));		
        }
    }
    
    function initVars(){
        for (var i=0;i<disksontower1.length;i++){ disksontower1[i]="null;" disksontower2[i]="null;" disksontower3[i]="null;" } drag="false;" indexto="1;" indexfr="1;" movectr="0;" zindex="0;" idx="0;" pos="0;" t="null;" gameover="false;" stop="false;" demo="false;" document.hanoi.btnundo.disabled="true;" function drawtowers(){ var title="document.getElementById("title");" tower1="document.getElementById("tower1");" tower2="document.getElementById("tower2");" tower3="document.getElementById("tower3");" settings="document.getElementById("settings");" titlewidth="parseInt(title.style.width);" titleheight="parseInt(title.style.height);" towerwidth="parseInt(tower1.style.width);" towerheight="parseInt(tower1.style.height);" settingswidth="parseInt(settings.style.width);" midhoriztower="parseInt(document.getElementById("horiztower1").style.width)/2;" diskheight="parseInt(document.getElementById("disk1").style.height);" title.style.left="offsetleft+(1.5*towerwidth)+offsettower-(titlewidth/2)+"px";" title.style.top="offsettop+"px";" tower1.style.left="offsetleft+"px";" tower1.style.top="offsettop+titleheight+offsethoriz+"px";" tower2.style.left="offsetleft+towerwidth+offsettower+"px";" tower2.style.top="offsettop+titleheight+offsethoriz+"px";" tower3.style.left="offsetleft+(towerwidth+offsettower)*2+"px";" tower3.style.top="offsettop+titleheight+offsethoriz+"px";" settings.style.left="offsetleft+(1.5*towerwidth)+offsettower-(settingswidth/2)+"px";" settings.style.top="parseInt(tower1.style.top)+towerheight+offsethoriz+"px";" drawdisks(disknum){ disktop="parseInt(tower1.style.top)+parseInt(document.getElementById("horiztower1").style.top);" lefttower1="parseInt(tower1.style.left);" disk; f="document.hanoi;" basetop="disktop;" for (var i="disksOnTower1.length;i">=1;i--){
        	disk = document.getElementById("disk"+i);
			disk.style.zIndex=++zindex;	
            if (i<=disknum){ disk.style.left="lefttower1+midhoriztower-parseInt(disk.style.width)/2+"px";" disk.style.top="disktop-diskheight-1+"px";" disktop="parseInt(disk.style.top);" disksontowers[0][i-1]="disk;" } else { ; f.minmove.value="f.diskno.options[f.diskno.options.selectedIndex].value;" f.yourmove.value="0;" function newgame(obj){ if (movectr>0 && !gameOver && !stop){
            if (confirm("Current game will be aborted, would you like to continue?")){
                initVars();
                drawDisks(parseInt(obj.options[obj.options.selectedIndex].text));
            }
            else document.hanoi.diskno.options.selectedIndex=prevIndex;
        }
        else {
            initVars();
            drawDisks(parseInt(obj.options[obj.options.selectedIndex].text));
        }
    }
    
    function initializeDrag(disk,e){
    	if (!e) e=event;
        if (stop){
            swal("警告", "不能在点击'stop'按钮之后在继续执行移动盘子的操作！！", "warning");
            //alert("You cannot continue solving the puzzle after clicking the 'Stop' button.\nClick 'Restart' button or select no. of disks to continue playing.");
            return;
        }
        indexFr = indexTo;
        if (disk.id!=disksOnTowers[indexFr-1][0].id || gameOver || demo) return;
        objDisk=disk;
        x=e.clientX;
        y=e.clientY;
        tempx=parseInt(disk.style.left);
        tempy=parseInt(disk.style.top);
        document.onmousemove=dragDisk;
    }
    
    function dragDisk(e){
        if (!e) e=event;
        zindex++;
        drag=true;
        var posX = tempx+e.clientX-x;
        var posY = tempy+e.clientY-y;
        var objTower1 = document.getElementById("tower1");
        var objTower2 = document.getElementById("tower2");
        var objTower3 = document.getElementById("tower3");
        var tower1Left = parseInt(objTower1.style.left);
        var tower2Left = parseInt(objTower2.style.left);
        var tower3Left = parseInt(objTower3.style.left);
        var tower3Width = parseInt(objTower3.style.width);
        
        objDisk.style.zIndex=zindex;
        objDisk.style.left=posX+'px';
        objDisk.style.top=posY+'px';        
        
        if (e.clientX>=document.body.clientWidth-10 || e.clientY>=document.body.clientHeight-5 || e.clientX==5 || e.clientY==5){ //outside available window
            indexTo=indexFr;
            dropDisk(objDisk);
        }
        else if ( //in the vicinity of tower 3
            (tower3Left<=posx) && (tower3left+tower3width>=posX) && 
            (parseInt(objTower3.style.top)+parseInt(objTower3.style.height)>posY)
            ){
            indexTo=3;
        }
        else if ((tower2Left<=posx) && (tower2left+tower3width>=posX)){ //in the vicinity of tower 2
            indexTo=2;
        }
        else if ((tower1Left<=posx) && (tower1left+parseint(objtower1.style.width)>=posX)){ //in the vicinity of tower 1
            indexTo=1;
        }
        else indexTo = indexFr;
        return false;
    }

    function dropDisk(disk){
    	var f=document.hanoi;
        document.onmousemove=new Function("return false");
        if (!drag) return;
        var gameStatus=false;
        var topDisk = disksOnTowers[indexTo-1][0];
        if (indexFr==indexTo){
            getNewTop(indexFr,null);
            pushDisk(disk,indexFr);	//put disk back to original tower
            getNewTop(indexFr,disk);
        }
        else if (topDisk==null) {
            pushDisk(disk,indexTo);
            getNewTop(indexFr,null);
            getNewTop(indexTo,disk);
            movectr++;
            currTower=indexTo;
            prevTower=indexFr;
            f.btnUndo.disabled=false;
        }
        else if (parseInt(disk.style.width)<parseint(topdisk.style.width)){ pushdisk(disk,indexto); getnewtop(indexfr,null); getnewtop(indexto,disk); movectr++; currtower="indexTo;" prevtower="indexFr;" if (indexto="=3)" gamestatus="checkStatus();" f.btnundo.disabled="false;" } else { pushdisk(disk,indexfr); put disk back to original tower getnewtop(indexfr,disk); drag="false;" f.yourmove.value="movectr;" (gamestatus) minmove="parseInt(f.minmove.value);" (movectr="=minmove)" msg="\nCongratulations! You got it in " +minmove+" moves.">minmove) msg="\nYou can do better than that."
            else msg="";
            //alert("Game Over !!!"+msg);
            swal({   title: "干的漂亮！！！!",   text: msg,   imageUrl: "images/thumbs-up.jpg" });
            gameOver=true;
        }
        return;
    }      
    
    function checkStatus(){
        var gameStat = false;
        var disks=0;
        for (var i=0;i<disksontower3.length;i++){ if (disksontowers[2][i]!="null)" disks++; } (disks="=parseInt(document.hanoi.diskno.options[document.hanoi.diskno.options.selectedIndex].text))" gamestat="true;" return gamestat; function pushdisk(disk,index){ var diskwidth="parseInt(disk.style.width);" towerleft="parseInt(document.getElementById("tower"+index).style.left);" topdisk="disksOnTowers[index-1][0];" (topdisk!="null){" topdiskwidth="parseInt(topDisk.style.width);" topdisktop="parseInt(topDisk.style.top);" disk.style.left="towerLeft+midhoriztower-diskWidth/2+"px";" disk.style.top="topDiskTop-diskheight-1+"px";" else { getnewtop(index,disk){ (disk="=null){" pop for (var i="0;i<disksOnTower1.length-1;i++){" disksontowers[index-1][i]="disksOnTowers[index-1][i+1];" disksontowers[index-1][disksontower1.length-1]="null;" push>=1;i--){
                disksOnTowers[index-1][i]=disksOnTowers[index-1][i-1];
            }
            disksOnTowers[index-1][0]=disk;
        }
    }
    
    function solve(btn){
        if (btn.value=="Solve"){
            if (movectr>0 && !gameOver && !stop)
                if (!confirm("Current game will be aborted, would you like to continue?")) return;
            btn.value="Stop";
            initVars();
            stop=false;
            demo=true;
            var f=document.hanoi;
            f.btnIns.disabled=true;
            f.btnRes.disabled=true;
            f.btnUndo.disabled=true;
            disknum = parseInt(f.diskno.options[f.diskno.options.selectedIndex].text);
            drawDisks(disknum);
            getMoves(0, 2, 1, disknum); 
            t=window.setTimeout("moveDisk()",delay);
        }
        else {
            if (t) {
                window.clearTimeout(t);
                btn.value="Solve";
                frm.btnIns.disabled=false;
                frm.btnRes.disabled=false;
                t = null;
                stop=true;
                demo=false;
            }
            
        }
    }
    
    function moveDisk(){
        frm = document.hanoi;
        disk=disksOnTowers[arrFr[pos]][0];
        pushDisk(disk,arrTo[pos]+1);
        getNewTop(arrFr[pos]+1,null);
        getNewTop(arrTo[pos]+1,disk);
        movectr++;
        frm.yourmove.value=movectr;
        pos++;
        if (movectr<parseint(frm.minmove.value)) t="window.setTimeout("moveDisk()",delay);" else { alert("can you do that in "+movectr+" moves?"); swal({ title: "搞定了！", text: movectr+"步！你还能够更快完成它吗？", imageurl: "images pinpin.png" }); swal("can gameover="true;" stop="false;" frm.btnsolve.value="Solve" ; frm.btnins.disabled="false;" frm.btnres.disabled="false;" } function getmoves(from,to,empty,numdisk){ if (numdisk> 1) {
            getMoves(from, empty, to, numDisk - 1);
            arrFr[idx] = from;
            arrTo[idx++] = to;
            getMoves(empty, to, from, numDisk - 1);
        }
        else {
            arrFr[idx] = from;
            arrTo[idx++] = to;
        }
    }

    
    function unDo(btn){
        disk=disksOnTowers[currTower-1][0];
        pushDisk(disk,prevTower);
        getNewTop(currTower,null);
        getNewTop(prevTower,disk);
        movectr--;
        document.hanoi.yourmove.value=movectr;
        btn.disabled=true;
    }
    
    function displayIns(){
        var msg = "你要将所有的盘子从TOWER 1移动到TOWER 3\n";
        msg += "你每次只能移动一个盘子。\n";
        msg += "游戏最重要的规则是大的盘子不能放在小的盘子上面！";
        // var msg="Try to move all the disks from TOWER 1 to TOWER 3.\n";
        // msg+="You may only move one disk at a time.\n";
        // msg+="You must never allow a bigger disk to go on top of a smaller disk.";
        //alert(msg);
        swal({
        title: "汉诺塔游戏规则",
        text: msg,
        imageUrl: 'images/capitaine.png'
    });
    } </parseint(frm.minmove.value))></disksontower3.length;i++){></parseint(topdisk.style.width)){></=posx)></=posx)></=posx)></=disknum){></disksontower1.length;i++){>