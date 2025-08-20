import React from 'react';

interface Review {
    id: number;
    name: string;
    content: string;
    rating: number; // 1 to 5
}

const reviews: Review[] = [
    { id: 1, name: 'John Doe', content: 'Excellent cleaning service!', rating: 5 },
    { id: 2, name: 'Jane Smith', content: 'Very professional and thorough.', rating: 4 },
    { id: 3, name: 'Alice Johnson', content: 'Highly recommend CleanSSR!', rating: 5 },
];

const ReviewList: React.FC = () => {
    return (
        <div className="review-list">
            {reviews.map(review => (
                <div key={review.id} className="review">
                    <h3>{review.name}</h3>
                    <p>{review.content}</p>
                    <p>Rating: {'⭐'.repeat(review.rating)}</p>
                </div>
            ))}
        </div>
    );
};

const ThreeUtils: React.FC = () => {
    return (
        <div className="three-utils" style={{ backgroundColor: '#f9f9f9', color: '#4B0082' }}>
            <h1>Welcome to CleanSSR</h1>
            <p>Your trusted cleaning service.</p>
            <ReviewList />
        </div>
    );
};

export default ThreeUtils;