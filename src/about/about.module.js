import './about.css'

export function createAboutModule () {
    const container = document.querySelector("#content")

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const aboutStory = document.createElement("div");
    aboutStory.classList.add("about-story");
    aboutStory.textContent = `Since 1970, Feednotize Me has been 
    concerned with conjuring meals that has always left even the 
    finest of connoisseurs salivating with wonder.
    Want to be feednotized? Find us at the address below`

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const googleMapsContainer = document.createElement("div");
    googleMapsContainer.classList.add("map-container");
    googleMapsContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.307178142623!2d2.3381648763993153!3d48.8523525713313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671de8c556db1%3A0xf66a29512f9fa0b5!2s118%20Bd%20Saint-Germain%2C%2075006%20Paris%2C%20France!5e0!3m2!1sen!2sng!4v1724166029008!5m2!1sen!2sng" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

    const addressContainer = document.createElement("div");
    addressContainer.classList.add("address-container");

    const street = document.createElement("div");
    street.textContent = "Address: 118 Bd Saint-Germain,"

    const cityAndCountry = document.createElement("div");
    cityAndCountry.textContent = "Postcode/City/Country: 75006 Paris, France."


    const phone = document.createElement("div");
    phone.textContent = "Phone: +33 1 09 75 83 52"




    container.appendChild(aboutContainer);

    aboutContainer.append(aboutStory, contactContainer)

    contactContainer.append(googleMapsContainer, addressContainer)

    addressContainer.append(street, cityAndCountry, phone)
}