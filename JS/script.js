const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

document.addEventListener("DOMContentLoaded", function(){
	const whatsappButton = document.getElementById("whatsapp-button");
	

	whatsappButton.addEventListener("click", function(){
		const whatsappUrl = "https://api.whatsapp.com/send?phone=6283164591813&text=Tautan%3A%0Ahttps%3A%2F%2Ffb.me%2F4Me26FAfF%0A%0AHalo%21+Saya+tertarik+ingin+mendapatkan+herbal+ini+bisakah+saya+mendapatkan+ini%3F&source_url=https%3A%2F%2Ffb.me%2F4Me26FAfF&icebreaker=Halo%21+Bisakah+saya+mendapatkan+info+selengkapnya+tentang+ini%3F&app=facebook&entry_point=post_cta&jid=6283164591813%40s.whatsapp.net&lid=82957863780556%40lid&show_ad_attribution=1&source=FB_Post&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3NTg3NjM2OTMsInBob25lIjoiNjI4MzE2NDU5MTgxMyIsInRleHQiOiJUYXV0YW46XG5odHRwczpcL1wvZmIubWVcLzRNZTI2RkFmRlxuXG5IYWxvISBCaXNha2FoIHNheWEgbWVuZGFwYXRrYW4gaW5mbyBzZWxlbmdrYXBueWEgdGVudGFuZyBpbmk_Iiwic291cmNlX3VybCI6Imh0dHBzOlwvXC9mYi5tZVwvNE1lMjZGQWZGIiwiaWNlYnJlYWtlciI6IkhhbG8hIEJpc2FrYWggc2F5YSBtZW5kYXBhdGthbiBpbmZvIHNlbGVuZ2thcG55YSB0ZW50YW5nIGluaT8iLCJhcHAiOiJmYWNlYm9vayIsImVudHJ5X3BvaW50IjoicG9zdF9jdGEiLCJqaWQiOiI2MjgzMTY0NTkxODEzXHUwMDQwcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI4Mjk1Nzg2Mzc4MDU1Nlx1MDA0MGxpZCIsInNob3dfYWRfYXR0cmlidXRpb24iOjEsInNvdXJjZSI6IkZCX1Bvc3QiLCJzb3VyY2VfaWQiOiIxNjY0ODg1NTUxMTE1NTk0IiwiY29udGV4dCI6IkFmZmdwMTNpUG1UV19IYnFlWE1fMkdJWXlfQ3d5R2Jua2ZteFFoRjFZeVJhTmxhWFJjRmpFbVp4WDR0WnlrT2FjeGYwUlVkczBTWmxkaTBQcUQwV1Mtd1hIVFR0OW5Gd2lUOUY4Ukh2R1dUaHNndWY3RDdjSmxfYmFpdE9laTNZU2F3NlZEQ3BWRHBtZ1piaEl3S2J2amtZeGNVa1E2Ymx2NGhUZEt2TV9mYXQ0aFFwNHRRc3ZzY3BIbE91THMyQ25XeW1iSnRlSFh4U2E5bkNIbG5rU2RkdGFsbk14VXU1TUw2dkxVT3hsSUd3c2pDaGdqQnRIam5iQlJtQmhXd1FNQWhNZGNnUEdxNk5uMGVvUVNqanFzRzZMcHA4Q2dsWl82UGNGQ0ZORWZvY0J2X3llTlFPSTdSUjc5UHBmanZFNFhqcXc5akMyTkRYUldSN00zQXFyWkV6YV9fbU5nQ2VaTTlLcjdZcHZZQ2p3WVRKbHdTU2ZJMzZIRUFXMFJKeFFjWktnUUlYIn0.Z3mk_qBWn4MKJsX1yekpAMusFaktiYVX1MQrSEJlNL12rnIY7-UzJF-NCzpr4apidN9mt-pBMowun2-kdP7iTg&fbclid=IwY2xjawNAKWZleHRuA2FlbQIxMABicmlkETFMNTcxZ0FZZzhjSjRpQ25JAR4MJUxG7-IKGCwcRzPTkMYNcSqv2Cf6VbABADQU5V5uWBiMczFrDlS9IG99IA_aem_Jusxutc5AQH_ZZIEo8jXkg";
		window.open(whatsappUrl, "_blank");
	});
});

menuBar.addEventListener("click", () =>{
	menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
	console.log(window.scrollY);
	const windowPosition = window.scrollY > 0;
	navBar.classList.toggle("scrolling-active", windowPosition);
	menuNav.classList.remove("menu-active");
});

