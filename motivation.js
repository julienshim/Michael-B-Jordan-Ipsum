var count = document.querySelector('select#pCount');
var results = document.querySelector('#results');

var motivation = [
    "Sometimes you gotta go with your first instinct. You gotta go with your gut. That's kind of how I live my life you gotta go with your gut.",
    "Sometimes you're overthinking, you convince yourself to get out of it and you're like 'ah I shoulda did that!' You can't live life with regrets. Sometimes you just gotta indulge. But in the same breath, you gotta have restraint and self-control too.",
    "Do as much homework as you can. Learn everybody's job and don't just settle.",
    "Redemption is about righting a wrong, and in that pursuit, it's about trying. You can stumble, you can make mistakes, but it's about trying to do the right thing.",
    "I'm not good at everything, I just do my best at everything.",
    "I think everyone starts in the mailroom at some point! It's a rite of passage. Your boss has to throw something at you and order you around for at least two years.",
    "Sometimes you've gotta hide the medicine in the food. You can't slap somebody in the face with facts, all the time. It's too harsh.",
    "You know, you can try and plan as much as you want, but you get there on game day and you get thrown a curve ball, I guess, hey, the game plan goes out the window. You've got to adapt.",
    "I think everybody wants to be their own person and be an individual.",
    "I've never been the guy to hype myself up. It's just not my thing.",
    "So you tell yourself to just do the work and disconnect, because you have no control over the outcome.",
    "Be collaborative. I've had some of my best experiences with directors who were able to sit down and have a conversation and ask me what I thought.",
    "I want people to leave the theatre and think, 'How can I be a better person?' That's the only way things are going to improve.",
    "I think it's just easier for people to put you in a box or a lane, because you look similar. I think that's unfair for anybody in any situation.",
    "Taking a break, taking a moment, is super important.",
    "You can only foolt reality until the truth come knocking on your door.",
    "Don't pretend to know everything. I've been blessed to work with a lot of veteran actors, and I soak up lessons from them like a sponge.",
    "Power. Legacy. Purpose.",
    "As human beings, why does it take somebody to feel like they're close to us for us to see their humanity? Why can't we see the huamnity in people that are distant from us?",
    "I do a lot. I don't like to sit still. I am pretty spontaneous. I like to cook a lot. I like to eat. I like to workout, surf, read, write, and create. I am always working on a couple of projects that I always have and need to put more time into.",
    "Equality means having the same rights and liberties and opportunities regardless of our differences.",
    "I want to be worldwide.",
    "World domination.",
    "Because I'm willing to sacrifice right now. I told myself that my 20s would be sacrified for work and the 30s I was going to chill out, but I was like no. I still got things to do. I can't let up off the gas.",
    "You have got to try, and you have to take risks. I never really feel phased as you are always learning something and learning what you can take away from what you are doing.",
    "Everyone needs their own theme music! That's on away to get things started as everyone will hear you before they see you. So, when you walk in, the table is already set, and they're in the mood. You have got to believe yourself.",
    "To the trolls on the internet, I want to say: get your head out of the computer. Go outside and walk around. Look at the people walking next to you. Look at your friends’ friends and who they’re interacting with. And just understand this is the world we live in. It’s OK to like it.",
    "My path is my path. I can’t take nothing away from nobody and nobody can take nothing away from me. I’m running my race. But we can still encourage each other.",
    "We're at a hundred right now.",
    "I used to run myself into the ground, 'til pure exhaustion. Just because then I'd feel like I desevere it. That's probably why I go so hard in the gym, go so hard in life."
];

// Initial Selected '3 Paragraphs'
generateParagraphs(3);

// Generate Paragraphs
function generateParagraphs(number) {

    results.innerHTML = "";

    for (var i = 0; i < number; i++) {

        var paragraph = document.createElement('p');
        var text = "";

        if (i === 0) {
            text = "Michael B. Jordan Ipsum will motivate you."
        }

        while (text.length < 400) {
            var random = Math.floor(Math.random() * motivation.length);
            text += ' ' + motivation[random];
        }
        
        var textNode = document.createTextNode(text);
        paragraph.append(textNode);
        paragraph.setAttribute('class', 'hello');
        results.appendChild(paragraph);
    }
};

// Listen for list changes and generate new paragraphs
count.addEventListener('change', function (event) {
    generateParagraphs(parseInt(event.srcElement.value));
});
