import css from './Section.module.css';
import PropTypes from 'prop-types';


function Section({title, children}){
    return(<><div className={css.section_container}>
    <h2 className={css.section_header}>{title}</h2>
    {children}</div>
    </>)
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
export default Section;