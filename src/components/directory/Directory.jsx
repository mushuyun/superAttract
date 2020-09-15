import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from '../menuItem/MenuItem';
import { selectDirectorySections } from "../../redux/directory/directorySelectors"

import './Directory.scss';

const Directory =({sections}) => {
  
// 3 ways to map the section, we take the most efficient way!
    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
 

const mapStateToProps = createStructuredSelector ({
  sections: selectDirectorySections
});

export default connect(mapStateToProps) (Directory);