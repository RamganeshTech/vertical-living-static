import React from 'react';
import { useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { useRazorpay } from '../../hooks/useRazorpay';
import Booking from './Booking';
// import { useRazorpay } from '../hooks/useRazorpay';

// Define your plans locally to get the correct price based on the ID
const PLANS = [
    { id: 'standard', name: 'Standard Package', price: 5000 },
    { id: 'premium', name: 'Premium Package', price: 15000 },
    { id: 'luxury', name: 'Luxury Package', price: 25000 },
    { id: "consultation", name: "Consultation", price: 4999},
    { id: "design", name: "Design Only", price: 19999}
];

const BookingPage: React.FC = () => {
    const { planId } = useParams<{ planId: string }>();
    return (
        <Booking planId={planId!} PLANS={PLANS} />
    )
};

export default BookingPage;