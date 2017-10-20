"use strict";
var SmartDoor = function (parentElement, id) {
	this.parentElement = parentElement;
	this.componentElement = null;
	this.id = id;
	this.isOpen = false;
	this.type = 'door';
};

SmartDoor.prototype = Object.create(HouseComponent.prototype);
SmartDoor.prototype.constructor = SmartDoor;

SmartDoor.prototype.render = function () {
	if (this.componentElement == null) {
		this.componentElement = document.createElement(this.componentTag);
		this.parentElement.appendChild(this.componentElement);
	}
	this.componentElement.innerHTML = '<div><b>Дверь:</b> ' +
		'<label for="door-open-' + this.id + '">открыта: </label><input type="checkbox" id="open-switch-' + this.id + '" />' +
		'</div>';
	this.isOpenEl = document.getElementById('open-switch-' + this.id);
	this.openClose(this.isOpen);
	this.isOpenEl.onchange = this.openCloseHandler.bind(this);
}

SmartDoor.prototype.openClose = function (state) {
	this.isOpen = state;
	this.isOpenEl.checked = this.isOpen;
}

SmartDoor.prototype.openCloseHandler = function (event) {
	this.isOpen = event.target.checked;
}