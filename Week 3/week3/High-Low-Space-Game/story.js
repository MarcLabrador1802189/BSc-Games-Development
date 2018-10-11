function getNode0(){
    var story =  "You are an astronaut - Pilot Spiker - sat in the cockpit of the SS Star Falcon. Your colleague Commander Sheephard sits next to you, speaking to Capsule Communicator P. Mann whilst punching in the final commands into the computer." + 
    "<br><br>\"T-Minus 30 seconds... Spiker, have you put in the launch velocity?... I'm getting no reading.\"" + 
    "<br><br>You gaze around the cockpit, finding the launch velocity input dial. Your mind is drawing a blank... what is the velocity meant to be set to?" + 
    "<br><br>\"T-Minus 20 seconds... Spiker I hope you're setting the velocity... 15 seconds...";
    
    var chapter = "Adventure in Space - Start";
    
    return {story: story, chapter: chapter};
}

function getNode1(){
    var story =  "\"2... 1... Ignition!\" You're still not sure if it was blind luck or a sudden surge of remembrance but the rocket launches safely out of the atmosphere." + 
    "<br><br>\"Well I guess it's time we call it a year.\" jokes Sheephard as he heads towards the Cryo-sleep chamber. \"I'll leave you to turn off the lights.\" he says before hopping into his pod and falling under." + 
    "<br><br>You prepare your pod and begin climbing in. He was joking about turning off the lights... right?";
    
    var chapter = "Adventure in Space - A Successful Launch"
    
    return {story: story, chapter: chapter};
}

function getNode2(){
    var story =  "\"2... 1... Ignition!\" The ship rumbles as it begins to climb close to the edge of the atmosphere. You didn't change the velocity but it looks like you may have gotten away with it." + 
    "<br><br>Everything looks fine until you notice a flicker in the corner of your eye. From your seat you turn your gaze to see flames climbing up the inside of the ship. As the shuttle is still attempting its ascent there's no way for you to get the fire extinguisher on it." + 
    "<br><br>You have a plan... with no time to think of the consequences you spring into action.";
    
    var chapter = "Adventure in Space - Things Are Hotting Up"
    
    return {story: story, chapter: chapter};
}

function getNode3(){
    var story =  "Juuuuust to be safe you follow the commander's orders and decide to turn off the lights to the ship. The low glow of the strip lights guide you back to the Cryo-sleep chamber where you drift off." + 
    "<br><br>You slowly regain consciousness and, after recovering, make your way to the cockpit. Sheephard is already awake staring out the window at our destination. He hears you enter the room and turns to face you." +
    "<br><br>\"Now would be a perfect time to provide exposition but as James is too lazy let's pretend this is a really cool alien planet and we're on a mission to do something there.\"" + 
    "<br><br>You stare at Sheephard blankly, not really sure what he's on about. \"What are you gawping at, Spiker? Get to your station! We're due to land shortly!\" he barks."
    
    var chapter = "Adventure in Space - Waking Up on Time"
    
    return {story: story, chapter: chapter};
}

function getNode4(){
    var story =  "BWAAAH! BWAAAH! BWAAAH! BWAAAH! You awake to an alarm blaring. Looking around you see Sheephard has already left his pod. Looking around some more you see the ship appears to be very damaged... also there's smoke... also you appear to be mostly surrounded by fire." + 
    "<br><br>Reacting very slowly due to the groggy effects of the cryosleep you make your way through the fire and out of the chamber. Fortunately your body hasn't quite fully woken up yet, but based on the look of your flesh you'll be left with quite a serious burn and a LOT of pain." + 
    "<br><br>Sheephard sees the state you're in and scoffs. \"Maybe if you hadn't have left all of the lights on we wouldn't have crash landed!" + 
    "<br><br>You consider arguing as to why Sheephard left you in the chamber or why leaving the lights on would be life threatening but you decide against it. Besides, it seems Sheephard is already in his spacesuit and leaving the burning wreckage of the SS Star Falcon." + 
    "<br><br>You're almost finished with putting on your own spacesuit when you hear Sheephard on the comms link, \"Spiker get out here fast; looks like we have company...\"" + 
    "<br><br>You have suffered a <b>burn</b>.";
    
    var chapter = "Adventure in Space - Rise and Shine, Spiker; Wake Up and Smell the Ashes"
    
    return {story: story, chapter: chapter};
}

function getNode5(){
    var story =  "You take a deep breath then slam your hand down on the ominously named \"Release oxygen\" button. You spend the next moment wondering why such a button exists before the oxygen gets suddenly and abruptly pulled out of the ship." + 
    "You look behind you to confirm the fire has been put out then quickly press the \"Stop releasing oxygen\" button. As its name would suggest, the oxygen stops getting released. The ship is now low on oxygen, your commander is very very angry, but hey, at least you're no longer on fire!" + 
    "Everything else with the launch goes off without a hitch, and the lack of oxygen won't be a huge problem once you enter cryosleep." +
    "<br><br>\"Well I guess it's time we call it a year.\" jokes Sheephard as he heads towards the Cryo-sleep chamber. \"Although you did almost kill us... I'll leave you to turn off the lights.\" he says before hopping into his pod and falling under." + 
    "<br><br>You prepare your pod and begin climbing in. He was joking about turning off the lights... right?";
    "<br><br>You are now <b>low on oxygen</b>.";
    
    var chapter = "Adventure in Space - I Don't Think This Is Scientifically Accurate"
    
    return {story: story, chapter: chapter};
}

function getNode6(){
    var story =  "The big red \"Do Not Press\" cover over the \"Drop Stage\" button cannot stop you. The flames approach faster and faster, clawing at you whilst you fumble around with the cover. Sheephard looks over, appearing increasingly more alarmed. " + 
    "You finally get the cover off and press the button - a loud thunk can be heard as the stage is dropped early. With the last of its momentum the SS Star Falcon escapes the atmosphere and begins drifting off into space." + 
    "<br><br>You breathe a sigh of relief as the flames die down. Your body is covered in burns, but at least you survived." + 
    "<br><br>You look over at Sheephard who seems incredibly angry. The ship has no engine, no fuel, and is drifting further and further away from the planet you call home." + 
    "<br><br>You have suffered a <b>burn</b>." + 
    "<br><br>You have <b>low morale</b>.";
    
    var chapter = "Adventure in Space - Things Are Looking Bleak"
    
    return {story: story, chapter: chapter};
}

function getNode7(){
    var story =  "You strap yourself in as the ship slowly begins its descent to an alien planet, guided by your excellent piloting skills and absolutely nothing to do with the autopilot. You're not jealous. It's not your fault you're a human with the skills that a robot can easily put out of a job." + 
    "<br><br>Sheephard steps out of the ship after the successful landing and takes in a deep breath of canned air from his oxygen tank." + 
    "<br><br>You're almost finished with putting on your own spacesuit when you hear Sheephard on the comms link, \"Spiker get out here fast; looks like we have company...\"";
    
    var chapter = "Adventure in Space - Two Is Company"
    
    return {story: story, chapter: chapter};
}

function getNode8(){
    var story =  "Taking the hint you grab a laser rifle and stumble out of the ship, all guns blazing. After taking down two of the vile looking creatures they take the hint and begin returning fire." + 
    "<br><br>Sheephard joins in on the warfare, seeming to relish the opportunity. During a particularly sticky part of the fire fight you take a shot to the faceplate of your helmet, causing a crack that allows oxygen to slowly seep out." + 
    "<br><br>Over the horizon you can see a large army beginning to mobilise." + 
    "<br><br>You are now <b>low on oxygen</b>.";
    
    var chapter = "Adventure in Space - We Come in Peace, Shoot to Kill"
    
    return {story: story, chapter: chapter};
}

function getNode9(){
    var story =  "You approach the exit of the ship to the sound of an unknown voice speaking perfect English which is actually completely expected as everything in the universe speaks English." + 
    "<br><br>\"You are on our planet, should we welcome you or view you as a threat?\" says the unknown voice." + 
    "<br><br>\"Given I am clearly the gruff, military man archetype that will stop at nothing for the 'mission', yes - we are a threat,\" bellows Sheephard." + 
    "<br><br>Hearing this you jump out from the ship. \"A threat to your planet's poverty, soaring tax rates, and crippling living costs that is." + 
    "<br><br>The aliens look at each other, nod in agreement and speak \"You say words we like. We would love to have you represent us in the planet's global election that is being held tomorrow.\"" +
    "<br><br>With that they make their leave and head back into the city to spread the good news."
    
    var chapter = "Adventure in Space - You've Got a Friend in Me"
    
    return {story: story, chapter: chapter};
}

function getNode10(){
    var story =  "One of the aliens remained staring intently through your helmet. <br><br>\"You appear to be burnt quite badly,\" it mentions. <br><br>\"We could help treat that for you.\"" + 
    "<br><br>You spend a moment considering before taking it up on the offer. It would be nice to not have to feel this pain any more." + 
    "<br><br>The alien takes you in to an operating theatre in the city and lies you down on a trolley. It pushes the trolley into a small, white room with vents in the ceiling. A gas starts seeping in which swiftly puts you to sleep." + 
    "<br><br>Your <b>burn</b> has been healed.";
    
    var chapter = "Adventure in Space - Place It Under Cold Running Water for 10 Minutes";
    
    return {story: story, chapter: chapter};
}

function getNode11(){
    var story =  "Sheephard turns to you. \"I can't believe you've done this. <Insert my backstory and a followup to the mission here>. Now you'll pay.\"" + 
    "And with that very nondescript explanation, Sheephard lunges at you with a fist raised.";
    
    var chapter = "Adventure in Space - Oh No, He's a Bad Guy, What a Surprise"
    
    return {story: story, chapter: chapter};
}

function getNode12(){
    var story =  "A few days pass and, despite little in the way of campaigning, you find yourself elected as the leader of the planet. Not to let the power go to your head, you immediately dissolve parliament, overthrow the king and take your rightful place as ruler of the monarchy." + 
    "<br><br>Long live!";    
    
    var chapter = "Adventure in Space - King of Contradiction"
    
    return {story: story, chapter: chapter};
}

function getNode13(){
    var story =  "A few weeks pass and you begin to find your life on this new alien planet comfortable. You've started working as a trainee doctor in burn medicine, hoping to continue to develop the incredible work that helped you from the burn scars you feared you might be left with." + 
    "<br><br>During your burn surgery Sheephard tried to start a small, one-man, revolution that was swiftly thwarted. It would be nice to say you miss him but in truth, your life has never been better.";
    
    var chapter = "Adventure in Space - A Happy Ending for One"
    
    return {story: story, chapter: chapter};
}

function getNode14(){
    var story =  "You awake, tied to a gurney, unable to escape the shackles. A mirror is positioned in such a way that you can see part of yourself in the reflection. The burns certainly appear to be healed however there is a distinct lack of limbs on your body." + 
    "<br><br>Perhaps it wasn't best to trust an unknown, alien race with healing you...";
    
    var chapter = "Adventure in Space - I'm Sure They Don't Need These"
    
    return {story: story, chapter: chapter};
}

function getNode15(){
    var story =  "Finally the years of training in several forms of martial arts will finally pay off. You dodge the first lunge then swiftly tuck into a gut punch that leaves Sheephard winded. Whilst he attempts to recover you latch onto his arms and peel him down to the ground, holding him in place until the alien authorities arrive." + 
    "<br><br>Sheephard remains silent but looks devastated that you didn't want to join in on his attempted genocide. The aliens thank you for your help and take you with them to the city to sign you up for the election." +
    "<br><br>A few weeks pass and you begin to find your life on this new alien planet comfortable. You failed to win the election but your new recruitment into the police force is a promising start for your new life.";
    
    var chapter = "Adventure in Space - Sound of da Police"
    
    return {story: story, chapter: chapter};
}

function getNode16(){
    var story =  "Sheephard's fist strikes your straight on the helmet, doing very little damage but certainly rattling you. You attempt to center yourself ready to fight but he's already on you, punching several more times before ripping the chord to your oxygen tank. " + 
    "Oxygen bleeds out of your helmet as you struggle for breath. In your final moments all you can think about is why you couldn't have been better at card games... whatever that means.";
    
    var chapter = "Adventure in Space - A Bit Excessive"
    
    return {story: story, chapter: chapter};
}

function getNode17(){
    var story =  "Things look dire but, really there's not a lot you can do now. \"This is so sad. Alexa play Despacito,\" shouts Sheephard. As the sounds of spanish guitar ring around the ship you open a flask of tequila you had in your pocket and begin sharing it between you." + 
    "<br><br>Legend says to this day the SS Star Falcon still floats somewhere in space racking up the Luis Fonsi play count on Spotify." + 
    "<audio loop autoplay><source src='unimportant-files/important-song.mp3' type='audio/mp3' /></audio>";
    
    var chapter = "Adventure in Space - A Space Odyssey"
    
    return {story: story, chapter: chapter};
}

function getNode18(){
    var story =  "Panic sets in as you realise what you've done. The ship floats off into space and all you can do is stand and watch out the window, drifting further and further away from home." + 
    "<br><br>Some say if you look up at the sky on a clear night you can still see the shining beacon of disappointment from losing three easy card games in a row.";
    
    var chapter = "Adventure in Space - A Valiant Effort"
    
    return {story: story, chapter: chapter};
}

function getNode19(){
    var story =  "You strap yourself in as the ship slowly begins its descent to an alien planet, guided by the autopilot. Aren't you the pilot? Why are you letting a machine take your job?!" + 
    "<br><br>As the thoughts of your career being stolen away by a computer swarm your mind you decide to take action. You triumphantly switch off the autopilot and bring the ship down to the planet's surface..." +
    "<br><br>You wake up to find a dazed Sheephard looming over you. \"Next time leave it to the autopilot,\" he says commandingly. Your mouth opens to argue about the worrying rate of automation unemployment but it seems as thought he is already in his spacesuit and leaving the wreckage of the SS Star Falcon." + 
    "<br><br>You're almost finished with putting on your own spacesuit when you hear Sheephard on the comms link, \"Spiker get out here fast; looks like we have company...\"";
    
    var chapter = "Adventure in Space - A Firm Attempt at Securing Your Job"
    
    return {story: story, chapter: chapter};
}

function getNode20(){
    var story =  "You and Sheephard fight wave after wave of alien, he seems as if he's been training for this his whole life. After taking down a significant portion of the army they begin retreating. You both give chase, taking no prisoners." + 
    "<br><br>Within a week the entire planet had been taken over by the superior firepower of Sheephard and Spiker. You promote yourselves as Supreme Commander and Supreme Pilot of the planet and help to lead a very sustainable dictatorship, with no signs of being overthrown.";
    
    var chapter = "Adventure in Space - A Strong and Stable Government"
    
    return {story: story, chapter: chapter};
}

function getNode21(){
    var story =  '<iframe width="560" height="315" src="https://www.youtube.com/embed/9z2fdTqNka8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    var chapter = "Adventure in Space - Spartans Never Die"
    
    return {story: story, chapter: chapter};
}