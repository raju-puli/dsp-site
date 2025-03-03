import { Navigate } from "react-router-dom";
import App from "./App";
import Footer from "./components/footer-component";
import Header from "./components/header-component";
import Home from "./components/home-component";
import Songs from "./components/songs-component";

const NotFound = () => <p>Page Not Found</p>;

const Main = () => {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    );
};

const AppRouter = [
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Main /> },  // ⬅ Set Main directly instead of Navigate
            { path: "main", element: <Main /> },
            { path: "songs", element: <Songs /> }
        ]
    }
];

export default AppRouter;
