var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RadJav;
(function (RadJav) {
    var GUI;
    (function (GUI) {
        var Textarea = (function (_super) {
            __extends(Textarea, _super);
            function Textarea(obj, text, parent) {
                var _this = this;
                if (obj == null) {
                    obj = {};
                }
                if (typeof obj == "string") {
                    var name = obj;
                    obj = { name: name };
                }
                if (obj.size == null) {
                    obj.size = new RadJav.Vector2();
                    obj.size.x = 120;
                    obj.size.y = 120;
                }
                (_this = _super.call(this, obj, text, parent) || this) || _this;
                _this.type = "RadJav.GUI.Textarea";
                return _this;
            }
            return Textarea;
        }(RadJav.GUI.GObject));
        GUI.Textarea = Textarea;
    })(GUI = RadJav.GUI || (RadJav.GUI = {}));
})(RadJav || (RadJav = {}));
