import courseReducer from "./courseReducer";
import loginReducer from "./loginReducer";
import cartReducer from "./cartReducer";

const rootReducer = {
    Courses: courseReducer,
    Login: loginReducer,
    Cart: cartReducer,
}

export default rootReducer;