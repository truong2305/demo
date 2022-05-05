

const addCart =  (event) => {
    const id = event.target.getAttribute("data");
    const  newData = data.find(item => item.id === id)
    const newItem = {
        id : newData.id,
        name : newData.ten,
        number : 1
    }
    let index = arrCart.findIndex(item => item.id === id)
    if(index > -1) {
        arrCart[index].number++
    }
    else arrCart.unshift(newItem)
    let el = ""
    if(arrCart.length > 0) {
        
        for(var i =0; i< arrCart.length; i++) {
            el += '<div><b>'+ arrCart[i].name + '</b>'
            +'<div>Số lượng :'+ arrCart[i].number +'</div>' 
            +'<hr>'
        }
    }
    checkCart(el)
}