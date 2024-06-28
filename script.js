let nob = document.getElementById('NOB');
let Nob_values = document.getElementsByName("band-value");
let value_boxes = document.querySelectorAll('.value-box');
let number_of_bands = 3;
class pHandler{
    constructor(){
        this.view_close_options();
        this.getBands()
        this.view_color_grid();
    }

    view_close_options(){
        let bdr = nob.lastElementChild;
        let click_state=false;
        nob.addEventListener('click',()=>{
            if (!click_state) {
                nob.firstElementChild.style.transform="rotate(-180deg)";
                bdr.style.height="60px";
                bdr.style.opacity="1";
                click_state=true;
            }
            else{
                nob.firstElementChild.style.transform="rotate(0deg)";
                bdr.style.height="0px";
                bdr.style.opacity="0";    
                click_state=false;
            }
        })
    }

    getBands(){
        Nob_values.forEach(element => {
            element.addEventListener("click",(e)=>{
               number_of_bands = e.target.value;
               this.display_Band_Box(number_of_bands);
            })
        });
    }

    display_Band_Box(number_of_boxes){
        value_boxes.forEach((e)=>{
            e.classList.remove("hide");
            e.classList.add("show");
            e.style.background='transparent';
        })
        let hide_map = {
            '3':[2,4,5],
            '4':[4,5],
            '5':[5],
            '6':[]
        }
        hide_map[number_of_boxes].forEach((e)=>{
            value_boxes[e].classList.remove("show");
            value_boxes[e].classList.add("hide");
        })
        let visible_boxes = document.querySelectorAll(".show");
        for(let i=0;i<visible_boxes.length;i++){
            visible_boxes[i].firstElementChild.innerText=`B${i+1}`;
        }
    }

    view_color_grid(){
        let filled_boxes = 0;
        let color_grid = document.createElement('div');
        color_grid.className="color-grid";
        color_grid.innerHTML='<span id="black"></span><span id="brown"></span><span id="red"></span><span id="orange"></span><span id="yellow"></span><span id="green"></span><span id="blue"></span><span id="violet"></span><span id="grey"></span><span id="white"></span><span id="gold"></span><span id="silver"></span>';
        let colors = color_grid.querySelectorAll('span');
        for(let box of value_boxes){
            box.firstElementChild.addEventListener('click',(e)=>{
                e.currentTarget.parentElement.appendChild(color_grid);
            })
        }
        for (let color of colors) {
            color.addEventListener('click',e => {
                let shown_boxes = document.querySelectorAll(".show");
                e.currentTarget.parentElement.parentElement.style.background=`${e.currentTarget.id}`;
                e.currentTarget.parentElement.remove();
                filled_boxes++;
                if(filled_boxes==shown_boxes.length){
                    filled_boxes--;
                    this.Calculator(number_of_bands);
                }
            })
        }
    }
    Calculator(Bands){
        let d1 = document.getElementById("Digit1").style.background;
        let d2 = document.getElementById("Digit2").style.background;
        let d3 = document.getElementById("Digit3").style.background;
        let m = document.getElementById("Multiplier").style.background;
        let tol = document.getElementById("Tolerance").style.background;
        let temp = document.getElementById("Temparture").style.background;
        let Resistance = 0;
        let Tolerance = 0;
        let Temparture = 0;
        let Values = {
            "black":[0,0,0,1,'',250],
            "brown":[1,1,1,10,10,100],
            "red":[2,2,2,100,2,50],
            "orange":[3,3,3,1000,'',15],
            "yellow":[4,4,4,10000,'',25],
            "green":[5,5,5,100000,0.5,20],
            "blue":[6,6,6,1000000,0.25,10],
            "violet":[7,7,7,'',0.1,5],
            "Grey":[8,8,8,'','',1],
            "white":[9,9,9,'','',''],
            "gold":['','','',0.1,5,''],
            "silver":['','','',0.01,10,'']
        }
        switch (Bands) {
            case 3:
                Resistance=(((Values[d1][0]*10)+Values[d2][1])*Values[m][3]);
                console.log(Resistance);
                break;
        
            default:
                break;
        }
    }
}

myPage_handler = new pHandler();