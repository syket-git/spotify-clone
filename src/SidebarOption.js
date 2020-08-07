import React from 'react';
import './SidebarOption.css';
const SidebarOption = ({title, Icon}) => {
    return (
        <div className="sidebarOption">
            {Icon  && <Icon className="sidebarOption__icon" />}
            { Icon ? <h4 className="sidebarOption__bigTitle">{title}</h4> : <p>{title}</p>}
        </div>
    );
};

export default SidebarOption;