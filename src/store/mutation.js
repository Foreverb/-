export default {
  selectCity(state, cityInfo) {
    state.cityName = cityInfo.cityName;
    state.cityId = cityInfo.cityId;

    try {
      localStorage.setItem("cityInfo", JSON.stringify(state));
    } catch (error) {}
  },
  selectField(state, field) {
    state.field = field;

    try {
      localStorage.setItem("cityInfo", JSON.stringify(state));
    } catch (error) {}
  },
};
