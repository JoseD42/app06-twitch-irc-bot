import tmi from 'tmi.js';

const opts = {
    identity: {
        username: 'jdfnx42',
        password: 'oauth:xebpi5y73u4z8bh3jhnx3q30ztfkgl'
    },
    channels: [
        'jdfnx42'

    ]
}

const client = new tmi.client(opts);


client.on('connected', (adress, port)=>{
    client.say(opts.channels[0, 'Wassap Guys']);
    console.log(`Bot listening at: ${adress}:${port}`)
})

client.on('message', (target, ctx, msg, self)=>{
	if (msg === 'ping'){
		client.say(target, 'pong');	
	}	
});

client.connect();