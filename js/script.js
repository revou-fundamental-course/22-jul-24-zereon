/*ini javascript*/

//Validasi input nama dan email

function formValidation() {
    let name = document.getElementById('name-input').value;
    let email = document.getElementById('email-input').value;
    console.log(name);
    console.log(email);

    //Pengecekan dimana name tidak boleh ''
    if (name == '' || email == '') {
        // Code ini akan di eksekusi ketika name = ''
        //alert('Maaf inputan anda kosong');
        document.getElementById("error-name").innerHTML = "Tidak ada yang boleh kosong"
    } else {
        // Code ini akan di eksekusi ketika name tidak ''
     alert('sukses menginput');
     document.getElementById("error-name").innerHTML = ""
     document.getElementById('name-input').value = ""
     document.getElementById('email-input').value = ""   
    }
}

//Call us button yang berisi prompt untuk input kontak
function callAction(){
    let call = prompt("Masukkan email Anda", "");
    console.log(call);
    document.getElementById("call-email").innerHTML = "Terima kasih! Staff kami akan segera menghubungi anda."
    document.getElementById("btn-call").style.display = "none"

}
//Auto Slide Banner

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs((slideIndex += n));
}

function showDivs(n){
var i;
var imgList = document.getElementsByClassName("img-slideshow");
if(n > imgList.length) slideIndex = 1;
else if (n < 1) slideIndex = imgList.length;

for(i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
}
imgList[slideIndex - 1].style.display = 'block';
}

setInterval(() => {
plusDivs(1);
}, 1000);