
var spiders = [];


var sampler = new Tone.Sampler("./audio/write_again.mp3", function(){
	sampler.triggerAttack(0);
	sampler.loop = true;
	console.log(sampler.player.playbackRate);
}).toMaster();

var main = document.getElementById('main');
var container = document.createElement('div');
container.className = 'container';
main.appendChild(container);

for (i = 0; i < 9; i++) {
	spiders.push(new Spider(container, sampler));
}




