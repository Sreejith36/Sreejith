function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// for sending data to google sheets and email

$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycby8uGN3XWfcRx_INXbArwh7tGggwmBwC06rMMCdQuv6FxfdRF-KggXDpSMz_aHMy_Up/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})






