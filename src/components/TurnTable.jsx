'use client';
import React from 'react';
import { ReactImageTurntable } from 'react-image-turntable';

export const Turntable = ({ images }) => <ReactImageTurntable
  images={images}
  autoRotate={{ disabled: true }}
  className="w-full h-full hover:cursor-grab active:cursor-grabbing"
/>;