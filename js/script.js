// script.js

// Import base64 image from another file
import { vegtableCharactersImage } from './image.js';

// Create PDF document in orientation portrait, set measurement to millimeters, and use A4 paper size
const doc = new jsPDF('portrait', 'mm', 'a4'); 

// Set font size, font family, and font weight
doc.setFontSize(8); 
doc.setFont('Helvetica'); 
doc.setFontStyle('bold');
doc.text(new Date().toString(), 10, 10); 

// Increase font size
doc.setFontSize(36); 

// Set text color
doc.setTextColor(173, 227, 98);
doc.text('Your simple salad recipe', 10, 30);
doc.setTextColor(0, 0, 0);
doc.setFontSize(16);
doc.setFontStyle('normal'); 
doc.setPage(1); 

// Add JPG image to PDF file
doc.addImage(vegtableCharactersImage, 'JPG', 98, 230, 97, 55); 

let item4 = "";
let item5 = "";
let item6 = "";

// Pick a random element from the list
function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

(() => {
    let slot1 = document.getElementById('slot1');
    let slot2 = document.getElementById('slot2');
    let slot3 = document.getElementById('slot3');
    let item1 = randomItem(['flat_leaf_kale', 'curly_leaf_kale', 'romaine_lettuce', 'spinach', 'cabbage', 'arugula', 'watercress']);
    let item2 = randomItem(['bok_choy', 'fresh_corn_kernels', 'cucumbers', 'red_pepper', 'yellow_pepper', 'radish']);
    let item3 = randomItem(['avocado', 'cherry_tomato', 'tomatoes', 'broccoli', 'carrots', 'radicchio', 'endive', 'dandelion']);

    setTimeout(function () {
        slot1.src = `images/${item1}.png`;
        slot1.title = item1.replace(/_/g, " ");
    }, 1000);
    setTimeout(function () {
        slot2.src = `images/${item2}.png`;
        slot2.title = item2.replace(/_/g, " ");
    }, 2000);
    setTimeout(function () {
        slot3.src = `images/${item3}.png`;
        slot3.title = item3.replace(/_/g, " ");
    }, 3000); 
    
    // Salad ingredients text for PDF
    doc.setFontSize(22);
    doc.setFontStyle('bold');
    doc.text('Ingredients:', 10, 50);
    doc.setFontStyle('normal');
    doc.setFontSize(16);
    doc.text(item1.replace(/_/g, " "), 10, 65);
    doc.text(item2.replace(/_/g, " "), 10, 75);
    doc.text(item3.replace(/_/g, " "), 10, 85);
    doc.setFontSize(22);
    doc.setFontStyle('bold'); 
    
    // Salad dressing text for PDF
    doc.text('Dressing:', 10, 135);
    doc.setFontStyle('normal');
    doc.setFontSize(14);
    doc.text('To create the dressing use a ratio of 2:1 of oil to acid.', 10, 150);
    doc.text('Example: 2/3 cup oil and 1/3 cup any kind of vinegar, ', 10, 160);
    doc.text('fresh lime juice, or fresh lemon juice.', 10, 170);
    doc.setFontSize(22);
    doc.setFontStyle('bold'); 
    
    // Recipe instructions for PDF
    doc.text('Preparation:', 10, 190);
    doc.setFontStyle('normal');
    doc.setFontSize(14);
    doc.text('Wash vegetables throughly and chop up ingredients. In a large bowl,', 10, 205);
    doc.text('toss the salad ingredients together. Add the salad dressing, a pinch', 10, 215);
    doc.text('of salt, and fresh ground black pepper.', 10, 225);
})(); 

// Provide three extra ingredients for more flavor and nutrition
const addFlavor = () => {
    item4 = randomItem(['flax_seeds', 'walnuts', 'almonds', 'chic_peas']);
    item5 = randomItem(['orange_slices', 'parsley', 'feta_cheese']);
    item6 = randomItem(['red_onion', 'shallot', 'garlic']);

    setTimeout(function () {
        document.getElementById("slot4").classList.add("fade");
        slot4.src = `images/${item4}.png`;
        slot4.title = item4.replace(/_/g, " ");
        slot4.alt = item4;
    }, 500);
    setTimeout(function () {
        document.getElementById("slot5").classList.add("fade");
        slot5.src = `images/${item5}.png`;
        slot5.title = item5.replace(/_/g, " ");
        slot5.alt = item5;
    }, 1000);
    setTimeout(function () {
        document.getElementById("slot6").classList.add("fade");
        slot6.src = `images/${item6}.png`;
        slot6.title = item6.replace(/_/g, " ");
        slot6.alt = item6;
    }, 1500);
    
    document.getElementById('extras').removeAttribute('class', 'hide');
    document.getElementById('extras').classList.add('slots');
    let slot4 = document.getElementById('slot4');
    let slot5 = document.getElementById('slot5');
    let slot6 = document.getElementById('slot6');
};

// Download recipe as a PDF
const downloadRecipePDF = () => {
    doc.setFontSize(16);
    doc.text(item4.replace(/_/g, " "), 10, 95);
    doc.text(item5.replace(/_/g, " "), 10, 105);
    doc.text(item6.replace(/_/g, " "), 10, 115); 
    
    let now = new Date();
    doc.save("recipe-".concat(now.getFullYear(), "-").concat(now.getMonth(), "-").concat(now.getDate(), "-").concat(now.getHours()).concat(now.getMinutes(), ".pdf"));
};

// Refresh page to get another random selection of ingredients
document.querySelector('.regenerate').addEventListener('click', () => {
    window.location.reload();
});

// Add extra ingredients
document.querySelector('.add-flavor').addEventListener('click', () => {
    addFlavor();
});

// Download PDF
document.querySelector('.download-pdf').addEventListener('click', () => {
    downloadRecipePDF();
});

// Dynamically set the year in the footer
document.querySelector('.year').textContent = (new Date().getFullYear());