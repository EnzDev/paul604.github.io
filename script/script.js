function set() {
        var is = document.getElementsByClassName('mute')[0].id;
        if (is === "on") {
          document.getElementsByClassName('mute')[0].id = "off";
          document.getElementsByTagName("audio")[0].pause();
        } else {
          document.getElementsByClassName('mute')[0].id = "on";
          document.getElementsByTagName("audio")[0].play();
        }
      }
