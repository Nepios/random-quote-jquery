var adventurequotes = ['Mathematical!', 'Whoa! Algebraic!', 
	'Candy People explode when they get scared?', 
	'Do you think I have the goods, Bubblegum? Because I am into this stuff!', 
	'Eat my sword, Ice King!', 
	"Nuts, I'm freakin' all about sugar... \nbut I'm even more all about feeding hobos!", 
	'BMO, this game is the worst!', 
	'Sucking at something is the first step to being sorta good at something.',
	'When bad things happen, I know you want to believe they are a joke, but sometimes life is scary and dark. That is why we must find the light', 
	'Who wants to play video games?',
	'If I push this button, you will both be dangerously transported into my main brain game frame, where it is very dangerous.', 
	"Use the combo move, Finn! The combo move!", 
	'BMO is camera!', 'Yes, Finn. It goes in my butt.',
	"My alarm says it's time for Finn's bath. Finn, get naked.",
	"No, I do not play such games... with Jake.",
	"BMO Chop! If this were a real attack, you'd be dead.",
	"My face! Finn! Jake! Kiss my face!", 
	"See? The ocean isn't so bad, man. ",
	"Yeah, it's pretty math, you psychopath. ",
	"Tree Trunks, I got jacked up because of you! Look at my jacked-up face! ",
	"I've got that on my back. I call it 'my butt'.",
	"Well, that's it. I'm all out of ideas of how to learn this junk. ",
	"OH! Let's just solve this thing with magic!"  ];


$(document).ready(function() {
	var random= function(){
	return Math.floor(Math.random() * adventurequotes.length);
	};
	$('button').on('click', function(e){
		e.preventDefault();
		console.log("click worked");
		var quote = adventurequotes[random()];
		$('p').html(quote);	
	})

});
