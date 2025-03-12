import { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import gsap from "gsap";
import "./AudioPlayer.css"; // Create this CSS file for custom styles

const AudioPlayer = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const progressBarRef = useRef<HTMLDivElement | null>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const skipForward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime += 10;
        }
    };

    const skipBackward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime -= 10;
        }
    };



    const handleProgress = () => {
        if (audioRef.current && progressBarRef.current) {
            const duration = audioRef.current.duration;
            const currentTime = audioRef.current.currentTime;
            const progressPercent = (currentTime / duration) * 100;
            gsap.to(progressBarRef.current, { width: `${progressPercent}%`, duration: 0.1 });
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener("timeupdate", handleProgress);
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener("timeupdate", handleProgress);
            }
        };
    }, []);

    return (
        <div className="audio-player container p-4 border rounded text-center">
            <audio ref={audioRef} src="your-audio-file.mp3" preload="metadata" />
            <div className="progress-bar bg-light rounded-pill overflow-hidden my-3" style={{ height: "8px" }}>
                <div ref={progressBarRef} className="progress bg-primary" style={{ height: "100%", width: "0%" }}></div>
            </div>
            <div className="controls d-flex justify-content-evenly gap-3 my-2">
                <button className="btn btn-outline-primary rounded-circle p-3" onClick={skipBackward}>⏪</button>
                <button className="btn btn-primary rounded-circle p-3" onClick={togglePlay}>{isPlaying ? "⏸" : "▶"}</button>
                <button className="btn btn-outline-primary rounded-circle p-3" onClick={skipForward}>⏩</button>
            </div>
        </div>
    );
};

export default AudioPlayer;