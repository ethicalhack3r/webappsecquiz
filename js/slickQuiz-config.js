// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Web App Sec Quiz",
        "main":    "<p>Are you a security professional or developer? Test your Web App Sec knowledge!</p>",
        "results": "<h5>Learn More</h5> <p><a href='https://www.owasp.org/index.php/Main_Page'>OWASP</a></p>",
        "level1":  "Rockstar! You are ready to pwn the world!",
        "level2":  "Nice score! Some gaps in your knowledge, all you need is time.",
        "level3":  "Not bad, do some more practice. Download OWASP's Broken Web Apps VM",
        "level4":  "Read some more Hackers Handbook",
        "level5":  "n00b" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "What 3 elements make up the 'origin' in the Same Origin Policy (SOP)?",
            "a": [
                {"option": "The URL path, domain name and query string",      "correct": false},
                {"option": "The (in most browsers) port number, fragment id and server geo location",     "correct": false},
                {"option": "The domain name, application layer protocol, and (in most browsers) port number",      "correct": true},
                {"option": "The user agent, the port number and the top level domain (TLD)",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Well done!</p>",
            "incorrect": "<p><span>Uhh no.</span> Please read Wikipedia's <a href='http://en.wikipedia.org/wiki/Same_origin_policy' target='_blank'>article</a> on the SOP.</p>" // no comma here
        },
        { // Question 2
            "q": "What does the 'secure' flag do to a cookie? (if the browser supports it)",
            "a": [
                {"option": "Ensures client side script can not access the cookie",    "correct": false},
                {"option": "Ensure the cookie can not be sent over unencrypted HTTP",      "correct": true},
                {"option": "Ensures the cookie can not be sent to the server",     "correct": false},
                {"option": "Ensure the cookie is cryptographically strong",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> Correct!</p>",
            "incorrect": "<p><span>Fail.</span> See: <a href='https://www.owasp.org/index.php/SecureFlag' target='_blank'>https://www.owasp.org/index.php/SecureFlag</a></p>" // no comma here
        },
        { // Question 3
            "q": "When storing passwords in a database you should...",
            "a": [
                {"option": "Encrypt them",        "correct": false},
                {"option": "Hash and salt them",           "correct": true},
                {"option": "Hash them",  "correct": false},
                {"option": "Encode them",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span> You must not work for Tesco!</p>",
            "incorrect": "<p><span>No.</span> Never store passwords! See: <a href='https://www.owasp.org/index.php/Password_Storage_Cheat_Sheet' target='_blank'>https://www.owasp.org/index.php/Password_Storage_Cheat_Sheet</a></p>" // no comma here
        },
        { // Question 4
            "q": "The HTTP Strict Transport Security (HSTS) header ensures (as well as other things) the domain is only accessed over HTTPS. (if the browser supports it)",
            "a": [
                {"option": "True",    "correct": true},
                {"option": "False",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You know your headers!</p>",
            "incorrect": "<p><span>ERRRR!</span> See: <a href='https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security' target='_blank'>https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security</a></p>" // no comma here
        },
        { // Question 5
            "q": "Where are you right now? Select ALL that apply.",
            "a": [
                {"option": "Planet Earth",   "correct": true},
                {"option": "Pluto",          "correct": false},
                {"option": "At a computer",  "correct": true},
                {"option": "The Milky Way",  "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        } // no comma here
    ]
};
