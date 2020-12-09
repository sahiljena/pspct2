  
document.onreadystatechange = function() { 
            if (document.readyState !== "complete") { 
                document.querySelector("body").style.visibility = "hidden"; 
                document.querySelector("#loader").style.visibility = "visible";
                document.querySelector("#parent-loader").style.display = "visible";
            } else { 
                document.querySelector("#loader").style.display = "none";
                document.querySelector("#parent-loader").style.display = "none";
                document.querySelector("#parent-loader").style.height = "0vh";
                document.querySelector("#parent-loader").style.width = "0vw";
                document.querySelector("body").style.visibility = "visible"; 
            } 
        };
