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

function callAction(){
    let call = prompt("Masukkan email Anda", "");
    console.log(call);
    document.getElementById("call-email").innerHTML = "Terima kasih! Staff kami akan segera menghubungi anda."
    document.getElementById("btn-call").style.display = "none"

}
