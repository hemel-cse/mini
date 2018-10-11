import React from 'react';
import Spin from 'antd/lib/spin';

const Loading = () => (
    <div className="loading">
        <Spin size="large" />
    </div>
);

export default Loading;
