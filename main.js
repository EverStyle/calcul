document.addEventListener('DOMContentLoaded',function(){
    const height_elem = document.getElementById('height_input')
    const btn_elem=document.getElementById('btn')
const weight_elem=document.getElementById('weight_input')
    btn_elem.addEventListener('click',function(){
        let h= +height_elem.value
        console.log(h)
        let w= +weight_elem.value
        console.log(w)
        let res = w/Math.pow(h,2)
        console.log(res)
        document.querySelector('#output').value = res
    })
})


window.addEventListener('load',function(){
    if('serviceWorker'in navigator){
        navigator.serviceWorker.register('sw.js')
        .then(reg=>{
            console.log('SW reg',reg)
        })
        .catch(error =>{
            console.log('SW failed',error)
        })
    }
})

