// messages

var m1 = "Let's See if You have Good Taste..."
var m2 = "Ciao! Buon Gusto!";
var m3 = "Ohayō! Visit it soon!";
var m4 = "Hola Che! Veni pronto!";
var m5 = "Bonjour! Viens me visiter!";
var m6 = "Try it again!";



//if you click an image.. a function will run & message will show up


document.getElementById("myRome").onclick = useRome;


function useRome () {
    document.getElementById("myTokyo").style.visibility = "hidden";
    document.getElementById("myBuenosaires").style.visibility = "hidden";
    document.getElementById("myParis").style.visibility = "hidden";
    loadsIm(m2);
  }



  document.getElementById("myTokyo").onclick = useTokyo;


  function useTokyo () {
      document.getElementById("myRome").style.visibility = "hidden";
      document.getElementById("myBuenosaires").style.visibility = "hidden";
      document.getElementById("myParis").style.visibility = "hidden";
      loadsIm(m3);
    }



    document.getElementById("myBuenosaires").onclick = useBuenosaires;


    function useBuenosaires () {
        document.getElementById("myRome").style.visibility = "hidden";
        document.getElementById("myTokyo").style.visibility = "hidden";
        document.getElementById("myParis").style.visibility = "hidden";
        loadsIm(m4);
      }


      document.getElementById("myParis").onclick = useParis;


      function useParis () {
          document.getElementById("myRome").style.visibility = "hidden";
          document.getElementById("myTokyo").style.visibility = "hidden";
          document.getElementById("myBuenosaires").style.visibility = "hidden";
          loadsIm(m5);
        }

        document.getElementById("reset").onclick = useReset;

        function useReset() {
          document.getElementById("myRome").style.visibility = "visible";
          document.getElementById("myTokyo").style.visibility = "visible";
          document.getElementById("myBuenosaires").style.visibility = "visible";
          document.getElementById("myParis").style.visibility = "visible";
          loadsIm(m6);

        }

// the value of message will be changed depending on player actions
// m1 is the starting message value

loadsIm(m1);



// click an image and function will run

function loadsIm(message) {
    document.getElementById("note").innerHTML= message;
}
