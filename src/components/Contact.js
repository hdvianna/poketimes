import React from 'react'

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about');
    }, 2000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis quia laboriosam illo porro iusto possimus provident quam. Et dicta beatae nobis quisquam expedita obcaecati maiores. Corrupti maiores cupiditate sed!</p>
        </div>
    );
}

export default Contact;