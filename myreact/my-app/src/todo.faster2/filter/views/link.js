import React from 'react';
import { setFilter } from '../Action';
import {connect} from 'react-redux';

const Link = ({active, children, onClick}) =>{
    if(active) {
        return <b className="filter selected"> {children}</b>
    }else{
        return(
            <a href="#" className="filter not-selected" onClick={
                (ev) => {
                    ev.preventDefault();
                     onClick();
                }
            }>
                {children}
            </a>
        )
    }
}


const mapStateToProps = (state, ownPorps) =>{
    return {
        active: state.filter == ownPorps.filter
    }
}

const mapDispatchToProps  = (dispatch, ownPorps) => ({
    onClick: () => {
        dispatch(setFilter(ownPorps.filter))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)