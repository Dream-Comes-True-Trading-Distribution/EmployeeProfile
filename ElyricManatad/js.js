//Show and Hide navigation
const image_container = document.querySelector('.image_container')
image_container.addEventListener('click', () => {
    const icons_container = document.querySelector('.icons_container')
    const clicked_menu = document.querySelector('.clicked_menu')
    const clicked_menu_container = document.querySelector('.clicked_menu_container')
    const main_master_container = document.querySelector('.main_master_container')
    const footer = document.querySelector('.footer')


    image_container.classList.contains('active') ? image_container.classList.remove('active') : image_container.classList.add('active')
    icons_container.classList.contains('active') ? icons_container.classList.remove('active') : icons_container.classList.add('active')
    clicked_menu.classList.contains('active') ? clicked_menu.classList.remove('active') : clicked_menu.classList.add('active')
    clicked_menu_container.classList.contains('active') ? clicked_menu_container.classList.remove('active') : clicked_menu_container.classList.add('active')
    main_master_container.classList.contains('active') ? main_master_container.classList.remove('active') : main_master_container.classList.add('active')

    //hiding footer
    footer.classList.contains('active') ? footer.classList.remove('active') : footer.classList.add('active')
})

const title1 = document.querySelector('.title1')
const title2 = document.querySelector('.title2')

let text_count = 0;

setInterval(() => {
    text_count++
    if (text_count === 1) {
        title2.classList.add('active')
        title1.classList.remove('active')
    }
    if (text_count === 2) {
        text_count = 0

        title1.classList.add('active')
        title2.classList.remove('active')
    }
}, 4000)


// PERSONAL DETAILS
const fullName = "ELYRIC A. MANATAD";
const firstTitle = "Software&nbsp;Developer&nbsp;";
const secondTitle = "at&nbsp;Sun&nbsp;Asterisk&nbsp;PH";
const birthdate = "May 15, 1996";
const country = "Philippines";
const address = "Looc, Mandaue City";
const email = "elyricmanatad@gmail.com";
const phoneNumber = "09912046696";
const relationshipStatus = "Taken";
const gender = "Male";
const short_message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ut iure non nesciunt quae, architecto hic totam excepturi, corrupti eius ab esse dicta unde? Aut quaerat suscipit adipisci ex nobis omnis minus voluptatum laborum ullam? Possimus provident iste soluta ullam numquam ad autem, repudiandae, magni, ipsa qui dolorum assumenda cumque."
const biography_parag = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eum nulla quae quam quibusdam optio aliquid, quas, quod, consequuntur nobis saepe iste voluptates dolores. Aspernatur optio eligendi est similique saepe unde neque, molestiae expedita voluptatibus sapiente repudiandae aliquid nobis facere deleniti necessitatibus. Quasi, officiis officia. Quo dolorum ipsam sapiente temporibus."

// Function to update the HTML content with the JavaScript variables
function updateContent() {
    document.getElementById("fullName").innerHTML = fullName;
    document.getElementById("firstTitle").innerHTML = firstTitle;
    document.getElementById("secondTitle").innerHTML = secondTitle;
    document.getElementById("birthdate").innerHTML = birthdate;
    document.getElementById("age").innerHTML = calculateAge(birthdate);
    document.getElementById("country").innerHTML = country;
    document.getElementById("address").innerHTML = address;
    document.getElementById("email").innerHTML = email;
    document.getElementById("phoneNumber").innerHTML = phoneNumber;
    document.getElementById("relationshipStatus").innerHTML = relationshipStatus;
    document.getElementById("gender").innerHTML = gender;
    document.getElementById("short_message").innerHTML = short_message;
    document.getElementById("biography_parag").innerHTML = biography_parag;

    // Function to calculate age based on birthdate
function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
    }
    return age;
    }
}
    // Call the function to update the content
    updateContent();


    const tiktokContainer = document.querySelector('.header_tiktok');
    const facebookContainer = document.querySelector('.header_facebook');
    const youtubeContainer = document.querySelector('.header_youtube');
    
    tiktokContainer.addEventListener('click', () => {
      window.open('https://www.tiktok.com/@elyricm', '_blank');
    });
    
    facebookContainer.addEventListener('click', () => {
      window.open('https://www.facebook.com/elyric10', '_blank');
    });
    
    youtubeContainer.addEventListener('click', () => {
      window.open('https://www.youtube.com/@es28gaming54', '_blank');
    });
    