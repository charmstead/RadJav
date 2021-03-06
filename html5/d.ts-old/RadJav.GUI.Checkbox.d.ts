/*
	MIT-LICENSE
	Copyright (c) 2017-2018 Higher Edge Software, LLC

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
	and associated documentation files (the "Software"), to deal in the Software without restriction, 
	including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
	and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
	subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial 
	portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
	LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
	IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

declare namespace RadJav.GUI
{
	/** @class RadJav.GUI.Checkbox
	* @extends RadJav.GUI.GObject
	* A checkbox.
	* Available on platforms: Windows,Linux,OSX,HTML5
	*/
	class Checkbox extends GObject
	{
		constructor (obj?: Object, text?: String, parent?: GObject);

		/** @property {Boolean} [_checked=false]
		* If set to true, the box is checked.
		* @protected
		*/
		_checked: boolean;

		/** Set whether or not this checkbox is checked.
		* Theme Event: setChecked
		* Is Theme Event Asynchronous: No
		* @param {Boolean} checked Whether or not this is checked.
		* @return {Promise} Executes the promise when the image has loaded.
		*/
		setChecked (checked: boolean): void;

		/** Checks if this checkbox is checked.
		* Theme Event: isChecked
		* Is Theme Event Asynchronous: No
		* @return {Boolean} Whether or not this is checked.
		*/
		isChecked (): boolean;
	}
}

