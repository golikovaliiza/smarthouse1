"use strict";
var FaceControl = function (parentElement, id) {
	this.parentElement = parentElement;
	this.componentElement = null;
	this.id = id;
	this.switch = false;
	this.type = 'alarm';
};

FaceControl.prototype = Object.create(HouseComponent.prototype);
FaceControl.prototype.constructor = FaceControl;

FaceControl.prototype.render = function () {
	if (this.componentElement == null) {
		this.componentElement = document.createElement(this.componentTag);
		this.parentElement.appendChild(this.componentElement);
		this.componentElement.innerHTML = '<div>Сигнализация работает</div>';
	}
}

FaceControl.prototype.switchAlalrm = function (state) {
	this.switch = state;
	this.switchEl.checked = this.switch;
}

FaceControl.prototype.switchAlalrmHandler = function (event) {
	this.switch = event.target.checked;
}