// JavaScript Document
function bark(name, weight){
	if(weight > 20)
		console.log(name + " says WOOF WOOF");
	else
		console.log(name + " says woof woof");
}
var name="rover";
var weight=23;

var name="mickey";
var weight=19;

var name="spike";
var weight=30;

var name="lady";
var weight=15;
bark("rover", 23);
bark("mickey", 19);
bark("spike", 30);
bark("lady", 15);


//2
function whatShallWear(temp){
	if(temp<60)
		console.log("wear a jacket");
	else if(temp < 70)
		console.log("wear a sweater");
	else
		console.log("wear t-shirt");
}
whatShallWear(50);
whatShallWear(60);
whatShallWear(80);

//3
var student="krissy";
var status="existinguser";
var year="1991";

//saveMyProfile(student, year, 381/100, status == "newuser");


//4
function makeTea(cups, tea){
	console.log("Bewing" + cups + " cups of" + tea);
}
makeTea(3);

//5
var r=5.2;
function calculateArea(r){
	var area;
	if(r<0){
		return 0;
	}
	else{
		area= Math.PI * r *r;
		return area;
	}
}
var theArea=calculateArea(r)
console.log("The area is: " + theArea);

//6
var number=6;
function nhan(x){
	var ketqua= number/x;
	return ketqua;
}
var biendem=nhan(3);
console.log(biendem);

//7
function clunk(times){
	var num=times;
	while(num>0){
		display("clunk");
		num=num-1;
	}
}

function thingamajig(size){
	var facky=1; 
	clunkCouter = 0;
	if(size==0){
		display("dark");
	}
	else if(size == 1){
		display("thunk");
		}
	else{
		while (size > 1){
			facky= facky * size;
			size= size -1; 
		}
		clunk(facky);
	}
}

function display(output){
	console.log(output);
	clunkCounter=clunkCounter + 1;
}
var clunkCounter=0;
thingamajig(5);
console.log(clunkCounter);




















