import React, { Component } from 'react';
import { connect } from "react-redux";
import firestore from "../modules/firestore.js";
import cookie from "react-cookies";

import ProgressBar from "react-bootstrap/ProgressBar";

class LoadTopics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: 0,
        };
    }

    componentDidMount() {
        let today = new Date()
        cookie.remove("db_update");
        if (cookie.load("db_update") === today.toISOString().split("T")[0]) {
            console.log("Cached Topics")
            this.setState({loaded: 100})
            cookie.save("db_update", today.toISOString().split("T")[0], {path: "/"})
            cookie.save("topics", cookie.load("topics"), {path: "/"});
            this.props.setTopics(cookie.load("topics"))
        } else {
            console.log("Getting Topics")
            firestore.collection("topics").get().then(resp => {
                let topics = {}
                for (let topic in resp.docs) {
                    let data = resp.docs[topic].data()
                    topics[data.topic] = data.words
                }
                this.setState({loaded: 100})
                cookie.save("db_update", today.toISOString().split("T")[0], {path: "/"})
                cookie.save("topics", topics, {path: "/"});
                this.props.setTopics(topics)
            });
        }
    }

    render() {
        return (
            <div>
                <ProgressBar now={this.state.loaded} label={this.state.loaded+"%"}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    setTopics: (topics) => dispatch({
        type: "set_topics",
        payload: topics
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoadTopics);
