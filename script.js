const C = window.INVITE_CONFIG || {};
const translations = {
en:{
brand:"Gruhapravesam",detailsNav:"Details",familyNav:"Family",locationNav:"Location",auspicious:"శ్రీ గణేశాయ నమః",ganeshaCaption:"శ్రీ విఘ్నేశ్వరాయ నమః",
blessing:"With the blessings of the Almighty and our elders",headline:"You are warmly invited",eventTitle:"Gruhapravesam",subtitle:"Housewarming Ceremony",
intro:"Please join us as we celebrate the beginning of a beautiful new chapter in our home.",viewInvite:"Explore the invitation",
ourHomeKicker:"A place to call our own",ourHome:"Our New Home",homeSub:"A little home, filled with big blessings.",floorLabel:"3rd floor · Flat 303",flatLabel:"Flat No. 303",fiveStorey:"A home in a five-storey apartment",thirdOfFive:"3rd Floor · Out of 5",
occasionKicker:"The auspicious occasion",detailsTitle:"Join us for the celebration",dateLabel:"Date",weekday:"Sunday",timeLabel:"Pooja / Muhurtham",timePending:"Time to be announced",timeNote:"We look forward to celebrating with you.",calendarNote:"Save the date so you can celebrate with us.",calendarButton:"＋ Add to Google Calendar",
familyKicker:"With love and blessings",familyTitle:"Our Family Invites You",familyIntro:"Your presence will make our special day even more meaningful.",
comeFindUs:"We would love to welcome you",locationTitle:"Find Our Home",addressLabel:"Venue",flatAddress:"Flat 303 · 3rd Floor",directions:"Get directions on Google Maps",scan:"Scan for directions",locationNote:"Please look for Suraksha Green Meadows and ask for Flat 303.",
closingLine:"Come, share our joy and bless our new beginning.",closingThanks:"With love, gratitude and warm regards",footer:"Made with love for our housewarming celebration",backTop:"Back to top ↑"
},
te:{
brand:"గృహప్రవేశం",detailsNav:"వివరాలు",familyNav:"కుటుంబం",locationNav:"చిరునామా",auspicious:"శ్రీ గణేశాయ నమః",ganeshaCaption:"శ్రీ విఘ్నేశ్వరాయ నమః",
blessing:"భగవంతుని మరియు పెద్దల ఆశీస్సులతో",headline:"మా గృహప్రవేశానికి మీకు హృదయపూర్వక ఆహ్వానం",eventTitle:"గృహప్రవేశ మహోత్సవం",subtitle:"నూతన గృహ ప్రవేశ వేడుక",
intro:"మా కొత్త ఇంటి శుభారంభ వేడుకలో మీరు పాల్గొని మీ ఆశీస్సులు అందించవలసిందిగా మనస్ఫూర్తిగా ఆహ్వానిస్తున్నాము.",viewInvite:"ఆహ్వాన వివరాలు చూడండి",
ourHomeKicker:"మన సొంత చిరునామా",ourHome:"మా కొత్త ఇల్లు",homeSub:"ఆశీస్సులతో నిండిన మా చిన్న ప్రపంచం.",floorLabel:"3వ అంతస్తు · ఫ్లాట్ 303",flatLabel:"ఫ్లాట్ నం. 303",fiveStorey:"ఐదు అంతస్తుల అపార్ట్‌మెంట్‌లో మా ఇల్లు",thirdOfFive:"3వ అంతస్తు · మొత్తం 5 అంతస్తులు",
occasionKicker:"శుభ సందర్భం",detailsTitle:"మా వేడుకకు విచ్చేయండి",dateLabel:"తేదీ",weekday:"ఆదివారం",timeLabel:"పూజ / ముహూర్తం",timePending:"సమయం త్వరలో తెలియజేస్తాము",timeNote:"మీతో ఈ శుభ సందర్భాన్ని జరుపుకోవాలని ఎదురుచూస్తున్నాము.",calendarNote:"ఈ తేదీని మీ క్యాలెండర్‌లో భద్రపరచుకోండి.",calendarButton:"＋ Google Calendar లో చేర్చండి",
familyKicker:"ప్రేమాభిమానాలతో",familyTitle:"మా కుటుంబం తరఫున ఆహ్వానం",familyIntro:"మీ రాక మా ఆనందాన్ని మరింత పెంచుతుంది.",
comeFindUs:"మీకు స్వాగతం పలకాలని ఎదురుచూస్తున్నాము",locationTitle:"మా ఇంటి చిరునామా",addressLabel:"వేదిక",flatAddress:"ఫ్లాట్ 303 · 3వ అంతస్తు",directions:"Google Maps లో దారి చూడండి",scan:"దారి కోసం స్కాన్ చేయండి",locationNote:"Suraksha Green Meadows వద్దకు వచ్చి ఫ్లాట్ 303 గురించి అడగండి.",
closingLine:"మా ఆనందంలో పాలుపంచుకొని, మా కొత్త ప్రారంభాన్ని ఆశీర్వదించండి.",closingThanks:"ప్రేమతో, కృతజ్ఞతలతో",footer:"మా గృహప్రవేశ వేడుక కోసం ప్రేమతో రూపొందించబడింది",backTop:"పైకి వెళ్లండి ↑"
}};
let currentLang="en";
function formatDate(lang){return lang==="te"?"15 నవంబర్ 2026":"15 November 2026"}
function render(){
 const t=translations[currentLang]; document.documentElement.lang=currentLang==="te"?"te":"en";document.body.dataset.lang=currentLang;
 document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(t[k])el.textContent=t[k]});
 document.querySelectorAll(".lang-btn").forEach(b=>{const active=b.dataset.lang===currentLang;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active))});
 document.getElementById("event-date").textContent=formatDate(currentLang);
 document.getElementById("pooja-time").textContent=C.poojaTime||t.timePending;
 const address=C.addressLines||[];document.getElementById("address").innerHTML=address.map(x=>`<span>${escapeHtml(x)}</span>`).join("<br>");
 document.querySelector(".apartment-name").textContent=C.apartmentName||"Suraksha Green Meadows";
 document.querySelectorAll(".flat-number").forEach(x=>x.textContent=C.flatNumber||"303");
 document.querySelectorAll(".floor-label").forEach(x=>x.textContent=currentLang==="te"?"3వ అంతస్తు · ఫ్లాట్ "+(C.flatNumber||"303"):(C.floor||"3rd Floor")+" · Flat "+(C.flatNumber||"303"));
 const hosts=document.getElementById("hosts");hosts.innerHTML=(C.hosts||[]).map(h=>`<article class="host-card"><span class="host-label">${escapeHtml(currentLang==="te"?(h.labelTe||h.labelEn):(h.labelEn||""))}</span><strong class="host-name">${escapeHtml(currentLang==="te"?(h.nameTe||h.nameEn):(h.nameEn||""))}</strong></article>`).join("");
 const map=C.mapsUrl||"#";document.getElementById("map-link").href=map;
 const start="20261115T000000",end="20261115T235900";
 const title=encodeURIComponent(currentLang==="te"?"గృహప్రవేశ మహోత్సవం":"Gruhapravesam - Housewarming");
 const details=encodeURIComponent((C.apartmentName||"Suraksha Green Meadows")+", Flat "+(C.flatNumber||"303")+"\n"+address.join(", ")+"\n"+map);
 document.getElementById("calendar-link").href=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}%2F${end}&details=${details}`;
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
document.querySelectorAll(".lang-btn").forEach(b=>b.addEventListener("click",()=>{currentLang=b.dataset.lang;render()}));
render();
