import { createStore } from "vuex";
import state from "./state";
import mutation from "./mutation";

export default createStore({
    state,
    mutation,
});