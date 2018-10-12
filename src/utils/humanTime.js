import React from 'react';
import Moment from 'react-moment';

export default function humanReadableTime(timestamp) {
    let date = new Date(timestamp);
    return <Moment fromNow>{date}</Moment>;
}