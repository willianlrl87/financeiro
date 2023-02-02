import React from 'react';
import * as styles from './styles';
import {FaArrowCircleDown, FaArrowCircleUp} from 'react-icons/fa';


export const Resume = ({title, resumeValue}) => {
    return (
        <React.Fragment>
            <styles.Resume>
                <styles.ResumeTitle>
                    <p>{title}</p>
                    {title.toLowerCase() == 'entradas' ? <FaArrowCircleUp color='green' /> : null}
                    {title.toLowerCase() == 'saídas' || title.toLowerCase() == 'saidas' ? <FaArrowCircleDown color='red' /> : null}
                </styles.ResumeTitle>
                <styles.ResumeValue>
                    <strong>{resumeValue}</strong>
                </styles.ResumeValue>
            </styles.Resume>
        </React.Fragment>
    )
}