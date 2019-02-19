import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis quia laboriosam illo porro iusto possimus provident quam. Et dicta beatae nobis quisquam expedita obcaecati maiores. Corrupti maiores cupiditate sed!</p>
        </div>
    );
}

export default Rainbow(About);