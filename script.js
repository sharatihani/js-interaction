var superheroButton = document.getElementById('superhero-button');
var sign;
var horoscopeChoice;
var textColor;
var superheroStyle = document.getElementById('superhero');

var colors = ["#ff0000", "#0089FF", "#EBEB00", "#00000", "#FFAB00"]

// information is from https://www.woovly.com/blog/marvel-superhero-zodiac-sign/  and https://zodiacfire.com/zodiac-superheroes/

var aries = ["Aries: Superman - The cape and the tights are a natural fit for Aries. Your sense of invincibility makes you feel pretty super human at times but there’s always this lingering urge to go higher, faster, stronger.",
"Aries: Captain Marvel - An Aries is courageous, confident, and passionate, just like the good Captain, but also sometimes impetuous, hot-tempered, and too quick to act. On top of all of this, she's literally surrounded by crackling energy flames much of the time."];

var taurus = ["Taurus: The Incredible Hulk - You’re slow to burn but when you do lose control you appear to double in size. Rage is a motivating force that you can use to move immovable objects and objectionable people.",
"Taurus: Black Panther - T'Challa is devoted to his country and his family, as well as to the world, and though in Civil War we see his stubbornness, a very Taurean trait, flare up, T'Challa overcomes this and turns to reason in a way that is rare in fictional worlds."];

var gemini = ["Gemini: Deadpool - Are Gemini personalities heroes or anti-heroes? Sometimes it can be hard to tell. They resemble the duality of superheroes like Deadpool. Smart talking, rude, oversexed, you enjoy the rapid fire world and need a hero with a badass name.",
"Gemini: Iron Man - Gemini is well-represented in Tony, as he showcases the sign's natural curiosity, adaptability, passion, and dynamic nature. Tony is incredibly smart, charismatic, and always has his hand in a thousand things. He thrives on being the center of attention and drawing a crowd."];

var cancer = ["Cancer: Captain America - If you're born under the Crab sign, you probably recognize many of your own traits in Captain America's stubborn determination, inability to express his emotion (see: a million damaged punching bags), and his amazing, unparalleled devotion to those he loves.",
""];

var leo = ["Leo: Thor - Loving, laughing, and larger than life, literally a glowing god, is there any question which character Leos are? The Leo is a leader, a King, one might say, or, perhaps, a god, a glorious mane haloing them like a crown. Thor's booming persona and his endearing personality, make him a true Leo.",
"Leo: The Flash - Everything about the Flash just matches the Leo personality – from the name, the red suit, the lightening bolt – and the super speed thing too. Your love for all things explosive closely resembles this heroes ability to create a giant electrical storm out of nowhere."];

var virgo = ["Virgo: Spider-Man - Much like Peter, Virgos are family-oriented like Peter is with his Aunt, selfless, like Peter is with the world, and always eager to lend a helping hand like Peter is with Tony Stark. Not to mention, Peter is incredibly hardworking, another Virgo trait. They can also tend to be a little shy... but hey, that's what masks are for!"];

var libra = ["Libra: War Machine - Libras are also a very social sign, preferring to work as a team and valuing their friendships, much in the way Rhodey does when it comes to his strong friendship with Tony. (Even though Iron Man often drives him crazy.)"];

var scorpio = ["Scorpio: Black Widow - Black Widows and Scorpions are both deadly creatures and it makes sense Natasha would suit this sign. But deadly doesn't always mean evil, as both Scorpios and Natasha often reflect, though on occasion it can mean violent. Natasha's bravery, her loyalty, and her resourcefulness are the traits that truly qualify her to be the model for Scorpios everywhere.",
"Scorpio: Batman - Of course the dark night is Scorpios superhero pick – as they are basically just a blood transfusion away from being a vampire. You’ll love the gothic overtones and the menacing underbelly of Gotham City. The brooding aura around this hero along with the slightly damaged psyche are things that Scorpio can relate to well."];

var sag = ["Sagittarius: Antman - Sure, being tiny might not be the most show stopping power. But as an adventure loving Sagittarius you’re eventually going to run out of exotic destinations to visit and as a micro superhuman endless new possibilities would open up.",
"Sagittarius: Nakia - Nakia is the true embodiment of the Sagittarian spirit. Freedom is her main driver, and her need to travel and explore, to see the world and where she can assist it, are key to her personality. As a fire sign, her passion drives her, and as an archer, she is fierce in her pursuits and in defending those she loves."];

var capricorn = ["Capricorn: Pepper Potts - Pepper is always in control, sometimes to a fault. While her responsible ways are sorely needed in Tony Stark's life,  and her discipline allows her to successfully run Stark Industries, she can sometimes be unforgiving and too judgemental.",
"Capricorn: Wonder Woman - The Capricorn sign and Wonder Woman have more in common then you might realize. This sign shares the same strength and resilience that embodies the warrior spirit of this hero. You can try to knock ’em down over and over again and they’ll get back up every time. Very little is able to phase them or throw them off track particularly when they’re on a mission."];

var aquarius = ["Aquarius: Thor - Thors’ Viking heritage and his never ending battle with shape shifting Loki accurately captures the intensity of this sign. What’s not to love about a timeless story of family treachery and redemption – that’s right up the the Aquarians alley!",
"Aquarius: Shuri - While Shuri is definitely not on the shy side of being an Aquarius, she definitely has an eccentric streak running through her. Overall, she's a great representative of the sign because of her independence, her originality, and her forward-looking mentality. As a genius, an inventor, and a scientist -- Shuri is a true Aquarian thinker. And much like those who are in this airy sign, she is always in need of the next project."];

var pisces = ["Pisces: Bucky Barnes - Bucky Barnes is a deeply emotional character. He's been through a lot, but he still experiences deep empathy for the world and for those he may have hurt against his will. Bucky Barnes is a deeply emotional character. He's been through a lot, but he still experiences deep empathy for the world and for those he may have hurt against his will.",
"Pisces: CatWoman - The Pisces personality can feel lost and tormented at times. But they can also be menacing too when they sharpen their claws. Which is why they would most likely be the Catwoman if they were a superhero. They have a tendency to like animals even more than humans meaning they’ll feel quite at home saving the world as their feline self."];

var randomSuperhero = Math.floor(Math.random() * 2);
var randomColor = Math.floor(Math.random() * 5);
superheroButton.addEventListener("click", superhero);

function superhero(){
sign = document.getElementById('superhero-input').value;
if (sign == "aries"){
horoscopeChoice = aries[randomSuperhero];
}
else if (sign == "taurus"){
horoscopeChoice = taurus[randomSuperhero];
}
else if (sign == "gemini"){
horoscopeChoice = gemini[randomSuperhero];
}
else if (sign == "cancer"){
horoscopeChoice = cancer[randomSuperhero];
}
else if (sign == "leo"){
horoscopeChoice = leo[randomSuperhero];
}
else if (sign == "virgo"){
horoscopeChoice = virgo[randomSuperhero];
}
else if (sign == "libra"){
horoscopeChoice = libra[randomSuperhero];
}
else if (sign == "scorpio"){
horoscopeChoice = scorpio[randomSuperhero];
}
else if (sign == "sagittarius"){
horoscopeChoice = sag[randomSuperhero];
}
else if (sign == "capricorn"){
horoscopeChoice = capricorn[randomSuperhero];
}
else if (sign == "aquarius"){
horoscopeChoice = aquarius[randomSuperhero];
}
else if (sign == "pisces"){
horoscopeChoice = pisces[randomSuperhero];
}
else{
horoscopeChoice="please enter your sign again (no using capital letters)";
}

// restyles the output color

function restyle(){
textColor = colors[randomColor];
superheroStyle.style.color = textColor;
}

document.getElementById("superhero").innerHTML = horoscopeChoice;
restyle();
}
