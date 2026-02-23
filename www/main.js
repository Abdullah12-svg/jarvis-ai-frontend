$(document).ready(function () {

    // 1. Unified Textillate Animation
    $('.text').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "fadeInUp",
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: true
        },
        out: {
            effect: "fadeOutDown",
            sync: false,
            shuffle: true,
        },
    });

    // 2. SiriWave Configuration
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: window.innerWidth > 800 ? 800 : window.innerWidth,
        height: 200,
        style: "ios9",
        speed: 0.30,
        amplitude: 1,
        autostart: true,
    });

    // 3. Mic Button Logic
    $("#MicBtn").click(function () {
        $("#Oval").fadeOut(500, function () {
            $("#SiriWave").removeAttr("hidden").fadeIn(500);
            siriWave.setAmplitude(2);

            
           
                });
            });
        }); 
        