// src/app/components/Capsule.js
'use client';

import React from 'react';
import tinycolor from 'tinycolor2';

const Capsule = ({ icon: Icon, title, color = '#ffffff', size = 0.8 }) => {
  const baseColor = tinycolor(color);
  const topColor = baseColor.setAlpha(0.25).toRgbString();
  const bottomColor = baseColor.setAlpha(0.25).darken(10).toRgbString();
  const borderColor = baseColor.lighten(10).setAlpha(0.60).toRgbString();

  // All sizing now scales with `size`
  const height = `${2 * size}rem`;
  const minWidth = `${3.5 * size}rem`;
  const paddingX = `${0.75 * size}rem`;
  const fontSize = `${0.875 * size}rem`;
  const iconSize = `${1 * size}rem`;

  return (
    <div
      className="flex items-center rounded-full backdrop-blur-md"
      style={{
        background: `linear-gradient(to bottom, ${topColor}, ${bottomColor})`,
        border: `1px solid ${borderColor}`,
        height: height,
        minWidth: minWidth,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        fontSize: fontSize,
        gap: `${0.5 * size}rem`,
      }}
    >
      {Icon && <Icon style={{ width: iconSize, height: iconSize }} className="opacity-90" />}
      <span className="opacity-90 font-medium">{title}</span>
    </div>
  );
};

export default Capsule;
