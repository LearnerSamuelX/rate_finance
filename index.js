const menu_button = document.getElementById('menu_button');
const menu_frame = document.getElementById('menu_frame');
const close_button = document.getElementById('close_button');
const login_button = document.getElementById('login_arc');
const more_dropdown = document.getElementById('more_options');
const sidebar_option = document.getElementById('sidebar_option')

const extra_options = document.getElementById('extra_options')
const more_options = document.getElementById('more_options');


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
more_dropdown.addEventListener('click',()=>{
    console.log('Dropdown button clicked.');

    const height = sidebar_option.clientHeight;
    const str_height = height*3+'px'
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