let nob = document.getElementById('NOB');
let Nob_values = document.getElementsByName("band-value");
let value_boxes = document.querySelectorAll('.value-box');
class pHandler{
    constructor(){
        this.view_close_options();
        this.view_color_grid();
        this.getBands()
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
               this.display_Band_Box(e.target.value)
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
        let color_grid = document.createElement('div');
        color_grid.className="color-grid";
        color_grid.innerHTML='<span id="black"></span><span id="brown"></span><span id="red"></span><span id="orange"></span><span id="yellow"></span><span id="green"></span><span id="blue"></span id="violet"><span id="grey"></span><span id="white"></span><span id="gold"></span><span id="silver"></span>';
        let colors = color_grid.querySelectorAll('span');
        for(let box of value_boxes){
            box.firstElementChild.addEventListener('click',(e)=>{
                e.currentTarget.parentElement.appendChild(color_grid);
            })
        }
        for (let color of colors) {
            color.addEventListener('click',e => {
                e.currentTarget.parentElement.parentElement.style.background=`${e.currentTarget.id}`;
                e.currentTarget.parentElement.remove()
            })
        }
    }
}

myPage_handler = new pHandler();