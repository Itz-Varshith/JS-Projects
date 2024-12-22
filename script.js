const button=document.querySelector('.new-quote');
const names=document.querySelector('.name');
const quote=document.querySelector('.quote');


const array=[{name:'William Shakespeare',quote:'A rose by any other name would smell as sweet.'},{name:'John Kennedy',quote:'Ask not what your country can do for you; ask what you can do for your country.'},{name:'Woody Allen',quote:'Eighty percent of success is showing up.'},{name:'Thomas Edison',quote:'Genius is one percent inspiration and ninety-nine percent perspiration.'},{name:'Rudyard Kipling',quote:'He travels the fastest who travels alone.'},{name:'Martin Luther King',quote:'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.'},{name:'Winston Churchill',quote:'If you are going through hell, keep going.'},{name:'Charles-Guillaume Étienne',quote:'If you want something done right, do it yourself.'},{name:'Margaret Thatcher',quote:'If you want something said, ask a man; if you want something done, ask a woman.'},{name:'Albert Einstein',quote:'Life is like riding a bicycle. To keep your balance, you must keep moving.'}];
button.addEventListener('click',()=>{
    let random=Math.floor((Math.random())*(array.length))
    names.innerText='-'+array[random].name;
    quote.innerText='"'+array[random].quote+'"';
})