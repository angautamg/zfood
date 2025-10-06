import { useEffect, useState } from "react";

type MenuItem = {
  id: string;
  name: string;
  price: number;
  // extend with your actual API response
};

type RestaurantMenuData = {
  id: string;
  name: string;
  cuisines: string[];
  menu: MenuItem[];
  // extend this too
};
const useResMenuData = (
  FOODFIRE_MENU_API_URL: string,
  resId: any,
  RESTAURANT_TYPE_KEY: string,
  MENU_ITEM_TYPE_KEY: string
) => {
  const [restaurant, setRestaurant] = useState(null); // use useState to store restaurant data
  const [menuItems, setMenuItems] = useState([]); // use useState to store restaurant Menu Item data

  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(FOODFIRE_MENU_API_URL + resId);
      if (!response.ok) {
        const err:any = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();

        // Set restaurant data
        const restaurantData =
          json?.data?.cards
            ?.map((x:any) => x.card)
            ?.find((x:any) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
            ?.info || null;
        setRestaurant(restaurantData);

        // Set menu item data
        const menuItemsData =
          json?.data?.cards
            .find((x:any) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
              (x:any) => x.card?.card
            )
            ?.filter((x:any) => x["@type"] == MENU_ITEM_TYPE_KEY)
            ?.map((x:any) => x.itemCards)
            .flat()
            .map((x:any) => x.card?.info) || [];

        const uniqueMenuItems:any = [];
        menuItemsData.forEach((item:any) => {
          if (!uniqueMenuItems.find((x:any) => x.id === item.id)) {
            uniqueMenuItems.push(item);
          }
        });
        setMenuItems(uniqueMenuItems);
      }
    } catch (err) {
      setMenuItems([]);
      setRestaurant(null);
      console.error(err);
    }
  }
  return [restaurant, menuItems];
};

export default useResMenuData;
