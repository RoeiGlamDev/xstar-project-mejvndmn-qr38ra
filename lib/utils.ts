import React from 'react';

export const formatReviewDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

export const truncateText = (text: string, maxLength: number): string => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

export const getCleanServiceList = (): Array<{ id: number; name: string; description: string }> => {
    return [
        { id: 1, name: 'Residential Cleaning', description: 'Thorough cleaning for your home.' },
        { id: 2, name: 'Commercial Cleaning', description: 'Professional cleaning for your business.' },
        { id: 3, name: 'Deep Cleaning', description: 'Intensive cleaning for a fresh start.' },
        { id: 4, name: 'Move In/Out Cleaning', description: 'Cleaning services for moving in or out.' },
    ];
};

export const getTestimonials = (): Array<{ id: number; name: string; review: string; date: string }> => {
    return [
        { id: 1, name: 'John Doe', review: 'Fantastic service! Highly recommend.', date: '2023-10-01' },
        { id: 2, name: 'Jane Smith', review: 'Very professional and thorough.', date: '2023-09-15' },
        { id: 3, name: 'Emily Johnson', review: 'My house has never looked better!', date: '2023-08-20' },
    ];
};

export default {
    formatReviewDate,
    truncateText,
    getCleanServiceList,
    getTestimonials,
};