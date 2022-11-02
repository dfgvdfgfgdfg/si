timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;
function preload(){
    
}
quick_draw_data_set=['cactus','plane','cat','dog','plane','cow','car','football','ice-cream','balloon','fish','tree'];

random_no=Math.floor((Math.random()*quick_draw_data_set.length));
Element_of_array=quick_draw_data_set[random_no];
console.log(Element_of_array);
if(Element_of_array ==undefined){
    Element_of_array=quick_draw_data_set[random_no];
}
else{
    document.getElementById("p3").innerHTML="Sketch To Be Drawn->"+Element_of_array;
};
function setup(){
    canvas=createCanvas(280,240);
    background("pink"); 
}
function draw(){
    check_sketch();
    if(drawn_sketch == Element_of_array){
        answer_holder = "set";
        score = score+1;
        document.getElementById("score").innerHTML = "Score: "+score;
    }
}

function check_sketch(){
    timer_counter++;
    document.getElementById("timer").innerHTML = "Timer: "+timer_counter;
    if(timer_counter>400){
        timer_counter = 0;
        timer_check = "completed";
        updateCanvas();
    }
    if(timer_check == "completed" || answer_holder == "set"){
        timer_check = "";
        answer_holder = "";
        
    }
}
    






function updateCanvas(){
    document.getElementById("p3").innerHTML="Sketch To Be Drawn->"+Element_of_array;
    c=color( random(255), random(255), random(255) );
    background(c);
    random_no=Math.floor((Math.random()*quick_draw_data_set.length));
Element_of_array=quick_draw_data_set[random_no];
document.getElementById("p3").innerHTML="Sketch To Be Drawn->"+Element_of_array;
}

