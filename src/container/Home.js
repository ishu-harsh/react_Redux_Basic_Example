import React, { Component } from  'react'
import {movieList} from '../actions/actions_file'

import MovieDisplay from '../components/DisplayCompenent'

import PropTypes from 'prop-types'
import {connect} from 'react-redux'
class Home extends Component{
    componentDidMount(){
        this.props.dispatch(movieList())
    }

    render (){
        return(
            <React.Fragment>
                <h1>Redux</h1>
                <MovieDisplay dataList={this.props.myData}/>
            </React.Fragment>
        )
    }
}

// To recieve State from the store
function mapStateToProp(state){
    console.log(state)
    return {
        myData : state.movies
    }
}

Home.protoTypes= {
    dispatch: PropTypes.func
}

export default connect(mapStateToProp)(Home)