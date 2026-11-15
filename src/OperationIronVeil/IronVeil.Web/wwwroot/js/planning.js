window.ironVeilMap = {
    getRelativePosition: (element, clientX, clientY) => {
        const bounds = element.getBoundingClientRect();

        if (bounds.width <= 0 || bounds.height <= 0) {
            return { x: 50, y: 50 };
        }

        return {
            x: ((clientX - bounds.left) / bounds.width) * 100,
            y: ((clientY - bounds.top) / bounds.height) * 100
        };
    }
};
