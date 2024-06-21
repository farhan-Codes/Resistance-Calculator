class pHandler{
    constructor(){
        this.view_close_options();
    }
    view_close_options(){
        let nob = document.getElementById('NOB');
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
    display_Band_Box(number_of_boxes){
        let value_boxes = document.querySelectorAll('.value-box');
        value_boxes.forEach((e)=>{e.classList.remove("hide");e.classList.add("show");})
        let hide_map = {
            '3':[2,4,5],
            '4':[4,5],
            '5':[5],
            '6':[]
        }
        try{
        hide_map[number_of_boxes].forEach((e)=>{
            value_boxes[e].classList.remove("show");
            value_boxes[e].classList.add("hide");
        })
        let visible_boxes = document.querySelectorAll(".show");
        for(let i=0;i<visible_boxes.length;i++){
            visible_boxes[i].firstElementChild.innerText=`B${i+1}`;
        }
        }catch{
            null
        }
    }
    }


class dHandler{
    constructor(page_handler_object){
        this.pg_handler = page_handler_object;
        this.getBands();
    }
    getBands(){
        let Nob_values = document.getElementsByName("band-value");
        Nob_values.forEach(element => {
            element.addEventListener("click",(e)=>{
               this.pg_handler.display_Band_Box(e.target.value)
            })
        });
    }
}

myPage_handler = new pHandler();
myData_handler = new dHandler(myPage_handler)