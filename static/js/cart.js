var updateButtons = document.getElementsByClassName('update-cart')

//add an event handler looping through the clicks
for (var i = 0; i <updateButtons.length; i++) {
//create a query set 
updateButtons[i].addEventListener('click', function(){
    var productId = this.dataset.product
    var action = this.dataset.action
    console.log('Product ID:', productId, 'Action:', action)

    console.log('USER:', user)

    //Determines if the user is logged in or not
    if (user == 'AnonymousUser'){
        console.log('User is not logged in')
    }else{
        console.log('User is logged in')
    }
})
}