import create from 'zustand';

const useVirtualScrollStore = create((set) => ({
	scrollAmount: 0,
	isScrolling: false
}));

export default useVirtualScrollStore;
