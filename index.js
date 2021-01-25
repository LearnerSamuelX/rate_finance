const menu_button = document.getElementById('menu_button');
const menu_frame = document.getElementById('menu_frame');
const close_button = document.getElementById('close_button');
const login_button = document.getElementById('login_arc');
const more_dropdown = document.getElementById('more_options');
const extra_options = document.getElementById('extra_options')
        
menu_button.addEventListener('click',()=>{
    //menu button sliding effect
    if(menu_button.style.transform===""||menu_button.style.transform==="rotate(0deg)"){
        menu_button.style.transform="rotate(90deg)";
        menu_button.style.marginLeft="30.5%";
        menu_frame.style.marginLeft="0";
    }else{
        menu_button.style.transform="rotate(0deg)";
        menu_button.style.marginLeft="0.5%";
        menu_frame.style.marginLeft="-30%";
    }
})

//top left, close menu button
close_button.addEventListener('click',()=>{
    menu_button.style.transform="rotate(0deg)";
    menu_button.style.marginLeft="0.5%";
    menu_frame.style.marginLeft="-30%";
})

//top right, corner login button click
login_button.addEventListener('click',()=>{
    menu_button.style.transform="rotate(90deg)";
    menu_button.style.marginLeft="30.5%";
    menu_frame.style.marginLeft="0";
})

more_dropdown.addEventListener('click',()=>{
    console.log('Dropdown button clicked.');
    if(extra_options.style.height==='0px'){
        extra_options.style.height='150px';
        extra_options.style.color='black';
        console.log(extra_options.clientHeight)
    }else{
        extra_options.style.height='0px';
        extra_options.style.color='white';
        console.log(extra_options.clientHeight)
        
    }
    
})