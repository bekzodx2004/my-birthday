function korsat() {
  let hozir = new Date();
  let h1 = document.querySelectorAll("h1");

  soat = hozir.getHours();
  minut = hozir.getMinutes();
  sekund = hozir.getSeconds();

  if (soat < 10) soat = "0" + soat;
  if (minut < 10) minut = "0" + minut;
  if (sekund < 10) sekund = "0" + sekund;

  h1[0].innerHTML = soat + " :";
  h1[1].innerHTML = minut + " :";
  h1[2].innerHTML = sekund;

  setTimeout("korsat()", 1);
}

function chiq() {
  hozir = new Date();
  h_yil = hozir.getFullYear();
  h_oy = hozir.getMonth();
  bugun = hozir.getDate();
  h2 = document.querySelectorAll("h2");
  kuni = tkun.kun.value;
  oyi = tkun.oy.value;
  oyi--;
  yili = tkun.yil.value;

  if (
    yili < h_yil -1 ||
    yili === "" ||
    oyi > 11 ||
    oyi === "" ||
    oyi < 0 ||
    kuni > 31 ||
    kuni == "" ||
    kuni < 1 ||
    (yili == h_yil && oyi == h_oy && kuni == bugun)
  ) {
    h2[0].innerHTML = "";
    h2[1].innerHTML = "";
    h2[2].innerHTML = "";
    h2[3].innerHTML = "";
    h2[4].innerHTML = "";
    h2[5].innerHTML = "";
    h5.innerHTML = "Xato";
  }
   else {
    t_kun = new Date(yili, oyi, kuni, 0, 0, 0);
    millis = hozir - t_kun;
    // Math.abs(millis)
    millis *= -1 

    a_sec = Math.trunc(millis / 1000);
    a_min = Math.trunc(a_sec / 60);
    a_soat = Math.trunc(a_min / 60);
    a_kun = Math.trunc(a_soat / 24);
    a_oy = Math.trunc(a_kun / 30.4375);
    a_yil = Math.trunc(a_kun / 365);
    

  

    h2[0].innerHTML = a_yil + " yil";
    h2[1].innerHTML = a_oy + " oy";
    h2[2].innerHTML = a_kun + " kun";
    h2[3].innerHTML = a_soat + " soat";
    h2[4].innerHTML = a_min + " minut";
    h2[5].innerHTML = a_sec + " sekund";

    h5.innerHTML = ""
  }

  event.preventDefault();

  //   setTimeout("korsat()", 1000);
}
