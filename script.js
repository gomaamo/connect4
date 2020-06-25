var p1,p2,mode;
var won=false;
var chips = $("td");
var columns = [35,36,37,38,39,40,41];
var x=0;
var auto = false;
var lastIsBlue=true;

$("button").click(function(){
    mode = prompt("Choose MODE: (1)One Player OR (2)Multiplayer?", "1");
    p1 = prompt("Player One, Enter your name! (You will be BLUE)", "Player1");
    switch(mode){
        case "2":
            p2 = prompt("Player Two, Enter your name! (You will be RED)", "Player2");
            break;

        case "1":
        default:
            p2="Player2";
            auto=true;
            break;
    }
    won=false;
    x=0;
    if($("button").text() === "START"){
        play();
    }
    $("h3").text("Connect four of your chips to win!");
    $("h3").css("color","black");
    $("h4").fadeIn("fast");
    $("h4").text(p1 + ": it is your turn, please pick a column to drop your blue chip.");
    $("h4").css("color","royalblue");
    columns = [35,36,37,38,39,40,41];
    for(var i=0; i<chips.length; i++){
        chips.eq(i).css("background-color","rgb(128,128,128)");
    }
    $("button").text("RESTART");
});

function returnRow(r){
    if(r>=35 && r<=41){
        return 6;
    }else if(r>=28 && r<=34){
        return 5;
    }else if(r>=21 && r<=27){
        return 4;
    }else if(r>=14 && r<=20){
        return 3;
    }else if(r>=7 && r<=13){
        return 2;
    }else if(r>=0 && r<=6){
        return 1;
    }
}

function checkRow(r1,r2,r3,r4){
    if(returnRow(r1) === returnRow(r2) && returnRow(r1) === returnRow(r3) && returnRow(r1) === returnRow(r4)){
        return true;
    }else{
        return false;
    }
}

function play(){
    function clck(c){
        chips.eq(c).click(function dropC(){
            if(columns[c]>=0 && !won){
                if(chips.eq(columns[c]).css("background-color") === "rgb(128, 128, 128)"){
                    if(x===0){
                        chips.eq(columns[c]).css("background-color","royalblue");
                        x=1;
                        lastIsBlue=true;
                        $("h4").text(p2 + ": it is your turn, please pick a column to drop your RED chip.");
                        $("h4").css("color","tomato");
                        var current = chips.eq(columns[c]).css("background-color");
                    }else{
                        chips.eq(columns[c]).css("background-color","tomato");
                        x=0;
                        lastIsBlue=false;
                        $("h4").text(p1 + ": it is your turn, please pick a column to drop your BLUE chip.");
                        $("h4").css("color","royalblue");
                        var current = chips.eq(columns[c]).css("background-color");
                    }

                    function checkW(c){
                        if(current === chips.eq(columns[c]+1).css("background-color") && current === chips.eq(columns[c]+2).css("background-color") && current === chips.eq(columns[c]+3).css("background-color") && checkRow(columns[c],columns[c]+1,columns[c]+2,columns[c]+3)){
                            won=true;
                            auto=false;
                        }else if(current === chips.eq(columns[c]-1).css("background-color") && current === chips.eq(columns[c]-2).css("background-color") && current === chips.eq(columns[c]-3).css("background-color") && checkRow(columns[c],columns[c]-1,columns[c]-2,columns[c]-3)){
                            won=true;
                            auto=false;
                        }else if(current === chips.eq(columns[c]-1).css("background-color") && current === chips.eq(columns[c]+1).css("background-color") && current === chips.eq(columns[c]+2).css("background-color") && checkRow(columns[c],columns[c]-1,columns[c]+1,columns[c]+2)){
                            won=true;
                            auto=false;
                        }else if(current === chips.eq(columns[c]+1).css("background-color") && current === chips.eq(columns[c]-1).css("background-color") && current === chips.eq(columns[c]-2).css("background-color") && checkRow(columns[c],columns[c]+1,columns[c]-1,columns[c]-2)){
                            won=true;
                            auto=false;
                        }else if(current === chips.eq(columns[c]+7).css("background-color") && current === chips.eq(columns[c]+14).css("background-color") && current === chips.eq(columns[c]+21).css("background-color")){
                            won=true;
                            auto=false;
                        }else if(current === chips.eq(columns[c]-8).css("background-color") && current === chips.eq(columns[c]-16).css("background-color") && current === chips.eq(columns[c]-24).css("background-color")){
                            won=true;
                            auto=false;
                        }else if(current === chips.eq(columns[c]+8).css("background-color") && current === chips.eq(columns[c]+16).css("background-color") && current === chips.eq(columns[c]+24).css("background-color")){
                            won=true;
                            auto=false;
                        }else if(current === chips.eq(columns[c]-8).css("background-color") && current === chips.eq(columns[c]-16).css("background-color") && current === chips.eq(columns[c]+8).css("background-color")){
                            won=true;
                            auto=false;
                        }else if(current === chips.eq(columns[c]+8).css("background-color") && current === chips.eq(columns[c]+16).css("background-color") && current === chips.eq(columns[c]-8).css("background-color")){
                            won=true;
                            auto=false;
                        }else if(current === chips.eq(columns[c]-6).css("background-color") && current === chips.eq(columns[c]-12).css("background-color") && current === chips.eq(columns[c]-18).css("background-color")){
                            won=true;
                            auto=false;
                        }else if(current === chips.eq(columns[c]+6).css("background-color") && current === chips.eq(columns[c]+12).css("background-color") && current === chips.eq(columns[c]+18).css("background-color")){
                            won=true;
                            auto=false;
                        }else if(current === chips.eq(columns[c]-6).css("background-color") && current === chips.eq(columns[c]-12).css("background-color") && current === chips.eq(columns[c]+6).css("background-color")){
                            won=true;
                            auto=false;
                        }else if(current === chips.eq(columns[c]+6).css("background-color") && current === chips.eq(columns[c]+12).css("background-color") && current === chips.eq(columns[c]-6).css("background-color")){
                            won=true;
                            auto=false;
                        }
                    }

                    checkW(c);
                    columns[c]-=7;

                    if(auto){
                        var i2 = Math.floor(Math.random() * 7);
                        chips.eq(columns[i2]).css("background-color","tomato");
                        $("h4").text(p1 + ": it is your turn, please pick a column to drop your BLUE chip.");
                        $("h4").css("color","royalblue");
                        var current = chips.eq(columns[i2]).css("background-color");
                        x=0;
                        lastIsBlue=false;
                        checkW(i2);
                        columns[i2]-=7;
                        //console.log("auto ends");
                    }

                    if(won && lastIsBlue && current === "rgb(65, 105, 225)"){
                        $("h3").text(p1 + " is the Winner!");
                        $("h3").css("color","rgb(65, 105, 225)");
                        $("h4").fadeOut("fast");
                        //console.log(p1 + " is the winner");
                    }else if(won && !lastIsBlue && current === "rgb(255, 99, 71)"){
                        $("h3").text(p2 + " is the Winner!");
                        $("h3").css("color","rgb(255, 99, 71)");
                        $("h4").fadeOut("fast");
                        //console.log(p2 + " is the winner");
                    }
                    //console.log(columns[c] + " - play ends");
                }else{
                    columns[c]-=7;
                    dropC();
                    //console.log("drop Made!");
                }
            }
        });
    }

    for(var i=0; i<7; i++){
        clck(i);
    }
}