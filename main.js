function afficherResteDivison() {
  let au1 = parseInt(document.getElementById("au1").value, 10) || 0;
  let au2 = parseInt(document.getElementById("au2").value, 10) || 0;
  let au3 = parseInt(document.getElementById("au3").value, 10) || 0;
  let au4 = parseInt(document.getElementById("au4").value, 10) || 0;
  let au5 = parseInt(document.getElementById("au5").value, 10) || 0;
  let au6 = parseInt(document.getElementById("au6").value, 10) || 0;
  let au7 = parseInt(document.getElementById("au7").value, 10) || 0;
  let au8 = parseInt(document.getElementById("au8").value, 10) || 0;
  let au9 = parseInt(document.getElementById("au9").value, 10) || 0;
  let au10 = parseInt(document.getElementById("au10").value, 10) || 0;

  let ae1 = parseInt(document.getElementById("ae1").value, 10) || 0;
  let ae2 = parseInt(document.getElementById("ae2").value, 10) || 0;
  let ae3 = parseInt(document.getElementById("ae3").value, 10) || 0;
  let ae4 = parseInt(document.getElementById("ae4").value, 10) || 0;
  let ae5 = parseInt(document.getElementById("ae5").value, 10) || 0;
  let ae6 = parseInt(document.getElementById("ae6").value, 10) || 0;
  let ae7 = parseInt(document.getElementById("ae7").value, 10) || 0;
  let ae8 = parseInt(document.getElementById("ae8").value, 10) || 0;
  let ae9 = parseInt(document.getElementById("ae9").value, 10) || 0;
  let ae10 = parseInt(document.getElementById("ae10").value, 10) || 0;

  let mv1 = parseInt(document.getElementById("mv1").value, 10) || 0;
  let mv2 = parseInt(document.getElementById("mv2").value, 10) || 0;
  let mv3 = parseInt(document.getElementById("mv3").value, 10) || 0;
  let mv4 = parseInt(document.getElementById("mv4").value, 10) || 0;
  let mv5 = parseInt(document.getElementById("mv5").value, 10) || 0;
  let mv6 = parseInt(document.getElementById("mv6").value, 10) || 0;
  let mv7 = parseInt(document.getElementById("mv7").value, 10) || 0;
  let mv8 = parseInt(document.getElementById("mv8").value, 10) || 0;
  let mv9 = parseInt(document.getElementById("mv9").value, 10) || 0;
  let mv10 = parseInt(document.getElementById("mv10").value, 10) || 0;

  let la1 = parseInt(document.getElementById("la1").value, 10) || 0;
  let la2 = parseInt(document.getElementById("la2").value, 10) || 0;
  let la3 = parseInt(document.getElementById("la3").value, 10) || 0;
  let la4 = parseInt(document.getElementById("la4").value, 10) || 0;
  let la5 = parseInt(document.getElementById("la5").value, 10) || 0;
  let la6 = parseInt(document.getElementById("la6").value, 10) || 0;
  let la7 = parseInt(document.getElementById("la7").value, 10) || 0;
  let la8 = parseInt(document.getElementById("la8").value, 10) || 0;
  let la9 = parseInt(document.getElementById("la9").value, 10) || 0;
  let la10 = parseInt(document.getElementById("la10").value, 10) || 0;

  document.getElementById("resu-au").innerHTML =
    au1 + au2 + au3 + au4 + au5 + au6 + au7 + au8 + au9 + au10;
  document.getElementById("resu-ae").innerHTML =
    ae1 + ae2 + ae3 + ae4 + ae5 + ae6 + ae7 + ae8 + ae9 + ae10;
  document.getElementById("resu-mv").innerHTML =
    mv1 + mv2 + mv3 + mv4 + mv5 + mv6 + mv7 + mv8 + mv9 + mv10;
  document.getElementById("resu-la").innerHTML =
    la1 + la2 + la3 + la4 + la5 + la6 + la7 + la8 + la9 + la10;
}
