const music = new Audio("./Resources/bgsong.mp3");
music.play();

document.body.style.overflow= "hidden";
document.getElementById("main0").style.opacity = "0";
setTimeout(()=>{
    document.body.style.overflow= "visible";
    document.getElementById("main0").style.opacity = "1";
    document.getElementById("main0").classList.add("view");
    music.volume = 0.1;

    let vi = new Audio('/Resources/hbd.mp3');
    vi.play();
},1000);

window.addEventListener("scroll", function() {showFunction()});

var num = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 ];

var audio = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 ];

function showFunction() {
    // if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
    // {
    //     document.getElementById("main1").classList.remove("hidden");
    //     document.getElementById("main1").classList.add("visible");   
    // }



    caller(1);
    caller(2);
    caller(3);
    caller(4);
    caller(5);
    caller(6);
    caller(7);
    caller(8);
    caller(9);
    caller(10);
    caller(11);
    caller(12);
    caller(13);
    caller(14);
    caller(15);
    caller(16);
    caller(17);
    caller(18);
    caller(19);
    caller(20);
    caller(21);
    caller(22);
    caller(23);
    caller(24);
    caller(25);
    caller(26);
    caller(27);
    caller(28);
    caller(29);
    caller(30);


if(document.getElementById("main16").classList.contains("visible"))
{
    document.body.style.backgroundImage = "url('./Resources/Haikyuu.jpg')";
}

if(document.getElementById("main18").classList.contains("visible"))
{
    document.body.style.backgroundImage = "url('./Resources/bgpic3.jpg')";
}

if(document.getElementById("main20").classList.contains("visible"))
{
    document.body.style.backgroundImage = "url('./Resources/bgpic5.jpg')";
}

if(document.getElementById("main17").classList.contains("visible"))
{
    if(audio[1]==1)
    {
    let vi = new Audio('./Resources/vishesh.aac');
    vi.play();
    audio[1]=0
    }
}

if(document.getElementById("main18").classList.contains("visible"))
{
    if(audio[2]==1)
    {
    let vi = new Audio('./Resources/wael.mp3');
    vi.play();
    audio[2]=0
    }
}

if(document.getElementById("main19").classList.contains("visible"))
{
    if(audio[3]==1)
    {
    let vi = new Audio('./Resources/anjali.ogg');
    vi.play();
    audio[3]=0
    }
}

if(document.getElementById("main20").classList.contains("visible"))
{
    if(audio[4]==1)
    {
    let vi = new Audio('./Resources/ananya.mp3');
    vi.play();
    audio[4]=0
    }
}

if(document.getElementById("main21").classList.contains("visible"))
{
    if(audio[5]==1)
    {
    let vi = new Audio('./Resources/atharva.ogg');
    vi.play();
    audio[5]=0
    }
}

if(document.getElementById("main22").classList.contains("visible"))
{
    if(audio[6]==1)
    {
    let vi = new Audio('./Resources/vipul.ogg');
    vi.play();
    audio[6]=0
    }
}

if(document.getElementById("main23").classList.contains("visible"))
{
    if(audio[7]==1)
    {
    let vi = new Audio('./Resources/aryan.mp3');
    vi.play();
    audio[7]=0
    }
}

if(document.getElementById("main24").classList.contains("visible"))
{
    if(audio[8]==1)
    {
    let vi = new Audio('./Resources/Aman.ogg');
    vi.play();
    audio[8]=0
    }
}

if(document.getElementById("main25").classList.contains("visible"))
{
    if(audio[9]==1)
    {
    let vi = new Audio('./Resources/arsh.aac');
    vi.play();
    audio[9]=0
    }
}

if(document.getElementById("main26").classList.contains("visible"))
{
    if(audio[10]==1)
    {
    let vi = new Audio('./Resources/sumit.mpeg');
    vi.play();
    music.volume = 0.05;
    setTimeout(()=>{music.volume = 0.1;},30000)
    audio[10]=0
    }
}

if(document.getElementById("main27").classList.contains("visible"))
{
    if(audio[11]==1)
    {
    let vi = new Audio('./Resources/priya.ogg');
    vi.play();
    audio[11]=0
    }
}

if(document.getElementById("main28").classList.contains("visible"))
{
    if(audio[12]==1)
    {
    let vi = new Audio('./Resources/harsh.ogg');
    vi.play();
    audio[12]=0
    }
}

if(document.getElementById("main29").classList.contains("visible"))
{
    if(audio[13]==1)
    {
    let vi = new Audio('./Resources/mehak.mpeg');
    vi.play();
    audio[13]=0
    }
}

if(document.getElementById("main30").classList.contains("visible"))
{
    if(audio[14]==1)
    {
    let vi = new Audio('./Resources/morty.ogg');
    vi.play();
    audio[14]=0
    }
}


    // if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    //     if(a==1){
    //     document.getElementById("main").classList.add("visible");
    //     document.getElementById("main").classList.remove("hidden");
    //     document.getElementById("main").classList.remove("fade");
    //     }


    //     if((document.body.scrollTop > 700 || document.documentElement.scrollTop > 700)){
    //         document.getElementById("main").classList.remove("visible");
    //         document.getElementById("main").classList.add("fade");
    //         setTimeout(()=>{
    //             document.getElementById("main").classList.add("hidden")
    //     },  3000);

    //     }
    //     a=0;
    // }
    
    // if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    //     if(b==1){
    //     document.getElementById("main2").classList.add("visible");
    //     document.getElementById("main2").classList.remove("hidden");
    //     document.getElementById("main2").classList.remove("fade");
    //     }


    //     if((document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700)){
    //         document.getElementById("main2").classList.remove("visible");
    //         document.getElementById("main2").classList.add("fade");
    //         setTimeout(()=>{
    //             document.getElementById("main2").classList.add("hidden")
    //     },  3000);

    //     }
    //     b=0;
    // }

    // if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
    //     if(c==1){
    //     document.getElementById("main3").classList.add("visible");
    //     document.getElementById("main3").classList.remove("hidden");
    //     document.getElementById("main3").classList.remove("fade");
    //     }


    //     if((document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700)){
    //         document.getElementById("main3").classList.remove("visible");
    //         document.getElementById("main3").classList.add("fade");
    //         setTimeout(()=>{
    //             document.getElementById("main3").classList.add("hidden")
    //     },  3000);

    //     }
    //     c=0;
    // }
    
    

}




function showNhide(showheight,hideheight,id,i){

    if (document.body.scrollTop > showheight || document.documentElement.scrollTop > showheight) {
        if(num[i]==1){
        document.getElementById(`${id}`).classList.add("visible");
        document.getElementById(`${id}`).classList.remove("hidden");
        }


        // if((document.body.scrollTop > hideheight || document.documentElement.scrollTop > hideheight)){
        //     document.getElementById(`${id}`).classList.remove("visible");
        //     document.getElementById(`${id}`).classList.add("fade");
        //     setTimeout(()=>{
        //         document.getElementById(`${id}`).classList.add("hidden");
        // },  2000);

        // num[i] = 0;

        // }
    }
}

function caller(i){
    var n = 500
    var showheight = 200+(i-1)*2*n
    var hideheight = showheight+n;
    if((document.body.scrollTop > showheight || document.documentElement.scrollTop > showheight))
    {
        showNhide(showheight,hideheight,`main${i}`,i);
    }
}




    //if((document.body.scrollTop > 200 || document.documentElement.scrollTop > 200))
    // {
    //     showNhide(200,700,"main",0);
    // }

    // if((document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200))
    // {
    //     showNhide(1200,1700,"main2",1);
    // }

    // if((document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200))
    // {
    //     showNhide(2200,2700,"main3",2);
    // }
    // }
    
    


