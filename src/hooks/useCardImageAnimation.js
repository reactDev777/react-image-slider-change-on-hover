import React, { useEffect, useState } from "react";

const useReactImageSlider = ({ images, x ,cardWidth}) => {
  const [active, setActive] = useState(0);
  const [imagePath, setImagePath] = useState(images[0]?.url);

  useEffect(() => {
    if (images?.length > 0) {
      const imageCount = images.length;

      const imageWidth = cardWidth / imageCount;
      let activeImageIndex = Math.floor(x / imageWidth);

      if (activeImageIndex < 0) {
        activeImageIndex = 0;
      } else if (activeImageIndex >= imageCount) {
        activeImageIndex = imageCount - 1;
      }

      setActive(activeImageIndex);
      setImagePath(images[activeImageIndex]?.url);
    }
  }, [x, images]);

  return {
    active,
    currentActiveImage: imagePath,
  };
};

export default useReactImageSlider;
