window.addEventListener("scroll", function() {showFunction()});
var a = 1;
var b = 1;
var c = 1;
var d = 1;
var e = 1;
var f = 1;
var g = 1;
var h = 1;
var i = 1;
var k = 1;
var l = 1;
var m = 1;
var n = 1;
var num = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 ];

function showFunction() {
    
    caller(200,1);
    caller(1200,2);
    caller(2200,3);
    caller(3200,4);
    caller(4200,5);
    caller(5200,6);
    caller(6200,7);
    caller(7200,8);
    caller(8200,9);
    caller(9200,10);
    caller(10200,11);
    caller(11200,12);
    caller(12200,13);
    caller(13200,14);
    caller(14200,15);
    caller(15200,16);
    caller(16200,17);
    caller(17200,18);
    caller(18200,19);
    caller(19200,20);
    caller(20200,21);


if(document.getElementById("main16").classList.contains("visible"))
{
    document.body.style.backgroundImage = "url('/Resources/Haikyuu.jpg')";
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
        document.getElementById(`${id}`).classList.remove("fade");
        }


        if((document.body.scrollTop > hideheight || document.documentElement.scrollTop > hideheight)){
            document.getElementById(`${id}`).classList.remove("visible");
            document.getElementById(`${id}`).classList.add("fade");
            setTimeout(()=>{
                document.getElementById(`${id}`).classList.add("hidden");
        },  2000);

        num[i] = 0;

        }
    }
}

function caller(showheight,i){
    var hideheight = showheight+500;
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