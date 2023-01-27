const get = prompt("write the color")

class TrafficLight{
    constructor(info){
        this.info=info
        this.light=document.querySelectorAll(".circle")
    }
    work(){

        if (this.info==="зеленый"){
            this.light[0].style.background="green"

        }else if (this.info==="желтый"){
            this.light[1].style.background="yellow"

        }else if (this.info==="красный"){
            this.light[2].style.background="red"

        }else{
            false
        }
    }
}

let obj =new TrafficLight(get)
obj.work()