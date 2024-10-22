export const getAllShopItems = () => {
    return fetch(`http://localhost:8088/ShopItems`).then((res) => res.json())
}