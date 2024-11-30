// components/TinderCarousel.js

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const TinderCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 para esquerda, 1 para direita

  const handleDragEnd = (info) => {
    if (info.offset.x > 100 && currentIndex > 0) {
      setDirection(1); // Swipe para direita
      setCurrentIndex((prev) => prev - 1);
    } else if (info.offset.x < -100 && currentIndex < items.length - 1) {
      setDirection(-1); // Swipe para esquerda
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <CarouselContainer>
      <AnimatePresence custom={direction}>
        <motion.div
          key={currentIndex}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          initial={{ x: direction === 1 ? -300 : 300, opacity: 0 }} // Entrada do card
          animate={{ x: 0, opacity: 1 }} // Estado padrão do card
          exit={{ x: direction === 1 ? 300 : -300, opacity: 0 }} // Saída do card
          transition={{ duration: 0.5 }}
        >
          <Card>{items[currentIndex]}</Card>
        </motion.div>
      </AnimatePresence>
    </CarouselContainer>
  );
};

export default TinderCarousel;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Card = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 300px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
