// variabel til point
let point;
console.log(point);

// variabel til liv
let liv;
console.log(liv);

// variabel til position
let myRandom;
console.log(myRandom);

// Konstanter til containere
const joint = document.querySelector("#joint_container");
const joint1 = document.querySelector("#joint1_container");
const vape = document.querySelector("#vape_container");
const vape1 = document.querySelector("#vape1_container");
const cigaret = document.querySelector("#cigaret_container");
const cigaret1 = document.querySelector("#cigaret1_container");
const tid = document.querySelector("#tid_container");

// -----------------------------------------SIDEN VISES--------------------------------------

window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenVises");

  // Lyt om der bliver ændret størrelse af browser window
  window.addEventListener("resize", windowResize);

  // Kald windowResize første gang siden vises
  windowResize();

  // skjul andre skærme
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#start").classList.add("hide");

  //Vis start skærm
  document.querySelector("#start").classList.remove("hide");

  //Klik på start_knap
  document.querySelector("#startknap").addEventListener("click", startGame);

  // Windowresize og fontsize
  function windowResize() {
    console.log("windowResize");
    let widthScreen = document.querySelector("#screen").clientWidth;
    let myFontInProcent = 5;
    let myFont = (widthScreen / 100) * myFontInProcent;
    document.querySelector("#score_board").getElementsByClassName.fontSize =
      myFont + "px";
  }
}

function startGame() {
  console.log("startGame");

  //Skjul andre skærme
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#start").classList.add("hide");

  // nustiller liv
  document.querySelector("#liv1").classList.remove("mistetliv");
  document.querySelector("#liv2").classList.remove("mistetliv");
  document.querySelector("#liv3").classList.remove("mistetliv");

  // start timer
  document.querySelector("#tid_sprite").classList.add("tid");

  // lyt efter animationend og start function stopSpillet
  document
    .querySelector("#tid_container")
    .addEventListener("animationend", stopSpillet);

  // Elementerne falder fra start af

  joint.classList.add("falling1");
  joint1.classList.add("falling1");
  vape.classList.add("falling2");
  vape1.classList.add("falling2");
  cigaret.classList.add("falling3");
  cigaret1.classList.add("falling3");

  // Gør elementerne klikbare

  joint.addEventListener("mousedown", clickJoint);
  joint1.addEventListener("mousedown", ClickJoint1);
  vape.addEventListener("mousedown", clickVape);
  vape1.addEventListener("mousedown", clickVape1);
  cigaret.addEventListener("mousedown", clickCigaret);
  cigaret1.addEventListener("mousedown", clickCigaret1);

  // Omgang
  joint.addEventListener("animationiteration", omgangJoint);
  joint1.addEventListener("animationiteration", omgangJoint1);
  vape.addEventListener("animationiteration", omgangVape);
  vape1.addEventListener("animationiteration", omgangVape1);
  cigaret.addEventListener("animationiteration", omgangCigaret);
  cigaret1.addEventListener("animationiteration", omgangCigaret1);

  // Random position til container
  myRandom = Math.floor(Math.random() * 6) + 1;
  joint.classList.add("pos" + myRandom);

  myRandom = Math.floor(Math.random() * 6) + 1;
  joint1.classList.add("pos" + myRandom);

  myRandom = Math.floor(Math.random() * 6) + 1;
  vape.classList.add("pos" + myRandom);

  myRandom = Math.floor(Math.random() * 6) + 1;
  vape1.classList.add("pos" + myRandom);

  myRandom = Math.floor(Math.random() * 6) + 1;
  cigaret.classList.add("pos" + myRandom);

  myRandom = Math.floor(Math.random() * 6) + 1;
  cigaret1.classList.add("pos" + myRandom);

  // Random delay til container
  myRandom = Math.floor(Math.random() * 3) + 1;
  joint.classList.add("delay" + myRandom);

  myRandom = Math.floor(Math.random() * 3) + 1;
  joint1.classList.add("delay" + myRandom);

  myRandom = Math.floor(Math.random() * 3) + 1;
  vape.classList.add("delay" + myRandom);

  myRandom = Math.floor(Math.random() * 3) + 1;
  vape1.classList.add("delay" + myRandom);

  myRandom = Math.floor(Math.random() * 3) + 1;
  cigaret.classList.add("delay" + myRandom);

  myRandom = Math.floor(Math.random() * 3) + 1;
  cigaret1.classList.add("delay" + myRandom);

  // Random speed til container
  myRandom = Math.floor(Math.random() * 3) + 1;
  joint.classList.add("speed" + myRandom);

  myRandom = Math.floor(Math.random() * 3) + 1;
  joint1.classList.add("speed" + myRandom);

  myRandom = Math.floor(Math.random() * 3) + 1;
  vape.classList.add("speed" + myRandom);

  myRandom = Math.floor(Math.random() * 3) + 1;
  vape1.classList.add("speed" + myRandom);

  myRandom = Math.floor(Math.random() * 3) + 1;
  cigaret.classList.add("speed" + myRandom);

  myRandom = Math.floor(Math.random() * 3) + 1;
  cigaret1.classList.add("speed" + myRandom);

  point = 0;
  liv = 3;
}

// -----------------------------------------CLICK ELEMENT-----------------------------------

// Pauser joint, når man klikker på den
function clickJoint() {
  console.log("clickJoint");
  joint.classList.add("pause");

  //Tilføjer animation joint
  document.querySelector("#joint_sprite").classList.add("joint");

  // Tilføjer lyd-----
  document.querySelector("#sound_magical").currentTime = 0;
  document.querySelector("#sound_magical").play();

  // Kalder på joint og siger at når animationen ender skal funktionen genstartJoint starte
  joint.addEventListener("animationend", genstartJoint);

  // ændre point til _ pr klik
  point += 10;

  // viser point på skærmen
  document.querySelector("#mine_point").textContent = point;
}

// Pauser joint1, når man klikker på den
function ClickJoint1() {
  console.log("clickJoint1");
  joint1.classList.add("pause");

  //Tilføjer animation joint
  document.querySelector("#joint1_sprite").classList.add("joint1");

  // Tilføjer lyd-----
  document.querySelector("#sound_magical").currentTime = 0;
  document.querySelector("#sound_magical").play();

  // Kalder på joint og siger at når animationen ender skal funktionen genstartJoint starte
  joint1.addEventListener("animationend", genstartJoint1);

  // ændre point til _ pr klik
  point += 10;

  // viser point på skærmen
  document.querySelector("#mine_point").textContent = point;
}

// Pauser vape, når man klikker på den
function clickVape() {
  console.log("clickVape");
  vape.classList.add("pause");

  //Tilføjer animation vape
  document.querySelector("#vape_sprite").classList.add("vape");

  // Tilføjer lyd-----
  document.querySelector("#sound_sad").currentTime = 0;
  document.querySelector("#sound_sad").play();

  // Kalder på vape og siger at når animationen ender skal funktionen genstartVape starte
  vape.addEventListener("animationend", genstartVape);

  // ændre point til _ pr klik
  point -= 10;

  // viser point på skærmen
  document.querySelector("#mine_point").textContent = point;
}

// Pauser vape1, når man klikker på den
function clickVape1() {
  console.log("clickVape1");
  vape1.classList.add("pause");

  //Tilføjer animation vape
  document.querySelector("#vape1_sprite").classList.add("vape1");

  document.querySelector("#sound_sad").currentTime = 0;
  document.querySelector("#sound_sad").play();

  // Kalder på vape og siger at når animationen ender skal funktionen genstartVape starte
  vape1.addEventListener("animationend", genstartVape1);

  // ændre point til _ pr klik
  point -= 10;

  // viser point på skærmen
  document.querySelector("#mine_point").textContent = point;
}

// Pauser cigaret, når man klikker på den
function clickCigaret() {
  console.log("clickCigaret");
  cigaret.classList.add("pause");

  //Tilføjer animation cigaret
  document.querySelector("#cigaret_sprite").classList.add("cigaret");

  // Tilføjer lyd--------------------
  document.querySelector("#sound_garbage").currentTime = 0;
  document.querySelector("#sound_garbage").play();

  // Kalder på cigaret og siger at når animationen ender skal funktionen genstartCigaret starte
  cigaret.addEventListener("animationend", genstartCigaret);

  document.querySelector("#liv" + liv).classList.add("mistetliv");
  liv--;
  console.log("liv er" + liv);

  if (liv <= 0) {
    console.log("ikke flere liv");
    stopSpillet();
  } else {
    console.log("flere liv");
  }
}

// Pauser cigaret1, når man klikker på den
function clickCigaret1() {
  console.log("clickCigaret1");
  cigaret1.classList.add("pause");

  //Tilføjer animation cigaret
  document.querySelector("#cigaret1_sprite").classList.add("cigaret1");

  // Tilføjer lyd--------------------
  document.querySelector("#sound_garbage").currentTime = 0;
  document.querySelector("#sound_garbage").play();

  // Kalder på cigaret og siger at når animationen ender skal funktionen genstartCigaret starte
  cigaret1.addEventListener("animationend", genstartCigaret1);

  document.querySelector("#liv" + liv).classList.add("mistetliv");
  liv--;
  console.log("liv er" + liv);

  if (liv <= 0) {
    console.log("ikke flere liv");
    stopSpillet();
  } else {
    console.log("flere liv");
  }
}

// -----------------------------------------------------GENSTART-------------------------------

// Her fjerner jeg alle classes og tilføjer falling igen

function genstartJoint() {
  console.log("genstartJoint");

  // Fjerner class
  document.querySelector("#joint_sprite").classList = "";
  joint.classList = "";

  joint.offsetLeft;

  // Tilføjer falling
  joint.classList.add("falling1");

  // Tilføjer random position
  myRandom = Math.floor(Math.random() * 6) + 1;
  joint.classList.add("pos" + myRandom);

  // Tilføjer random delay
  myRandom = Math.floor(Math.random() * 3) + 1;
  joint.classList.add("delay" + myRandom);

  // tilføjer random speed
  myRandom = Math.floor(Math.random() * 3) + 1;
  joint.classList.add("speed" + myRandom);
}

function genstartJoint1() {
  console.log("genstartJoint1");

  // Fjerner class
  document.querySelector("#joint1_sprite").classList = "";
  joint1.classList = "";

  joint1.offsetLeft;

  // Tilføjer falling
  joint1.classList.add("falling1");

  // Tilføjer random position
  myRandom = Math.floor(Math.random() * 6) + 1;
  joint1.classList.add("pos" + myRandom);

  // Tilføjer random delay
  myRandom = Math.floor(Math.random() * 3) + 1;
  joint1.classList.add("delay" + myRandom);

  // tilføjer random speed
  myRandom = Math.floor(Math.random() * 3) + 1;
  joint1.classList.add("speed" + myRandom);
}

function genstartVape() {
  console.log("genstartVape");

  // Fjerner class
  document.querySelector("#vape_sprite").classList = "";
  vape.classList = "";

  vape.offsetLeft;

  // Tilføjer falling
  vape.classList.add("falling2");

  // Tilføjer random position
  myRandom = Math.floor(Math.random() * 6) + 1;
  vape.classList.add("pos" + myRandom);

  // Tilføjer random delay
  myRandom = Math.floor(Math.random() * 3) + 1;
  vape.classList.add("delay" + myRandom);

  // tilføjer random speed
  myRandom = Math.floor(Math.random() * 3) + 1;
  vape.classList.add("speed" + myRandom);
}

function genstartVape1() {
  console.log("genstartVape1");

  // Fjerner class
  document.querySelector("#vape1_sprite").classList = "";
  vape1.classList = "";

  vape1.offsetLeft;

  // Tilføjer falling
  vape1.classList.add("falling2");

  // Tilføjer random position
  myRandom = Math.floor(Math.random() * 6) + 1;
  vape1.classList.add("pos" + myRandom);

  // Tilføjer random delay
  myRandom = Math.floor(Math.random() * 3) + 1;
  vape1.classList.add("delay" + myRandom);

  // tilføjer random speed
  myRandom = Math.floor(Math.random() * 3) + 1;
  vape1.classList.add("speed" + myRandom);
}

function genstartCigaret() {
  console.log("genstartCigaret");
  document.querySelector("#cigaret_sprite").classList = "";
  cigaret.classList = "";

  cigaret.offsetLeft;

  // Tilføjer falling
  cigaret.classList.add("falling3");

  // Tilføjer random position
  myRandom = Math.floor(Math.random() * 6) + 1;
  cigaret.classList.add("pos" + myRandom);

  // Tilføjer random delay
  myRandom = Math.floor(Math.random() * 3) + 1;
  cigaret.classList.add("delay" + myRandom);
}

function genstartCigaret1() {
  console.log("genstartCigaret1");
  document.querySelector("#cigaret1_sprite").classList = "";
  cigaret1.classList = "";

  cigaret1.offsetLeft;

  // Tilføjer falling
  cigaret1.classList.add("falling3");

  // Tilføjer random position
  myRandom = Math.floor(Math.random() * 6) + 1;
  cigaret1.classList.add("pos" + myRandom);

  // Tilføjer random delay
  myRandom = Math.floor(Math.random() * 3) + 1;
  cigaret1.classList.add("delay" + myRandom);
}

// -------------------------------------------------------OMGANG--------------------------------------

function omgangJoint() {
  console.log("omgangJoint");

  // Fjerner class
  joint.classList = "";
  joint.offsetLeft;

  // Tilføjer falling
  joint.classList.add("falling1");

  // Tilføjer random position
  myRandom = Math.floor(Math.random() * 6) + 1;
  joint.classList.add("pos" + myRandom);

  // Tilføjer random delay
  myRandom = Math.floor(Math.random() * 3) + 1;
  joint.classList.add("delay" + myRandom);

  // tilføjer random speed
  myRandom = Math.floor(Math.random() * 3) + 1;
  joint.classList.add("speed" + myRandom);
}

function omgangJoint1() {
  console.log("omgangJoint1");

  // Fjerner class
  joint1.classList = "";
  joint1.offsetLeft;

  // Tilføjer falling
  joint1.classList.add("falling1");

  // Tilføjer random position
  myRandom = Math.floor(Math.random() * 6) + 1;
  joint1.classList.add("pos" + myRandom);

  // Tilføjer random delay
  myRandom = Math.floor(Math.random() * 3) + 1;
  joint1.classList.add("delay" + myRandom);

  // tilføjer random speed
  myRandom = Math.floor(Math.random() * 3) + 1;
  joint1.classList.add("speed" + myRandom);
}

function omgangVape() {
  console.log("omgangVape");

  // Fjerne class
  vape.classList = "";
  vape.offsetLeft;

  // Tilføjer falling
  vape.classList.add("falling2");

  // Tilføjer random position
  myRandom = Math.floor(Math.random() * 6) + 1;
  vape.classList.add("pos" + myRandom);

  // Tilføjer random delay
  myRandom = Math.floor(Math.random() * 3) + 1;
  vape.classList.add("delay" + myRandom);
}

function omgangVape1() {
  console.log("omgangVape1");

  // Fjerne class
  vape1.classList = "";
  vape1.offsetLeft;

  // Tilføjer falling
  vape1.classList.add("falling2");

  // Tilføjer random position
  myRandom = Math.floor(Math.random() * 6) + 1;
  vape1.classList.add("pos" + myRandom);

  // Tilføjer random delay
  myRandom = Math.floor(Math.random() * 3) + 1;
  vape1.classList.add("delay" + myRandom);
}

function omgangCigaret() {
  console.log("omgangCigaret");

  // Fjerner class
  cigaret.classList = "";
  cigaret.offsetLeft;

  // Tilføjer falling
  cigaret.classList.add("falling3");

  // Tilføjer random position
  myRandom = Math.floor(Math.random() * 6) + 1;
  cigaret.classList.add("pos" + myRandom);

  // Tilføjer random delay
  myRandom = Math.floor(Math.random() * 3) + 1;
  cigaret.classList.add("delay" + myRandom);
}

function omgangCigaret1() {
  console.log("omgangCigaret1");

  // Fjerner class
  cigaret1.classList = "";
  cigaret1.offsetLeft;

  // Tilføjer falling
  cigaret1.classList.add("falling3");

  // Tilføjer random position
  myRandom = Math.floor(Math.random() * 6) + 1;
  cigaret1.classList.add("pos" + myRandom);

  // Tilføjer random delay
  myRandom = Math.floor(Math.random() * 3) + 1;
  cigaret1.classList.add("delay" + myRandom);
}

//---------------------------------------------------STOP SPILLET--------------------------------------

function stopSpillet() {
  console.log("stopSpillet");

  // Stop timer
  document.querySelector("#tid_sprite").classList = "";
  tid.classList = "";

  // fjern alt på alle elemtenters containere og sprites

  document.querySelector("#joint_sprite").classList = "";
  joint.classList = "";

  document.querySelector("#joint_sprite").classList = "";
  joint1.classList = "";

  document.querySelector("#vape_container").classList = "";
  vape.classList = "";

  document.querySelector("#vape1_container").classList = "";
  vape1.classList = "";

  document.querySelector("#cigaret_container").classList = "";
  cigaret.classList = "";

  document.querySelector("#cigaret1_sprite").classList = "";
  cigaret1.classList = "";

  // fjern alle eventlistners på alle container

  // fjerner fra joint
  joint.removeEventListener("animationiteration", omgangJoint);

  joint.removeEventListener("animationend", genstartJoint);

  joint.removeEventListener("mousedown", clickJoint);

  // fjerner fra joint1
  joint1.removeEventListener("animationiteration", omgangJoint1);

  joint1.removeEventListener("animationend", genstartJoint1);

  joint1.removeEventListener("mousedown", ClickJoint1);

  // fjerner fra vape
  vape.removeEventListener("animationiteration", omgangVape);

  vape.removeEventListener("animationend", genstartVape);

  vape.removeEventListener("mousedown", clickVape);

  // fjerner fra vape1
  vape1.removeEventListener("animationiteration", omgangVape1);

  vape1.removeEventListener("animationend", genstartVape1);

  vape1.removeEventListener("mousedown", clickVape1);

  // fjerner fra cigaret
  cigaret.removeEventListener("animationiteration", omgangCigaret);

  cigaret.removeEventListener("animationend", genstartCigaret);

  cigaret.removeEventListener("mousedown", clickCigaret);

  // fjerner fra cigaret1
  cigaret1.removeEventListener("animationiteration", omgangCigaret1);

  cigaret1.removeEventListener("animationend", genstartCigaret1);

  cigaret1.removeEventListener("mousedown", clickCigaret1);

  // lyt efter liv og point
  if (liv <= 0) {
    gameOver();
  } else if (point >= 50) {
    levelComplete();
  } else {
    gameOver();
  }
}

//------------------------------------------------------GAME OVER----------------------------------
function gameOver() {
  console.log("game_over");

  // Vis gameover skærm
  document.querySelector("#game_over").classList.remove("hide");

  // Klik på genstart
  document.querySelector("#playagain1").addEventListener("click", startGame);
}

//-----------------------------------------------------LEVEL COMPLETE------------------------------
function levelComplete() {
  console.log("level complete");

  // Vis levelcomplete
  document.querySelector("#level_complete").classList.remove("hide");

  // Klik på genstart
  document.querySelector("#playagain2").addEventListener("click", startGame);
}
