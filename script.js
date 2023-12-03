

var kullanicilar = [
  {kullaniciAdi:"yasinfedev", password:"12345"},
  
]

var tweetler = [
  {kullaniciAdi:"yasinfedev", tweet:"HTML öğreniyorum! Frontend'i seviyorum!"},
  {kullaniciAdi:"minefedev", tweet:"CSS öğreniyorum! Frontend'i seviyorum!"},
  {kullaniciAdi:"zeynofedev", tweet:"JS öğreniyorum! Frontend'i seviyorum!"},

]

function girisYap() {
  var kullaniciAdi = document.getElementById("kullaniciAdi").value;
  var password = document.getElementById("password").value;

  if (kullaniciAdi==kullanicilar[0].kullaniciAdi) {
    if (password==kullanicilar[0].password) {
          document.getElementById("tweet1").innerHTML = "Kimden: " + tweetler[0].kullaniciAdi + "<br>Tweet: " +  tweetler[0].tweet;
          document.getElementById("tweet2").innerHTML = "Kimden: " + tweetler[1].kullaniciAdi + "<br>Tweet: " +  tweetler[1].tweet;;
          document.getElementById("tweet3").innerHTML = "Kimden: " + tweetler[2].kullaniciAdi + "<br>Tweet: " +  tweetler[2].tweet;;
        } else {
            alert("Şifreniz hatalı.")
        }
     } else {
         alert("Kullanıcı adınız hatalı.")
    }

}
