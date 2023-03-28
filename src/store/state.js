let cityInfo = {
  cityName: "全部",
  cityId: "0",
  field: "all",
};
try {
  if (localStorage.cityInfo) {
    cityInfo = JSON.parse(localStorage.getItem("cityInfo"));
  }
} catch (error) {}
export default cityInfo;
