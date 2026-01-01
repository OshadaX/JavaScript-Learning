import PropTypes from "prop-types";


function Student(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Graduated: {props.isGraduated ? "Yes" : "No"}</p>
        </div>
    )
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isGraduated: PropTypes.bool
}



export default Student
