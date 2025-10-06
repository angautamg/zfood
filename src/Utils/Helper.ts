// Filter the restaurant data according input type
export const filterData = (searchText:any, restaurants:any) => {
    const resFilterData = restaurants.filter((restaurant:any) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return resFilterData;
  }