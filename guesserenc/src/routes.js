import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastrar from "./pages/Cadastrar";

export const routes = [
    { path: '', component: Login},
    { path: '/home', component: Home},
    { path: '/cadastro', component: Cadastrar}
];