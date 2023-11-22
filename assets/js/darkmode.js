let btn = document.getElementById("btn");
            let btnText = document.getElementById("btnText");
            let btnIcon = document.getElementById("btnIcon");

            btn.onclick = function(){
              document.body.classList.toggle('dark-theme');
              if(document.body.classList.contains("dark-theme")){
                btnIcon.src = "/assets/img/webimages/brightness.png";
                btnText.innerHTML = "Light";
                btnText.style.color = "white";
              }else{
                btnIcon.src = "/assets/img/webimages/moon.png";
                btnText.innerHTML = "Dark";
                btnText.style.color = "black";
              }
            }

            