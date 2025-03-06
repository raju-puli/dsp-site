// import { Navigate } from "react-router-dom";
import App from "./App";
import Footer from "./components/footer-component";
import Header from "./components/header-component";
import Home from "./components/home-component";
import Songs from "./components/songs-component";
import Calendar from "./sections/components/calendar-section/calendar";
import Sermons from "./components/sermons-component";

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
            { path: "songs", element: <Songs /> },
            { path: "calendar", element: <Calendar /> },
            { path: "sermons", element: <Sermons /> }
        ]
    }
];

export default AppRouter;
