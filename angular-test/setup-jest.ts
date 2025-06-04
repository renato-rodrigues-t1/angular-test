import 'jest-preset-angular/setup-jest';
import '@angular/localize/init';

Object.defineProperty(URL, 'createObjectURL', {
    value: jest.fn(),
    writable: true
});
Object.defineProperty(URL, 'revokeObjectURL', {
    value: jest.fn(),
    writable: true
});

const mockResponse = jest.fn();
Object.defineProperty(window, 'location', {
    value: {
        hash: {
            endsWith: mockResponse,
            includes: mockResponse
        },
        assign: mockResponse
    },
    writable: true
});

const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;
