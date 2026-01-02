import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

interface ImageCarouselProps {
    images: string[];
    autoplayInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, autoplayInterval = 5000 }) => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const toggleLightbox = () => setIsLightboxOpen(!isLightboxOpen);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (isLightboxOpen) return; // Pause autoplay when lightbox is open
        const interval = setInterval(nextSlide, autoplayInterval);
        return () => clearInterval(interval);
    }, [autoplayInterval, nextSlide, isLightboxOpen]);

    if (!images || images.length === 0) return null;

    return (
        <>
            <div className="relative w-full h-[500px] overflow-hidden group">
                {/* Images */}
                <div
                    className="flex h-full transition-transform duration-700 ease-in-out cursor-pointer"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    onClick={toggleLightbox}
                >
                    {images.map((img, index) => (
                        <div key={index} className="min-w-full h-full relative">
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20" />

                            {/* Expand Icon Hint */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <Maximize2 className="w-12 h-12 text-white drop-shadow-lg" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    aria-label="Previous slide"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    aria-label="Next slide"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2" onClick={(e) => e.stopPropagation()}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300">
                    <button
                        onClick={toggleLightbox}
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                    >
                        <X className="w-10 h-10" />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                        className="absolute left-4 lg:left-8 text-white/50 hover:text-white transition-colors p-2"
                    >
                        <ChevronLeft className="w-12 h-12" />
                    </button>

                    <img
                        src={images[currentIndex]}
                        alt="Fullscreen view"
                        className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                        className="absolute right-4 lg:right-8 text-white/50 hover:text-white transition-colors p-2"
                    >
                        <ChevronRight className="w-12 h-12" />
                    </button>

                    {/* Overlay close handler */}
                    <div className="absolute inset-0 -z-10" onClick={toggleLightbox} />
                </div>
            )}
        </>
    );
};

export default ImageCarousel;
