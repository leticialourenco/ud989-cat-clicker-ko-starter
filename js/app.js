var initialCats = [
	{
		clickCount: 0,
		name: 'Jeffrey Hoffstader',
		imgSrc: 'img/cat1.jpg',
		imgAttribuition: 'http://images.google.com',
		nicknames: ['Jeff', 'Jeffinho']
	},
	{
		clickCount: 0,
		name: 'Tom Keen',
		imgSrc: 'img/cat2.jpg',
		imgAttribuition: 'http://images.google.com',
		nicknames: ['Toto', 'Tonzinho']
	},
	{
		clickCount: 0,
		name: 'Maria Jivas',
		imgSrc: 'img/cat3.jpg',
		imgAttribuition: 'http://images.google.com',
		nicknames: ['Mama', 'Marieta']
	},
	{
		clickCount: 0,
		name: 'Jessica Jones',
		imgSrc: 'img/cat4.jpg',
		imgAttribuition: 'http://images.google.com',
		nicknames: ['Jeje', 'Jessiquita']
	}
]

var Cat = function(data){
	this.clickCount = ko.observable(data.nicknames);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribuition = ko.observable(data.imgAttribuition);
	this.nicknames = ko.observableArray(data.nicknames);
	
	this.title = ko.computed(function(){
		var title;
		var clicks = this.clickCount();
		if (clicks < 10) {
			title = 'Newborn';
		} else if (clicks < 50) {
			title = 'Infant';
		} else if (clicks < 100) {
			title = 'Child';
		} else if (clicks < 200) {
			title = 'Teen';
		} else if (clicks < 500) {
			title = 'Adult';
		} else {
			title = 'Ninja';
		}

		return title;
	}, this);
}

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);
	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());