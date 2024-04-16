import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import * as S from "./SwiperHorizontal.styled";

type SwiperHorizontalProps = {
  slides: React.ReactNode[];
  type?: "horizontal" | "vertical";
  selectedIndex: number;
  onNextSlide: () => void;
  onPrevSlide: () => void;
  slideHeight?: number;
};

const SwiperHorizontal = ({
  slides,
  type = "horizontal",
  selectedIndex,
  onNextSlide,
  onPrevSlide,
  slideHeight = 0,
}: SwiperHorizontalProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [startX, setStartX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const updateSlideWidth = () => {
      if (wrapperRef.current) {
        const firstSlide = wrapperRef.current.firstElementChild as HTMLElement;
        if (firstSlide) {
          const width = firstSlide.offsetWidth;
          setSlideWidth(width);
        }
      }
    };

    updateSlideWidth();

    window.addEventListener("resize", updateSlideWidth);

    return () => {
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, [slides, windowWidth]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
    setDeltaX(0);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const newDeltaX = touch.clientX - startX;
    setDeltaX(newDeltaX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (deltaX > 50) {
      onPrevSlide();
    } else if (deltaX < -50) {
      onNextSlide();
    }
  };

  return (
    <S.Container>
      <S.Wrapper
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <S.Slides
          ref={wrapperRef}
          style={{
            transform: `translate(${
              type === "horizontal" ? selectedIndex * -slideWidth : 0
            }px, ${type === "vertical" ? selectedIndex * -slideHeight : 0}px)`,
            height:
              type === "vertical" ? `${slideHeight * slides.length}px` : "auto",
          }}
        >
          {slides}
        </S.Slides>
      </S.Wrapper>
      {type === "horizontal" && (
        <S.Buttons>
          <S.PrevButton onClick={onPrevSlide} />
          <S.NextButton onClick={onNextSlide} />
        </S.Buttons>
      )}
      {type === "vertical" && (
        <S.ButtonsVertical>
          <S.UpButton onClick={onPrevSlide} />
          <S.DownButton onClick={onNextSlide} />
        </S.ButtonsVertical>
      )}
    </S.Container>
  );
};

export default SwiperHorizontal;
