import css from "./MovieModal.module.css"
import { createPortal } from "react-dom";
import { useEffect } from "react";
import type { MovieModalProps } from "../../types/movie";


export default function MovieModal({ movie, onClose }:MovieModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event:KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    }; 
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className={css.backdrop} role="dialog" aria-modal="true" onClick={onClose}>
      <div className={css.modal} onClick={(e:React.MouseEvent) => e.stopPropagation()}>
        <button
          className={css.closeButton}
          aria-label="Close modal"
          onClick={onClose}
        >
          {' '}
          &times;
        </button>
        {movie.backdrop_path || movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            alt={movie.title}
            className={css.image}
          />
        ) : (
          <div className={css.image}>No image available</div>
        )}
        <div className={css.content}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>
            <strong>Release Date: </strong>
            {movie.release_date}
          </p>
          <p>
            <strong>Rating: </strong>
            {movie.vote_average}/10
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}