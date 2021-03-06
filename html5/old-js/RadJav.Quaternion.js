/*
	MIT-LICENSE
	Copyright (c) 2017 Higher Edge Software, LLC

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

/** @class RadJav.Quaternion
* A Quaternion class.
* Available on platforms: Windows,Linux,OSX,HTML5
*/
RadJav.Quaternion = function (w, x, y, z)
{
	if (w == null)
		w = 1;

	if (x == null)
		x = 0;

	if (y == null)
		y = 0;

	if (z == null)
		z = 0;

	if (x instanceof RadJav.Vector4)
	{
		var temp = x;
		x = temp.x;
		y = temp.y;
		z = temp.z;
		w = temp.w;
	}

	if (x instanceof RadJav.Quaternion)
	{
		var temp = x;
		w = temp.w;
		x = temp.x;
		y = temp.y;
		z = temp.z;
	}

	/** @property {Number} [w=1]
	* The W component.
	*/
	this.w = w;
	/** @property {Number} [x=0]
	* The X component.
	*/
	this.x = x;
	/** @property {Number} [y=0]
	* The Y component.
	*/
	this.y = y;
	/** @property {Number} [z=0]
	* The Z component.
	*/
	this.z = z;
}

