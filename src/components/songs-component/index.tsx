import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import songsJson from "../../sections/json-files/songsList.json";
import logo from "../../assets/logo.png";
import Theme from "../../theme/theam.tsx"

import "./songs.css";

type Song = {
    id: string;
    title: string;
    searchName: string;
    language: string;
    file_url: string | string[];
    type: string;
    song: string[][];
};


const Songs = () => {
    const [songsList, setSongsList] = useState<Song[]>(songsJson);

    const [loaderState, setLoaderState] = useState(true);
    const [isOpenFiterOption, setIsOpenFiterOption] = useState(false);
    const [isOpenSongsListMenu, setIsOpenSongsListMenu] = useState(false);
    const [isOpenSongTrackMenu, setIsOpenSongTrackMenu] = useState(false);
    const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const [selectedSong, setSelectedSong] = useState("");
    const [songTitle, setSongTitle] = useState("Select Song");
    const [query, setQuery] = useState("");
    const [filterSongs, setFilterSongs] = useState("All_Songs");

    const navigate = useNavigate();

    useEffect(() => {
        const sortedSongs = [...songsList].sort((a, b) =>
            a.title.localeCompare(b.title, 'te')
        );
        setSelectedSong(sortedSongs[0].id)
        setSongsList(sortedSongs);

        setTimeout(() => {
            setLoaderState(false);
        }, 1000);
    }, []);

    useEffect(() => {
        const currentSong = songsList.find(song => song.id === selectedSong);
        if (currentSong) {
            setSongTitle(currentSong.title);
        }
    }, [selectedSong, songsList]);

    const selectedSongRef = useRef<Record<string, HTMLDivElement | null>>({});
    useEffect(() => {
        if (selectedSong && selectedSongRef.current[selectedSong]) {
            selectedSongRef.current[selectedSong]?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [selectedSong]);

    const toggleSearchBar = () => {
        setIsOpenSearchBar(!isOpenSearchBar);
    };

    const onFilterSongs = (value: string) => {
        setFilterSongs(value);

        const filteredSongs = songsJson.filter((item) => {
            switch (value) {
                case "DSP_Songs":
                    return item.type === "regular_song";
                case "Christmas_Songs":
                    return item.type === "christmas_song";
                case "Newyear_Songs":
                    return item.type === "newyear_song";
                default:
                    return true;
            }
        });

        if (filteredSongs.length > 1) {
            filteredSongs.sort((a, b) => a.title.localeCompare(b.title, 'te'));
        }

        setSongsList(filteredSongs);

        if (filteredSongs.length > 0) {
            setSelectedSong(filteredSongs[0].id);
        }
    };


    return (
        <>
            {loaderState ? (
                <div className="songsBook">
                    <section className="hero section dark-background bg-image">
                        <img src="/assets/img/hero-bg.jpg" alt="Hero background" data-aos="fade-in" />
                    </section>
                    <span className="loader"></span>
                </div>
            ) : (
                <div id="SongsBook">
                    <header className="d-flex align-items-center justify-content-between p-3 bg-dark-gray text-white">
                        {/* Back Button */}
                        <button type="button" className="back-btn me-2" aria-label="Go Back" onClick={() => navigate(-1)}>
                            <i className="bi bi-arrow-left-circle fs-4"></i>
                            <span className="d-none d-md-flex"> Back </span>
                        </button>

                        {/* Theme Toggle Button */}
                        <button type="button" className="btn p-0 theam-btn me-2">
                            <Theme />
                        </button>

                        {/* Logo and Title */}
                        <h3 className="d-flex align-items-center m-0 flex-grow-1 text-nowrap title-text">
                            <img src={logo} width="80" height="80" alt="Logo" className="me-2 logo" />
                            <span>Dyvaswarupi</span>
                        </h3>

                        {/* Search Bar: Visible in Large & Tab Screens */}
                        <div className="d-none d-md-flex align-items-center me-2 position-relative">
                            <div className="input-group">
                                <input id="search-input" type="text"
                                    className="form-control" placeholder="Search..."
                                    aria-label="Search" value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                                />

                                <span className="input-group-text">
                                    <i className="bi bi-search"></i>
                                </span>
                            </div>

                            {/* Search Results Dropdown */}
                            {isFocused && query && (
                                <ul className="list-group search-results larg-screen-search-menu position-absolute bg-white shadow mt-1 w-100">
                                    {songsList
                                        .filter((item) => item.searchName.toLowerCase().includes(query.toLowerCase()))
                                        .map((item, index) => (
                                            <li
                                                key={index}
                                                className="list-group-item list-group-item-action"
                                                onClick={() => {
                                                    setSelectedSong(item.id);
                                                    setIsFocused(false);
                                                }}
                                            >
                                                {item.title}
                                            </li>
                                        ))}
                                </ul>
                            )}
                        </div>


                        {/* Search Bar: Mobile */}
                        <div className="d-flex d-md-none" style={{ position: isOpenSearchBar ? "fixed" : "unset", zIndex: isOpenSearchBar ? "9" : "", right: "60px" }}>
                            <div className={`search-box ${isOpenSearchBar ? "active" : ""}`} style={{ zIndex: isOpenSearchBar ? "9" : "" }}>
                                <input
                                    id="search-input"
                                    type="text"
                                    className="form-control me-2"
                                    placeholder="Search..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </div>

                            <button type="button" className="back-btn me-2" style={{ zIndex: isOpenSearchBar ? "9" : "", marginLeft: isOpenSearchBar ? "5px" : "" }} aria-label="Search" onClick={toggleSearchBar}>
                                <i className="bi bi-search fs-4"></i>
                            </button>

                            {isOpenSearchBar && query && (
                                <ul className="list-group search-results" style={{ zIndex: isOpenSearchBar ? "9" : "" }}>
                                    {songsList.filter((item) => item.searchName.toLowerCase().includes(query.toLowerCase()))
                                        .map((item, index) => (
                                            <li key={index} className="list-group-item" onClick={() => { setSelectedSong(item.id), setIsOpenSearchBar(false); }}>
                                                {item.title}
                                            </li>
                                        ))}
                                </ul>
                            )}
                            <div className={`back_cover ${isOpenSearchBar ? "active" : ""} menu_cover`} onClick={toggleSearchBar} />
                        </div>


                        <button type="button" className="back-btn" style={{ zIndex: isOpenFiterOption ? "1200" : "" }} aria-label="Filter" onClick={() => setIsOpenFiterOption(!isOpenFiterOption)}>
                            <i className="bi bi-funnel fs-4"></i> <span className="d-none d-md-flex">Filter</span>
                        </button>
                    </header>


                    <header style={{ zIndex: isOpenSongsListMenu || isOpenSongTrackMenu ? "2" : "1" }} className="d-flex align-items-center border-bottom justify-content-between p-3 bg-mint shadow-bottom">
                        {/* Songs List Button */}
                        <button type="button" className="back-btn me-2" onClick={() => { setIsOpenSongsListMenu(!isOpenSongsListMenu), setIsOpenSongTrackMenu(false) }}>
                            <i className="bi bi-music-note-list fs-4"></i>
                        </button>

                        {/* Song and Title */}
                        <h3 className="m-0 flex-grow-1 text-nowrap text-center song-title-text">
                            {songTitle}
                        </h3>

                        {/* Song Track Button */}
                        <button type="button" className="back-btn play-track-btn" aria-label="Filter" onClick={() => { setIsOpenSongTrackMenu(!isOpenSongTrackMenu), setIsOpenSongsListMenu(false) }}>
                            <span className="d-flex align-items-center justify-content-center d-none d-md-flex"><i className="me-2 bi bi-play-circle-fill fs-4"></i> Play</span>
                            <span >
                                <i className="bi bi-play-circle-fill fs-4 d-md-none"></i>
                            </span>
                        </button>
                    </header>

                    <div id="background">
                        <div className="container">
                            {songsList.map((songs, index) => (
                                <div className="song-card p-3"
                                    key={songs.id} id={songs.id}
                                    ref={(el: any) => (selectedSongRef.current[songs.id] = el)}
                                >
                                    <span className="song-index-number">{index + 1}</span>
                                    {songs.song.map((stanza, stanzaIndex) => (
                                        <div key={stanzaIndex} className="song-item">
                                            {stanza.map((line, lineIndex) => (
                                                <p key={lineIndex} style={{ whiteSpace: "pre-line" }}>{line}</p>
                                            ))}
                                            <br />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* ========================================================= PopUp's ============================================================= */}
                    {/* Filter PopUp */}
                    <div className={``}>
                        <div className={`back_cover ${isOpenFiterOption ? "active" : ""}`} style={{ zIndex: isOpenFiterOption ? "9" : "" }} onClick={() => setIsOpenFiterOption(false)} />
                        <div className={`menu-popup ${isOpenFiterOption ? "active" : ""}`}>
                            <h3>Select Songs</h3>
                            <div className="filter-option fd">
                                {[
                                    { label: "All Songs", value: "All_Songs" },
                                    { label: "DSP Songs", value: "DSP_Songs" },
                                    { label: "Christmas Songs", value: "Christmas_Songs" },
                                    { label: "New Year Songs", value: "Newyear_Songs" }
                                ].map(({ label, value }) => (
                                    <label key={value} className="m_r_15 d-flex align-items-center menu-item">
                                        <input
                                            type="radio"
                                            className="fullEmpt"
                                            value={value}
                                            checked={filterSongs === value}
                                            onChange={(e) => {
                                                onFilterSongs(e.target.value);
                                                setIsOpenFiterOption(false);
                                            }}
                                        />
                                        {label}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Songs List Menu bar */}
                    <div className="menu-wrapper">
                        <div className={`back_cover ${isOpenSongsListMenu ? "active" : ""} menu_cover`}
                            onClick={() => setIsOpenSongsListMenu(false)}
                        />
                        <div className={`songs-list-menu ${isOpenSongsListMenu ? "active" : ""} p-2`}>
                            {songsList.map((song) => (
                                <li className={`${selectedSong === song.id ? "selected-song" : ""}`} key={song.id} onClick={() => { setSelectedSong(song.id), setIsOpenSongsListMenu(false) }}>
                                    🎵 {song.title}
                                </li>
                            ))}
                        </div>
                    </div>

                    {/* Play Tracks List */}
                    <div className="menu-wrapper">
                        <div className={`back_cover ${isOpenSongTrackMenu ? "active" : ""} menu_cover`}
                            onClick={() => setIsOpenSongTrackMenu(false)}
                        />
                        <div className={`play-track-menu ${isOpenSongTrackMenu ? "active" : ""} p-2`}>
                            {Array.from({ length: 4 }, (_, i) => (
                                <li key={i}>▶ Song Track {i + 1}</li>
                            ))}
                        </div>
                    </div>

                </div >
            )}
        </>
    )
};

export default Songs;