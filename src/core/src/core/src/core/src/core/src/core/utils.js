module.exports = {
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    generateId(prefix = "id") {
        return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
    }
};
