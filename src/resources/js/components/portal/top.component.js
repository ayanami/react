import React from 'react';

export const Top = props => {
    const response = props.publisher.subscribe();
    console.log('content', response?.data?.content?.rendered);
    return <div dangerouslySetInnerHTML={{ __html: response?.data?.content?.rendered }} />;
}