"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = paginate;
function paginate(data, total, options) {
    const page = options.page || 1;
    const limit = options.limit || 10;
    const totalPages = Math.ceil(total / limit);
    return {
        data,
        total,
        page,
        limit,
        totalPages,
    };
}
//# sourceMappingURL=pagination.util.js.map