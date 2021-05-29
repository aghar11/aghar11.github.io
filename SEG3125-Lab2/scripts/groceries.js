	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Bread",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 2.35
	},
	{
		name: "Salmon",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 19.99
	},
	{
		name: "Bagels",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 4.99
	},
	{
		name: "Cereal",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 6.99
	},
	{
		name: "Milk",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 4.99
	},
	{
		name: "Oat Milk",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 7.99
	},
	{
		name: "Peanut Butter",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 3.99
	},
	{
		name: "Strawberries",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 4.99
	},
	{
		name: "Rice",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 19.99
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)) {
			product_names.push(prods[i].name.concat("     $", prods[i].price));
		}
		else if ((restriction == "NutFree") && (prods[i].nutFree == true)) {
			product_names.push(prods[i].name.concat("     $", prods[i].price));
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)) {
			product_names.push(prods[i].name.concat("     $", prods[i].price));
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name.concat("     $", prods[i].price));
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
