/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


 /** Start Helper Functions
 **/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
/**
 * Define Global Variables
 * 
*/
const unorderedList = document.querySelector('#navbar__list');
const bigSection = document.getElementsByTagName('section');
const sections = [...bigSection]; //OR ==> const sections = Array.from(bigSection);
/**
 * End Global Variables**/

// build the nav
const fragment = document.createDocumentFragment();

    for(let i=0; i<sections.length; i++){
        liName = sections[i].dataset.nav;
        link = document.createElement('li');
        link.innerHTML = `<a class= 'menu__link' href= 'section${i+1}' id='Section${i+1}' data-li= 'section${i+1}'>${liName}</a>`;
        
        fragment.appendChild(link);
    }
 // Build menu   
unorderedList.appendChild(fragment);


//OR (Modification that gives the same result)

/** for(let i=0; i<sections.length; i++){
==> idName = sections[i].getAttribute('id');
    liName = sections[i].dataset.nav;
    link = document.createElement('li');
==> link.innerHTML = `<a class= 'menu__link' href= '${idName}' data-li= '${idName}'>${liName}</a>`;
        
    fragment.appendChild(link);
    }
**/
                    

// Add class 'active' to section when near top of viewport
window.addEventListener('load', ()=>{
    document.getElementById(`Section1`).classList.add('your-active-class');
})


window.addEventListener('scroll', ()=>{
    for(let i=0; i<sections.length; i++){
        let position = sections[i].getBoundingClientRect();

        if (position.top >= -320 && position.top <= 240){
            sections[i].classList.add('your-active-class');
            document.getElementById(`Section${i+1}`).classList.add('your-active-class');


        }else if (position.top > 240){
            
            if(i === 0){
                sections[i].classList === 'your-active-class';
                document.getElementById(`Section${i+1}`).classList.add('your-active-class');
            
            }else if(i != 0){
                sections[i].classList.remove('your-active-class');
                document.getElementById(`Section${i+1}`).classList.remove('your-active-class');
            }

            
        }else if (position.top < -320 /**|| position.top > 240**/){
            sections[i].classList.remove('your-active-class');
            document.getElementById(`Section${i+1}`).classList.remove('your-active-class');
        }
    }
})
     
        
//OR (Modification that gives the same result)

/** 
    function activeClass(){
    The above code could be written in this function then called
    }
//Set sections as active
    activeClass();
**/


// Scroll to anchor ID using scrollTO event
unorderedList.addEventListener('click',(event)=>{
    event.preventDefault();
// Scroll to section on link click
    document.getElementById(`${event.target.dataset.li}`).scrollIntoView({behavior:'smooth'});
})

/**
 * End Main Functions
 * Begin Events
 * 
*/



