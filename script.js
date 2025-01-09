const navOptions = document.querySelectorAll('.nav-option')
const container = document.querySelector('.container')
const arrows = document.querySelectorAll('.arrow')
const button = document.querySelector('button')
let currentBox = 0;


const bar = document.querySelector(".bar")

navOptions.forEach((e, index)=>{
    e.addEventListener('click', ()=>{
        if(index!=1){
            bar.style.display = 'none'

        }

        navOptions.forEach(e_=>{
            e_.parentElement.style.outline = 'none'
        })

        currentBox = index
        e.parentElement.style.outline = '1px solid white'
        container.style.transform =`translateY(-${(100/6)*index}%)`

    })
})

arrows.forEach( (element, index) => {
    element.addEventListener('click', ()=>{
        bar.style.display = 'none'


        currentBox = index?currentBox+1:currentBox-1

        if(currentBox === 6){
            currentBox = 0
        }else if(currentBox === -1){
            currentBox = 4
        }

        navOptions.forEach(e_=>{
            e_.parentElement.style.outline = 'none'
        })

        navOptions[currentBox].parentElement.style.outline = '1px solid white'
        container.style.transform =`translateY(-${(100/6)*currentBox}%)`
    })
});

button.addEventListener('click', ()=>{
    currentBox = 1
    navOptions[0].parentElement.style.outline = 'none'
    navOptions[currentBox].parentElement.style.outline = '1px solid white'
    container.style.transform ='translateY(calc(100%/-6))'
})


const img = document.querySelector('.story')
const RT = document.querySelector(".TRcontainer")

let num = -1

document.addEventListener('keydown', (e)=>{
    if(currentBox === 1){
        let num = parseInt(img.getAttribute('src')[img.getAttribute('src').length-5])
        if(e.code == 'ArrowLeft' && num > 1){
            img.src =  `assets/story/scene ${num-1}.png`
            bar.style.display = 'none'
            num-=1
            
        }else if(e.code == 'ArrowRight' && num < 8){
            img.src =  `assets/story/scene ${num+1}.png`
            bar.style.display = 'none'
            num+=1
        }   

        if(num ===4||num===7||num===8){
            bar.style.display = 'block'
        }

}


if(currentBox === 3){

    if(e.code == 'ArrowLeft' && num > -1){
        num-=1
        if(num === -1){
            RT.style.transform = `translateX(${33}%)`
        }else{
            RT.style.transform = `translateX(-${33*num}%)`
        }
        console.log(num)
    }else if(e.code == 'ArrowRight' && num < 1){
        num+=1
        RT.style.transform = `translateX(-${33*num}%)`
        console.log(num)

    }   
}


})


