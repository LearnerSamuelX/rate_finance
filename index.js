const menu_button = document.getElementById('menu_button');
const menu_frame = document.getElementById('menu_frame');
const close_button = document.getElementById('close_button');
const login_button = document.getElementById('login_arc');

var sidebar_option = document.getElementById('sidebar_option');
var extra_options = document.getElementById('extra_options')
var more_options = document.getElementById('more_options');

var height = sidebar_option.clientHeight;
var counter = 0 //unclicked
var slided = 0 //not showing


menu_button.addEventListener('click',()=>{
    if(counter===1){
        slided = 1
        menu_button.style.transform="rotate(90deg)";
        menu_button.style.marginLeft="30.5%";
        menu_frame.style.marginLeft="0";
    }else{
        alert('Please click on the Login button first.')
    }
})

//top left, close menu button
close_button.addEventListener('click',()=>{
    let timer = 0;
    login_button.textContent='Login'
    counter=0

    if(extra_options.style.height!=='0px'){
        extra_options.style.height ='0px'
        extra_options.style.color='white'
        timer = 400
    }

    setTimeout(()=>{
        menu_button.style.transform="rotate(0deg)";
        menu_button.style.marginLeft="0.5%";
        menu_frame.style.marginLeft="-100%";

        extra_options.style.height='0px';
        extra_options.style.color='white';
        more_options.textContent='More';
    
    },timer)

    setTimeout(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    },750)
})

//top right, corner login button click
login_button.addEventListener('click',()=>{
    if(counter===0 || slided===1){
        counter=1 //logged in
        login_button.textContent='Loggedin'
    }else{
        login_button.textContent='Login'
        counter=0 //logged out
    }
    console.log(counter)

    // menu_button.style.transform="rotate(90deg)";
    // menu_button.style.marginLeft="30.5%";
    // menu_frame.style.marginLeft="0";
    const entire_doc_height = document.body.scrollHeight
    window.scrollTo(0,entire_doc_height);
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