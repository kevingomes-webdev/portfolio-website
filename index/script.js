/***Password******/

$(document).ready(function() {
    $('#submit-btn').click(function() {
        var password = $('#password').val();
        var correctPassword = "cv"; // Replace with your desired password
        if (password === correctPassword) {
            window.location.href = "kevingomes-webdev.github.io/portfolio-website/resume/resume.html"; // Replace with the path to your resume
        } else {
            $('#error-message').text("Incorrect password. Please try again.");
            errorMessage();
        }
    });

    function playAnimation() {
        const tl = gsap.timeline();

        tl.from(".containerElements > *", {
            y: "200%",
            opacity: 0,
            duration: 3,
            ease: "power4.out",
            stagger: 0.3
        })
    }

    playAnimation();

    function errorMessage() {
        const em = gsap.timeline();

            // Slide up and fade in
            em.to("#error-message", {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: "power1.out"
            });

            // Scale up slightly
            em.to("#error-message", {
                duration: 0.3,
                opacity: 0,
                ease: "power1.out"
            });

            em.to("#error-message", {
                duration: 0.3,
                opacity: 1,
                ease: "power1.out"
            });
    }

    
});


/***Animation****/








