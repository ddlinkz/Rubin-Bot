import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class TweetList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllTweets().then(tweets => {
            this.setState({
                tweets: tweets.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { tweets, isLoading } = this.state;
        console.log('TCL: TweetList -> render -> tweets', tweets);

        return (
            <Wrapper>
                {this.state.tweets}
            </Wrapper>
        )
    }
}

export default TweetList;