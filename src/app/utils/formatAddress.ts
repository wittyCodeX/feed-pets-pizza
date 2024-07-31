export const formatAddress = (address: string): string | null => {
    try {
        if (address.length <= 10) {
            return address; // If the address is too short, return it as is
        }
        return `${address.slice(0, 5)}...${address.slice(-5)}`;
    } catch (error) {
        console.error('Error formatting address:', error);
        return null;
    }
}
