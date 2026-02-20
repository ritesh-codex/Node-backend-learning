const fs = require('fs');

//blocking, sync way

//const textin = fs.readFileSync('./txt/input.txt', 'utf-8');
//console.log(textin);

//const textout = `This is what we know about the avocado: ${textin}.\n Created on ${Date.now()}`;
//fs.writeFileSync('./txt/output.txt', textout);

//console.log('File Written!!!');

//non-blocking, async way

fs.readFile('./txt/start.txt','utf-8',(err, data1)=>{ 
	console.log('File to read: ',data1); // 2nd

	fs.readFile(`./txt/${data1.trim()}.txt`,'utf-8',(err, data2)=>{
		console.log(data2); //3rd

		fs.readFile(`./txt/append.txt`,'utf-8',(err, data3)=>{
            console.log(data3); //4th

            fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', err => {
            	console.log('Your File has been written!!');
            });
       	});
	});
});

console.log('will read file!!'); //1st to execute