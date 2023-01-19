
let i = 0;
let cls = ['item1', 'item2', 'item3'];
const next = document.getElementsByClassName('next')[0];
const previous = document.getElementsByClassName('previous')[0];
const nav = document.getElementsByTagName('nav')[0];
let toggle = document.getElementsByClassName("toggle-hamburger")[0];
const anim_items = document.querySelectorAll('.anim');

function menu_show() {
  nav.classList.contains('navigation-activ') ? nav.classList.remove('navigation-activ') : nav.classList.add('navigation-activ')
}

toggle.addEventListener('click', menu_show);

function change_background(prev_change) {
  let slider = document.getElementsByClassName('header-slider')[0];
  let clsLen = cls.length - 1;
  slider.classList.remove(`${cls[i]}`)
  prev_change ? i = i < 1 ? clsLen : i - 1 : i = i >= clsLen ? 0 : i + 1;
  slider.classList.add(`${cls[i]}`)
};
setInterval(change_background, 10000);
   
if (anim_items.length > 0) {
  window.addEventListener('scroll', anim_scrool);
}
function next_click() {
  change_background(0);
}
function previous_click() {
  change_background(1);
}
previous.addEventListener('click', previous_click);
next.addEventListener('click',next_click);

function anim_scrool() {
  for (let i = 0; i < anim_items.length; i++){
    const anim_item = anim_items[i];
    const anim_items_height = anim_item.offsetHeight;
    const anim_item_offset = offset(anim_item).top;
    const anim_start = 5;
    let anim_item_point = window.innerHeight - anim_items_height / anim_start;
    if (anim_items_height > window.innerHeight) {
      anim_item_point = window.innerHeight - window.innerHeight / anim_start;
    }
    if ((scrollY > anim_item_offset - anim_item_point) && scrollY < (anim_item_offset)) {
      anim_item.classList.add('active');
    } else {
      anim_item.classList.remove('active');
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect();
    scroll_top = scrollY || document.documentElement.scrollTop;
  return { top: rect.top + scroll_top}
}

setTimeout(anim_scrool, 300);





(function() {

 




    
    toggleHandler(toggle);
 

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();