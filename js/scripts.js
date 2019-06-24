function Container(){
	
	this.width = 1300;
	this.height = 600;
	this.bgColor = 'lightgreen';
	this.margin = '0 auto';
	this.position = 'relative';
	this.border = '3px solid black';



	this.create = function (){

		this.element = document.createElement('div');
		
		this.element.style.width = this.width + 'px';
		this.element.style.height = this.height + 'px';
		this.element.style.margin = this.margin;
		// this.element.style.backgroundColor = this.bgColor;
		this.element.style.position = this.position; 
		this.element.style.border = this.border;
	};

	this.append = function (childElement){
		this.element.appendChild(childElement);
	};
}







