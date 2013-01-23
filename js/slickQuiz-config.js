/** 
 Yes, you've found the answers and questions.
 This quiz is just for fun, the idea is to test your own knowledge.
**/ 

var quizJSON = {
    "info": {
        "name":    "Web App Sec Quiz",
        "main":    "<p>Are you a security professional or developer? Test your Web App Sec knowledge!</p>",
        "results": "<h5>Learn More</h5> <p>Check out: <a href='https://www.owasp.org/index.php/Main_Page'>OWASP</a> <br /> Report issues: <a href='https://github.com/ethicalhack3r/webappsecquiz/tree/gh-pages'>https://github.com/ethicalhack3r/webappsecquiz/tree/gh-pages</a></p>",
        "level1":  "Rockstar! You are ready to pwn the world!",
        "level2":  "Nice score! Some gaps in your knowledge, all you need is time.",
        "level3":  "Not bad, do some more practice. Download OWASP's <a href='https://code.google.com/p/owaspbwa/'>Broken Web Apps VM</a>",
        "level4":  "Read some more <a href='https://www.amazon.com/The-Web-Application-Hackers-Handbook/dp/1118026470'>Hackers Handbook</a>.",
        "level5":  "n00b! Read the <a href='https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project'>OWASP Top 10</a>." // no comma here
    },
    "questions": [
        { // Question 1
            "q": "What three elements (in most browsers) make up the 'origin' in the Same Origin Policy (SOP)?",
            "a": [
                {"option": "The URL path, domain name and query string",      "correct": false},
                {"option": "The port number, fragment id and server geo location",     "correct": false},
                {"option": "The domain name, application layer protocol, and port number",      "correct": true},
                {"option": "The user agent, the port number and the top level domain (TLD)",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Well done!</p>",
            "incorrect": "<p><span>Uhh no.</span> Please read Wikipedia's <a href='https://en.wikipedia.org/wiki/Same_origin_policy' target='_blank'>article</a> on the SOP.</p>" // no comma here
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
            "q": "The information schema is useful when exploiting...",
            "a": [
                {"option": "SQL Injection",   "correct": true},
                {"option": "Cross-Site Scripting (XSS)",          "correct": false},
                {"option": "Session Hijacking",  "correct": false},
                {"option": "Business Logic",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You know your DBMS!</p>",
            "incorrect": "<p><span>Not Quite.</span> Read pentestmonkey's <a href='http://pentestmonkey.net/category/cheat-sheet/sql-injection' target='_blank'>SQL Injection Cheat Sheets</a>.</p>" // no comma here
        },
        { // Question 6
            "q": "An application is sanitising the <, > and \" characters. Is this enough to prevent Cross-Site Scripting (XSS)?",
            "a": [
                {"option": "Yes",  "correct": false},
                {"option": "No",  "correct": true} // no comma here
            ],
            "correct": "<p><span>You're right!</span> Blacklisting is never advised and sanitisation depends on the context.</p>",
            "incorrect": "<p><span>Wrong!</span> Read the <a href='https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet' target='_blank'>OWASP XSS Prevention Cheat Sheet</a>.</p>" // no comma here
        },
        { // Question 7
            "q": "Clickjacking is when an attacker...",
            "a": [
                {"option": "Takes control of the user's mouse by using Flash",  "correct": false},
                {"option": "Downgrades the user from HTTPS to HTTP",  "correct": false},
                {"option": "Tricks the user into clicking on something by using frames",  "correct": true},
                {"option": "Is able to port scan RFC1918 addresses",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Yup!</span> Use the X-Frame-Options header to help mitigate the attack.</p>",
            "incorrect": "<p><span>Nooooo!</span> Read <a href='https://www.owasp.org/index.php/Clickjacking' target='_blank'>https://www.owasp.org/index.php/Clickjacking</a></p>" // no comma here
        }, 
        { // Question 8
            "q": "What vulnerability exists in the following code? <a href='http://pastie.org/5792178' target='_blank'>http://pastie.org/5792178</a>",
            "a": [
                {"option": "OWASP A5: Cross-Site Request Forgery (CSRF)",  "correct": false},
                {"option": "OWASP A8: Failure to Restrict URL Access",  "correct": false},
                {"option": "OWASP A9: Insufficient Transport Layer Protection",  "correct": false},
                {"option": "OWASP A10: Unvalidated Redirects and Forwards",  "correct": true} // no comma here
            ],
            "correct": "<p><span>Yipee!</span> User supplied input is being put into the Location header value.</p>",
            "incorrect": "<p><span>Damn!</span> Check out <a href='https://www.owasp.org/index.php/Top_10_2010-A10' target='_blank'>https://www.owasp.org/index.php/Top_10_2010-A10</a></p>" // no comma here
        },
        { // Question 9
            "q": "Which of the following is a Web Application Firewall (WAF)?",
            "a": [
                {"option": "mod_security",  "correct": true},
                {"option": "mad_waf",  "correct": false},
                {"option": "wafw00f",  "correct": false},
                {"option": "secure cyber wall",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Of course!</span> mod_security is a multi platform WAF.</p>",
            "incorrect": "<p><span>LOL!</span> mod_security is a WAF and wafw00f is a WAF detection tool. The others were made up ;)</a></p>" // no comma here
        },
        { // Question 10
            "q": "If an attacker uses this payload, what are they trying to do? '; waitfor delay '0:0:30' -- ",
            "a": [
                {"option": "Ping a remote host with a delay",  "correct": false},
                {"option": "Blind SQL Injection",  "correct": true},
                {"option": "Error Based SQL Injection",  "correct": false},
                {"option": "Time based XSS",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> The WAITFOR statement blocks execution for a set amount of time in SQL Server.</p>",
            "incorrect": "<p><span>What?!</span> Ferruh will <a href='http://ferruh.mavituna.com/sql-injection-cheatsheet-oku/' target='_blank'>tell</a> you!</p>" // no comma here
        } // no comma here
    ]
};
