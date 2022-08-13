//responsive menu button
const btnMenu =document.querySelector('.trigger'), menuclass=document.querySelector('nav');
btnMenu.addEventListener('click', function(){
	menuclass.classList.toggle('showmenu')
})

//light switch

const btnLight = document.querySelector('.t-light'), addclass = document.querySelector('.site');
btnLight.addEventListener('click',function() {
	addclass.classList.toggle('turnon')
})

//slider
const swiper = new Swiper('.swiper', {
	slidesPerView: 1,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
		clickable:true,
  },
	breakpoints: {
		641: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
});

//login/registration
const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
	let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
	
	pwFields.forEach(password => {
			if(password.type === "password"){
					password.type = "text";
					eyeIcon.classList.replace("bx-hide", "bx-show");
					return;
			}
			password.type = "password";
			eyeIcon.classList.replace("bx-show", "bx-hide");
	})
	
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})

//cart
