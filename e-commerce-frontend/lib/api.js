const API_BASE_URL = 'http://localhost:8222';

export async function getProducts() {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
}