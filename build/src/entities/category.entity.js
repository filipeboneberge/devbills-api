"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    constructor({ id, title, color }) {
        this.id = id;
        this.title = title;
        this.color = color.toLocaleUpperCase();
    }
}
exports.Category = Category;
