// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Web App Sec Quiz",
        "main":    "<p>Are you a security professional or developer? Test your Web App Sec knowledge!</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
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
            "q": "How many inches of rain does Michigan get on average per year?",
            "a": [
                {"option": "149",    "correct": false},
                {"option": "32",     "correct": true},
                {"option": "3",      "correct": false},
                {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 times a year in Michigan.</p>" // no comma here
        },
        { // Question 3
            "q": "In which of these places can you purchase a car?",
            "a": [
                {"option": "The Zoo",        "correct": false},
                {"option": "Ebay",           "correct": true},
                {"option": "Grocery Store",  "correct": false},
                {"option": "Used Car Lot",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Nice!</span> You can indeed buy a car on Ebay or in a used car lot.</p>",
            "incorrect": "<p><span>No.</span> You can't buy a car at the zoo or in a grocery store, try Ebay or a used car lot instead.</p>" // no comma here
        },
        { // Question 4
            "q": "Is Earth bigger than a basketball?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
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
