import React, { useState, useEffect } from 'react';
import DetailsButton from './DetailsButton';
import ReviewContent from './ReviewContent';
import QuestionContent from './QuestionContent';

const ClientActivities = () => {
    const [activeTab, setActiveTab] = useState('reviews'); // cтейт для активной вкладки
    useEffect(() => {
        console.log('Активная вкладка изменилась:', activeTab);
    }, [activeTab]);

    return (
        <div className="">
            <div className="flex justify-center space-x-6 pb-2 mb-7">
                <DetailsButton
                    onClick={() => setActiveTab('reviews')}
                    className={activeTab === 'reviews' ? 'underline underline-offset-[8px] decoration-[2px]' : ''}
                >
                    REVIEWS 11
                </DetailsButton>
                <DetailsButton
                    onClick={() => setActiveTab('questions')}
                    className={activeTab === 'questions' ? 'underline underline-offset-[8px] decoration-[2px]' : ''}
                >
                    QUESTIONS 22
                </DetailsButton>
            </div>
            <div className="content">
                {activeTab === 'reviews' ? <ReviewContent /> : <QuestionContent />}
            </div>
        </div>
    );
};

export default ClientActivities;