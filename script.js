  let check = document.getElementById("check")
  let sub_btn = document.getElementById("sub_btn")
  let rst_btn = document.getElementById("rst_btn")
  let alert = document.getElementById("alert")
  let name1 = document.getElementById("name1")
  let name2 = document.getElementById("name2")
  let username = document.getElementById("username")
  let write_txt= document.getElementById("write_txt")
  let success= document.getElementById("success")


  function for_sub() {
    if (check.checked && name1.value != "" && name2.value != "" && username.value != "" && write_txt.value) {
        sub_btn.removeAttribute("disabled","")
      } 
      else{
        sub_btn.setAttribute("disabled","")
      }
  }

  
  check.onchange = function(){
    for_sub()
  }

function inputing() {
    if (name1.value != "" || name2.value != "" || username.value != "" || write_txt.value) {
        rst_btn.removeAttribute("disabled","")
    } else {
        rst_btn.setAttribute("disabled","")
    }
}

  name1.oninput = function () {
      inputing()
      for_sub()
  }

  name2.oninput = function () {
      inputing()
      for_sub()
  }

  username.oninput = function () {
      inputing()
      for_sub()
  }

 write_txt.oninput = function () {
      inputing()
      for_sub()
  }

  rst_btn.onclick = function () {
    name1.value = "" 
    name2.value = ""
    username.value = ""
    write_txt.value = ""
    
    this.setAttribute("disabled","")
    sub_btn.setAttribute("disabled","")
  }
  
//   sub_btn.onclick = function () {
//     name1.value = "" 
//     name2.value = ""
//     username.value = ""
//     write_txt.value = ""
//     check.checked = false

//     success.setAttribute("style", "display: block !important")
    
//     this.setAttribute("disabled","")
//     rst_btn.setAttribute("disabled","")
//   }
  
//   name1.onfocus = function () {
//     success.removeAttribute("style", "display: block !important")
//   }

//   name2.onfocus = function () {
//     success.removeAttribute("style", "display: block !important")
//   }

//   username.onfocus = function () {
//     success.removeAttribute("style", "display: block !important")
//   }

//   check.onfocus = function () {
//     success.removeAttribute("style", "display: block !important")
//   }
