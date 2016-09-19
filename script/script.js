function set() {
        var is = document.getElementsByClassName('../index.html mute')[0].id;
        if (is === "on") {
          document.getElementsByClassName('../index.html mute')[0].id = "off";
          document.getElementsByTagName("../index.html audio")[0].pause();
        } else {
          document.getElementsByClassName('../index.html mute')[0].id = "on";
          document.getElementsByTagName("../index.html audio")[0].play();
        }
      }
