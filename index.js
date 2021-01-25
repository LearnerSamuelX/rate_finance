const menu_button = document.getElementById('menu_button');
const menu_frame = document.getElementById('menu_frame');
const close_button = document.getElementById('close_button');
const login_button = document.getElementById('login_arc');

var sidebar_option = document.getElementById('sidebar_option');
var extra_options = document.getElementById('extra_options')
var more_options = document.getElementById('more_options');
var height = sidebar_option.clientHeight;

//menu button sliding effect
// menu_button.addEventListener('click',()=>{
//     if(menu_button.style.transform===""||menu_button.style.transform==="rotate(0deg)"){
//         menu_button.style.transform="rotate(90deg)";
//         menu_button.style.marginLeft="30.5%";
//         menu_frame.style.marginLeft="0";
//     }else{
//         menu_button.style.transform="rotate(0deg)";
//         menu_button.style.marginLeft="0.5%";
//         menu_frame.style.marginLeft="-30%";
//     }
// })

//orientation change
window.addEventListener('orientationchange',()=>{
    height = sidebar_option.clientHeight;
})

//top left, close menu button
close_button.addEventListener('click',()=>{
    menu_button.style.transform="rotate(0deg)";
    menu_button.style.marginLeft="0.5%";
    menu_frame.style.marginLeft="-100%";

    extra_options.style.height='0px';
    extra_options.style.color='white';
    more_options.textContent='More';
})

//top right, corner login button click
login_button.addEventListener('click',()=>{
    menu_button.style.transform="rotate(90deg)";
    menu_button.style.marginLeft="30.5%";
    menu_frame.style.marginLeft="0";
})

//dropDown feature in the menu bar
more_options.addEventListener('click',()=>{
    console.log('Dropdown button clicked.');
    var str_height = height*3+'px'
    console.log(str_height);

    if(extra_options.style.height==='0px'){
        extra_options.style.height=str_height;
        extra_options.style.color='black';
        more_options.textContent='Less';
    }else{
        extra_options.style.height='0px';
        extra_options.style.color='white';
        more_options.textContent='More';
    }
})