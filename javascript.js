window.addEventListener("load", sidenVises);

let playstatus = false;

function sidenVises() {
    console.log("Siden er loadet");

    document.querySelector("#baggrundsmusik_klik").addEventListener("click", toggle_musik);


}

function toggle_musik() {
    console.log("Klikket på billede");
    if (playstatus == true) {
        playstatus = false;
        baggrundsMusikOff();


    } else {
        playstatus = true;
        baggrundsMusikOn();
    }
}

function baggrundsMusikOff() {
    console.log("baggrundsMusikOff");
    document.querySelector("#baggrundsmusik").pause()
}

function baggrundsMusikOn() {
    console.log("baggrundsMusikOn");
    document.querySelector("#baggrundsmusik").play();

}
